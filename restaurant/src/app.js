
loadMapsJSAPI();

function runApp() {
    console.log('Maps JS API loaded');
    const map = displayMap();
}

function loadMapsJSAPI() {
    //google api 설정
    const googleMapsAPIKey = process.env.GOOGLE_MAP_KEY;
    const googleMapsAPIURI = `https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=runApp`;
    
    //html과 연동 부분
    const script = document.createElement('script');
    script.src = googleMapsAPIURI;
    script.defer = true;
    script.async = true;

    //html 파일이 아닌 js에서 api를 로드하므로 window 객체에 콜백을 직접 추가
    window.runApp = runApp;

    document.head.appendChild(script);
}

function displayMap() {
    
    //지도 중심에 띄어질 좌표 표시
    const mapOptions = {
      center: { lat: 36.62901480925151, lng: 127.45639112649779 },
      zoom: 14
    };

    //html 상의 div(id:map)을 bindign한다
    const mapDiv = document.getElementById('map');

    //위의 정보들을 바탕으로 map을 띄워준다
    const map = new google.maps.Map(mapDiv, mapOptions);
    return map;
  }


