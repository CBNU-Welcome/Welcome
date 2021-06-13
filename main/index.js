let map;
let markers = [];

function initMap() {
    var mapCanvas = document.getElementById("wayMapDiv");
    var centerLoc = new google.maps.LatLng(36.62904387998785, 127.45628645377191);
    var mapOptions = {center: centerLoc, zoom: 15};
    map = new google.maps.Map(mapCanvas, mapOptions);

    google.maps.event.addDomListener(document.getElementById('front'), 'click', function (evt) {
        setBusStopMarker("front");
        smoothZoom(11);
    });
    google.maps.event.addDomListener(document.getElementById('middle'), 'click', function (evt) {
        setBusStopMarker("middle");
        smoothZoom(12);
    });
    google.maps.event.addDomListener(document.getElementById('west'), 'click', function (evt) {
        setBusStopMarker("west");
        smoothZoom(13);
    });
    google.maps.event.addDomListener(document.getElementById('back'), 'click', function (evt) {
        setBusStopMarker("back");
        smoothZoom(14);
    });
}

function setBusStopMarker(loc) {
    deleteMarkers();
    switch (loc) {
        case "front":
            addMarker(36.6323038633615, 127.4527244256218); // 0
            addMarker(36.632067662678224, 127.45223047993385); // 1
            setMarkersListener(0, 1, -1, -1)
            break;
        case "middle":
            addMarker(36.633184548391675, 127.4606550985035); // 2, 중문 롯데리아 쪽
            addMarker(36.63357358294582, 127.46069316767623); // 3, 중문 롯데리아 길 건너편
            addMarker(36.63491035659281, 127.45940981345144); // 4,
            setMarkersListener(2, 3, 4, -1)
            break;
        case "west":
            addMarker(36.62544548789886, 127.44972695581855); // 5, 서문 길 건너편
            addMarker(36.62493918975336, 127.44991166638248); // 6, 길 안건너고
            setMarkersListener(5, 6, -1, -1)
            break;
        case "back":
            addMarker(36.62422264219441, 127.4635530069435); // 7, 병원쪽
            addMarker(36.62556259542006, 127.4635953569959); // 8, 자취방쪽
            addMarker(36.62419193584869, 127.46444502562547); // 9, 모르는 곳
            addMarker(36.62395246703185, 127.4642091644376); // 10, 병원 건너편
            setMarkersListener(7, 8, 9, 10)
            break;
    }
}

function setMarkersListener(pos0, pos1, pos2, pos3) {
    const contentStrings = [
        //0
        '<h5>Bus Info0</h5>' +
        '<p>' +
        '<b>004</b>, interval : -<br>' +
        '<b>50-1</b>, interval : 27min<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '</p>',
        //1
        '<h5>Bus Info1</h5>' +
        '<p>' +
        '<b>003</b>, interval : -<br>' +
        '<b>007</b>, interval : -<br>' +
        '<b>50-2</b>, interval : 26min<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '</p>',
        //2
        '<h5>Bus Info2</h5>' +
        '<p>' +
        '<b>20-1</b>, interval : 35min<br>' +
        '<b>30-2</b>, interval : 22min<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '<b>851</b>, interval : 31min<br>' +
        '</p>',
        //3
        '<h5>Bus Info3</h5>' +
        '<p>' +
        '<b>012</b>, interval : -<br>' +
        '<b>30-1</b>, interval : 22min<br>' +
        '<b>851</b>, interval : 31min<br>' +
        '</p>',
        //4
        '<h5>Bus Info4</h5>' +
        '<p>' +
        '<b>007</b>, interval : -<br>' +
        '<b>010</b>, interval : -<br>' +
        '<b>50-2</b>, interval : 26min<br>' +
        '<b>101</b>, interval : 49min<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '<b>831</b>, interval : 17min<br>' +
        '</p>',
        //5
        '<h5>Bus Info5</h5>' +
        '<p>' +
        '<b>003</b>, interval : -<br>' +
        '<b>007</b>, interval : -<br>' +
        '<b>50-2</b>, interval : 26min<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '</p>',
        //6
        '<h5>Bus Info6</h5>' +
        '<p>' +
        '<b>007</b>, interval : -<br>' +
        '<b>50-1</b>, interval : 27min<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '</p>',
        //7
        '<h5>Bus Info7</h5>' +
        '<p>' +
        '<b>005</b>, interval : -<br>' +
        '<b>20-1</b>, interval : 35min<br>' +
        '<b>512</b>, interval : 130min<br>' +
        '<b>512-2</b>, interval : -<br>' +
        '<b>512-3</b>, interval : 217min<br>' +
        '<b>811-1</b>, interval : -<br>' +
        '</p>',
        //8
        '<h5>Bus Info8</h5>' +
        '<p>' +
        '<b>007</b>, interval : -<br>' +
        '<b>012</b>, interval : -<br>' +
        '<b>20-2</b>, interval : -<br>' +
        '<b>30-1</b>, interval : 22min<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '<b>851</b>, interval : 31min<br>' +
        '</p>',
        //9
        '<h5>Bus Info9</h5>' +
        '<p>' +
        '<b>007</b>, interval : -<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '<b>843</b>, interval : 44min<br>' +
        '<b>851</b>, interval : 31min<br>' +
        '</p>',
        //10
        '<h5>Bus Info10</h5>' +
        '<p>' +
        '<b>710</b>, interval : -<br>' +
        '<b>823</b>, interval : 15min<br>' +
        '<b>843</b>, interval : 44min<br>' +
        '<b>851</b>, interval : 31min<br>' +
        '</p>'
    ]

    if (pos0 != -1) {
        if (pos0 == 0) {
            const infowindow = new google.maps.InfoWindow({
                content: contentStrings[0],
            });
            markers[0].addListener("click", () => {
                // map.setZoom(16);
                // map.setCenter(markers[0].getPosition());
                smoothZoom(0)
                infowindow.open(map, markers[0]);
            });
        } else if (pos0 == 2) {
            const infowindow = new google.maps.InfoWindow({
                content: contentStrings[2],
            });
            markers[0].addListener("click", () => {
                smoothZoom(0)
                infowindow.open(map, markers[0])
            })
        } else if (pos0 == 5) {
            const infowindow = new google.maps.InfoWindow({
                content: contentStrings[5],
            });
            markers[0].addListener("click", () => {
                smoothZoom(0)
                infowindow.open(map, markers[0])
            })
        } else if (pos0 == 7) {
            const infowindow = new google.maps.InfoWindow({
                content: contentStrings[7],
            });
            markers[0].addListener("click", () => {
                smoothZoom(0)
                infowindow.open(map, markers[0])
            })
        }
    }

    if (pos1 != -1) {
        if (pos1 == 1) {
            const infowindow0 = new google.maps.InfoWindow({
                content: contentStrings[1],
            });
            markers[1].addListener("click", () => {
                smoothZoom(1)
                infowindow0.open(map, markers[1])
            });
        } else if (pos1 == 3) {
            const infowindow = new google.maps.InfoWindow({
                content: contentStrings[3],
            });
            markers[1].addListener("click", () => {
                smoothZoom(1)
                infowindow.open(map, markers[1])
            })
        } else if (pos1 == 6) {
            const infowindow = new google.maps.InfoWindow({
                content: contentStrings[6],
            });
            markers[1].addListener("click", () => {
                smoothZoom(1)
                infowindow.open(map, markers[1])
            })
        } else if (pos1 == 8) {
            const infowindow = new google.maps.InfoWindow({
                content: contentStrings[8],
            });
            markers[1].addListener("click", () => {
                smoothZoom(1)
                infowindow.open(map, markers[1])
            })
        }
    }

    if (pos2 != -1) {
        if (pos2 == 1) {
            const infowindow0 = new google.maps.InfoWindow({
                content: contentStrings[1],
            });
            markers[2].addListener("click", () => {
                smoothZoom(2)
                infowindow0.open(map, markers[2])
            });
        } else if (pos2 == 4) {
            const infowindow0 = new google.maps.InfoWindow({
                content: contentStrings[4],
            });
            markers[2].addListener("click", () => {
                smoothZoom(2)
                infowindow0.open(map, markers[2])
            });
        } else if (pos2 == 9) {
            const infowindow0 = new google.maps.InfoWindow({
                content: contentStrings[9],
            });
            markers[2].addListener("click", () => {
                smoothZoom(2)
                infowindow0.open(map, markers[2])
            });
        }
    }

    if (pos3 != -1) {
        if (pos3 == 1) {
            const infowindow0 = new google.maps.InfoWindow({
                content: contentStrings[1],
            });
            markers[3].addListener("click", () => {
                smoothZoom(3)
                infowindow0.open(map, markers[3])
            });
        }
        if (pos3 == 10) {
            const infowindow0 = new google.maps.InfoWindow({
                content: contentStrings[10],
            });
            markers[3].addListener("click", () => {
                smoothZoom(3)
                infowindow0.open(map, markers[3])
            });
        }
    }
}

function smoothZoom(num) {
    if (num == 11) { // 정문
        map.setZoom(16);
        map.setCenter({lat: 36.632593570811615, lng: 127.45298188113111});
    } else if (num == 12) { // 중문
        map.setZoom(16);
        map.setCenter({lat: 36.63383227446543, lng: 127.46017496421278});
    } else if (num == 13) { // 서문
        map.setZoom(16);
        map.setCenter({lat: 36.62612130015395, lng: 127.45235665681041});
    } else if (num == 14) { // 후문
        map.setZoom(16);
        map.setCenter({lat: 36.6245692753675, lng: 127.46379517859513});
    } else {
        map.setZoom(19);
        map.setCenter(markers[num].getPosition());
    }

}


function addMarker(lat, lng) {
    const markerLatLng = {lat: lat, lng: lng};
    const marker = new google.maps.Marker({
        position: markerLatLng,
        map: map,
    });
    markers.push(marker);
}

function deleteMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}