
loadMapsJSAPI();

function runApp() {
    console.log('Maps JS API loaded');
}

function loadMapsJSAPI() {
    //google api 설정
    const googleMapsAPIKey = 'AIzaSyDNwxa3PHKGAkVNz__Ec_j2iIPZF--rsZo';
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


