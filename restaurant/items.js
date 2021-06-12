const everyRestInfo = AllGate();

function restInfo(name, locationX, locationY, topic, url){
    this.name = name;
    this.locationX = locationX;
    this.locationY = locationY;
    this.topic = topic;
    this.url = url;
}

function MiddleGate(){
    let middleRest = new Array();
    middleRest.push(new restInfo("Brito in", 36.6325830447289, 127.45881261542357  ,"brito", "u1.com"));
    middleRest.push(new restInfo("Nepal Restaurant", 36.63362117198181, 127.46014695376111, "nepal", "u2.com"));
    return middleRest;
}

function FrontGate(){
    let frontRest = new Array();
    frontRest.push(new restInfo("E gane", 36.63205011468775, 127.45168960100418, "zean", "u3.com"));
    frontRest.push(new restInfo("Arisan", 36.63343123074221, 127.44982898804105, "chinese", "u4.com"));
    return frontRest;
}

function BackGate(){
    let backRest = new Array();
    backRest.push(new restInfo("GalBi", 36.620944114376236, 127.4517052149377, "Galbi","u5.com"));
    backRest.push(new restInfo("Normal Guksu", 36.62621415673392, 127.45208376815307, "noodle","u6.com"));
    return backRest;
}

function WestGate(){
    let westRest = new Array();
    westRest.push(new restInfo("Korean News", 36.62614817511974, 127.46911145708717, "alchol", "u7.com"));
    westRest.push(new restInfo("Gambare Gambaro", 36.63042361561481, 127.4622490587106, "Japanese", "u8.com"));
    return westRest;
}

function AllGate(){
    const everyInfo = new Array();
    const middleRest = MiddleGate();
    const frontRest = FrontGate();
    const backRest = BackGate();
    const westRest = WestGate();
    everyInfo.push(middleRest);
    everyInfo.push(frontRest);
    everyInfo.push(backRest);
    everyInfo.push(westRest);
    return everyInfo;
}
