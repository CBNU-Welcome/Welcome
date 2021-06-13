
function myMap(){
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(36.62903526993053, 127.45630791115278);
    var mapOptions = {
        center: myCenter,
        zoom:15
    };
    map = new google.maps.Map(mapCanvas, mapOptions);

    var t1 = document.getElementById("buttonMiddle");
    var t2 = document.getElementById("buttonFront");
    var t3 = document.getElementById("buttonBack");
    var t4 = document.getElementById("buttonWest");
    var t5 = document.getElementById("closeOffcanvas");
    var t6 = document.getElementById("buttonWide");

    t1.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.633619808613375, 127.46043918416818));
        map.setZoom(18);
        });

    t2.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.63202593139542, 127.45219008231695));
        map.setZoom(18);  
    });

    t3.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.631124881824896, 127.46162208231705));
        map.setZoom(18);  
    });

    t4.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.62667852694975, 127.45175753126644));
        map.setZoom(18);  
    });

    t6.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.62903526993053, 127.45630791115278));        
        map.setZoom(15);
    })
    t5.addEventListener('click', function(event){
        const offCanvasElement = document.querySelector("#offcanvasExample");
        offCanvasElement.style.visibility= "hidden"; 
        offCanvasElement.classList.remove("show"); 
    })

    for(let i =0; i< everyRestInfo.length; i++) 
        for(let j =0; j<everyRestInfo[i].length; j++){
        const marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(everyRestInfo[i][j].locationX, everyRestInfo[i][j].locationY)
        });
        marker.setIcon(selectColor(everyRestInfo[i][j].color));
        google.maps.event.addListener(marker, 'click', function(){
            map.setCenter(marker.getPosition());
            map.setZoom(20);
            const offCanvasElement = document.querySelector("#offcanvasExample");
            const state = offCanvasElement.style.visibility; 
            if (state === "hidden") { 
            let element1 = document.getElementById("storeName");
            element1.innerText = `${everyRestInfo[i][j].name}`;
            let element2 = document.getElementById("locationX");
            element2.innerText = `${everyRestInfo[i][j].locationX}`;
            let element3 = document.getElementById("locationY");
            element3.innerText = `${everyRestInfo[i][j].locationY}`;
            let element5 = document.getElementById("hash");
            element5.innerText = `${everyRestInfo[i][j].hash}`;

            offCanvasElement.style.visibility= "visible"; 
            offCanvasElement.classList.add("show"); 
            }
            else { 
            console.log(state);
            offCanvasElement.style.visibility="hidden"; 
            offCanvasElement.classList.remove("show"); 
            }
        })
    }
}

function selectColor(color){
    let result;
    switch(color){
        case 1 :
            result = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            break;
        case 2 :
            result = "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
            break;
        case 3 :
            result = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            break;
        case 4 :
            result = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            break;
        default :
            result = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    }
    return result;
}