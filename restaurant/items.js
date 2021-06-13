const everyRestInfo = AllGate();

function restInfo(name, locationX, locationY, hash, color, phone){
    this.name = name;
    this.locationX = locationX;
    this.locationY = locationY;
    this.hash = hash;
    this.color = color;
    this.phone = phone;
}

function MiddleGate(){
    let middleRest = new Array();
    middleRest.push(new restInfo("soju-groom-bossam", 36.63284363540985, 127.45919928448708 ,"#Bossam	#kimchi-stew", 1, "0507-1467=1478"));
    middleRest.push(new restInfo("brito-in", 36.632671442644245, 127.45881304642029, "#brito #fast-food",1, "043-260-9250"));
    middleRest.push(new restInfo("han-ga-ne", 36.63243898180032, 127.45741829784583, "#chinese food #jajangmyeon #champon",1, "043-262-0410"));
    middleRest.push(new restInfo("first-nepal-restaurant", 36.63354168912887, 127.460053160094, "#curry #tandoori chicken",1, "043-260-5363"));
    middleRest.push(new restInfo("boseung", 36.632832667030065, 127.45877727930757, "#sundae-gukbap",1, "043-262-9898"));
    middleRest.push(new restInfo("tto-tto-wa", 36.632490291089105, 127.45756034918597, "#soft tofu",1, "043-274-5181"));
    middleRest.push(new restInfo("chong-gak-waffle", 36.63237406048157, 127.45774542159295, "#waffle",1, "070-4044-1224"));
    middleRest.push(new restInfo("no-goon", 36.63190052656431, 127.45738600557254, "#japanese #gaksu-dong",1, "0507-1326-8759"));
    middleRest.push(new restInfo("out-dak", 36.63302190661619, 127.45945161793502, "#chicken",1, "0507-1321-5892"));
    middleRest.push(new restInfo("do-nu-ga grill", 36.63300038259133, 127.45888835408763, "#pork belly",1, "043-265-9300"));
    middleRest.push(new restInfo("macho-bulgogi", 36.63261940634666, 127.45735681281076, "#bulgogi",1, "043-264-6864"));
    return middleRest;
}

function FrontGate(){
    let frontRest = new Array();
    frontRest.push(new restInfo("e-gane", 36.63205011468775, 127.45168960100418, "#kimchi-pancake", 2, "043-277-2003"));
    frontRest.push(new restInfo("u-jeongbu-bude-stew", 36.63283601163246, 127.45146725781102, "#bag-stew", 2, "no-result"));
    frontRest.push(new restInfo("ari-san", 36.63331278699086, 127.44984963479706, "#chinese food #sweet-sour-pork", 2, "043-268-0713"));
    frontRest.push(new restInfo("mat-it-neun-bab-han-ggi", 36.631909389586326, 127.45137663755177, "#korean-food", 2, "043-236-2827"));
    return frontRest;
}

function BackGate(){
    let backRest = new Array();
    backRest.push(new restInfo("pascucci", 36.62490695222346, 127.46460426210612, "#coffee",3, "043-264-03333"));
    backRest.push(new restInfo("idiya", 36.62497140973501, 127.46464653320837, "#coffee",3, "043-266-7373"));
    backRest.push(new restInfo("kim-bob-chun-guk", 36.625159105586484, 127.46593787808077, "#kimbab #tteok-bok-ggi",3, "043-273-1008"));
    backRest.push(new restInfo("seoul-dak-bbal", 36.625873572628954, 127.46659976821323, "#chicken-foot",3, "043-264-6258"));
    backRest.push(new restInfo("han-woo-ma-ul", 36.62509910166902, 127.4670281061385, "#beef",3, "043-257-2944"));
    backRest.push(new restInfo("hong-kong-bangeom", 36.6257307475465, 127.46841373678964, "#chinese food #jajangmyeon #champon",3, "no-result"));
    return backRest;
}

function WestGate(){
    let westRest = new Array();
    westRest.push(new restInfo("normal-noodle-jip", 36.62610414958802, 127.45209996653904, "#kalguksu #stir-fried-pork #only in lunch", 4, "043-902-2760"));
    westRest.push(new restInfo("sam-mi-ddak-bal", 36.62615425014548, 127.44945305892169 , "#chicken-foot #Pajeon #chicken", 4, "no-result"));
    westRest.push(new restInfo("hong-deung", 36.62724205604226, 127.44979477795522, "#chinese-food #jajangmyeon #cha-dol-champon", 4, "043-265-8246"));
    westRest.push(new restInfo("nam-han-sansueng", 36.62616244291613, 127.44967200808406, "#dining-together #pork-belly #stir-fried-pork", 4, "043-272-5868"));
    westRest.push(new restInfo("bi-ryeong-gak", 36.62577969416892, 127.44961720237164, "#chicken-foot #Pajeon #chicken", 4, "043-273-8281"));
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
