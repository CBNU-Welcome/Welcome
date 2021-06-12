
function myMap(){
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(36.62903526993053, 127.45630791115278);
    var mapOptions = {
        center: myCenter,
        zoom:13
    };
    map = new google.maps.Map(mapCanvas, mapOptions);

    var t1 = document.getElementById("buttonMiddle");
    var t2 = document.getElementById("buttonFront");
    var t3 = document.getElementById("buttonBack");
    var t4 = document.getElementById("buttonWest");
    var t5 = document.getElementById("closeOffcanvas");

    t1.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.633619808613375, 127.46043918416818));
        map.setZoom(16);
        });

    t2.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.63202593139542, 127.45219008231695));
        map.setZoom(16);  
    });

    t3.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.631124881824896, 127.46162208231705));
        map.setZoom(16);  
    });

    t4.addEventListener('click', function(event){
        map.setCenter(new google.maps.LatLng(36.62667852694975, 127.45175753126644));
        map.setZoom(16);  
    });

    t5.addEventListener('click', function(event){
        const offCanvasElement = document.querySelector("#offcanvasExample");
        offCanvasElement.style.visibility= "hidden"; 
        offCanvasElement.classList.remove("show"); 
    })

    for(let i =0; i< 4; i++) 
        for(let j =0; j<2; j++){
        const marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(everyRestInfo[i][j].locationX, everyRestInfo[i][j].locationY)
        });
        google.maps.event.addListener(marker, 'click', function(){
            map.setCenter(marker.getPosition());
            map.setZoom(20);
            const offCanvasElement = document.querySelector("#offcanvasExample");
            const state = offCanvasElement.style.visibility; 
            if (state === "hidden") { 
            let element = document.getElementById("storeName");
            element.innerText = `${everyRestInfo[i][j].name}`
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