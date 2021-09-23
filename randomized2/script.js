//"./images/africaCape.jpg" - forward slash, ./images/filenamehere
const africaCapeAr = [
    "./images/africaCape.jpg",
    "./images/africaCape2.jpeg",
    "./images/africaCape3.jpeg"
];
const americasAr = [
    "./images/americas.jpg", 
    "./images/americas2.jpeg", 
    "./images/americas3.jpeg",
    "./images/americas4.jpeg"
];
const arabiaAr = [
    "./images/arabia.jpg",
    "./images/arabia2.jpeg",
    "./images/arabia3.jpeg",
    "./images/arabia4.jpeg",
    "./images/arabia5.jpeg",
    "./images/arabia6.jpeg",
    "./images/arabia7.jpeg",
    "./images/arabia8.jpeg",
    "./images/arabia9.jpeg",
    "./images/arabia10.jpeg",
    "./images/arabia11.jpeg"
];
const basketballAr = [
    "./images/basketball.jpg",
    "./images/basketball2.jpeg",
    "./images/basketball3.jpeg"
];
const buddhtempleAr = [
    "./images/buddhtemple.jpg",
    "./images/buddhtemple2.jpeg",
    "./images/buddhtemple3.jpeg"
];
const carpetAr = [
    "./images/carpet.jpg",
    "./images/carpet2.jpeg",
    "./images/carpet3.jpeg"
];
const cathedralAr = [
    "./images/cathedral.jpg",
    "./images/cathedral2.jpeg",
    "./images/cathedral3.jpeg",
    "./images/cathedral4.jpeg"
];
const chicagoAr = [
    "./images/chicago.jpg",
    "./images/chicago2.jpeg",
    "./images/chicago3.jpeg"
];
const chinaAr = [
    "./images/china.jpg",
    "./images/china2.jpeg",
    "./images/china3.jpeg"
];
const coloradoAr = [
    "./images/colorado.jpg",
    "./images/colorado2.jpeg",
    "./images/colorado3.jpeg"
];
const cosmosAr = [
    "./images/cosmos.jpg",
    "./images/cosmos2.jpeg",
    "./images/cosmos3.jpeg",
    "./images/cosmos4.jpeg",
    "./images/cosmos5.jpeg"
];
const eastAsiaAr = [
    "./images/eastAsia.jpg",
    "./images/eastAsia2.jpeg",
    "./images/eastAsia3.jpeg"
];
const europeMapAr = [
    "./images/europeMap.jpg",
    "./images/europeMap2.jpeg",
    "./images/europeMap3.jpeg",
    "./images/europeMap4.jpeg",
    "./images/europeMap5.jpeg"
];
const hawaiiAr = [
    "./images/hawaii.jpeg",
    "./images/hawaii2.jpeg",
    "./images/hawaii3.jpeg",
    "./images/hawaii4.jpeg"
];
const himalayasAr = [
    "./images/himalayas.jpg",
    "./images/himalayas2.jpeg",
    "./images/himalayas3.jpeg",
    "./images/himalayas4.jpeg",
    "./images/himalayas5.jpeg",
    "./images/himalayas6.jpeg",
    "./images/himalayas7.jpeg"
];
const ikeaAr = [
    "./images/ikea.jpg",
    "./images/ikea2.jpeg",
    "./images/ikea3.jpeg"
];
const meccaAr = [
    "./images/mecca.jpg",
    "./images/mecca2.jpeg",
    "./images/mecca3.jpeg",
    "./images/mecca4.jpeg",
    "./images/mecca5.jpeg",
    "./images/mecca6.jpeg"
];
const meccabAr = [
    "./images/meccab.jpeg",
    "./images/meccab2.jpeg",
    "./images/mecab3.jpeg",
    "./images/meccab4.jpeg"
];
const moonAr = [
    "./images/moon.jpg",
    "./images/moon2.jpeg",
    "./images/moon3.jpeg"
];
const nycAr = [
    "./images/nyc.jpg",
    "./images/nyc2.jpeg",
    "./images/nyc3.jpeg",
    "./images/nyc4.jpeg",
    "./images/nyc5.jpeg",
    "./images/nyc7.jpeg",
    "./images/nyc8.jpeg",
    "./images/nyc9.jpeg"
];
const pentagonAr = [
    "./images/pentagon.jpg",
    "./images/pentagon2.jpeg",
    "./images/pentagon3.jpeg",
    "./images/pentagon4.jpeg",
    "./images/pentagon5.jpeg"
];
const poolAr = [
    "./images/pool.jpg",
    "./images/pool2.jpeg",
    "./images/pool3.jpeg",
    "./images/pool4.jpeg"
];
const reefAr = [
    "./images/reef.jpg",
    "./images/reef2.jpeg",
    "./images/reef3.jpeg",
    "./images/reef4.jpeg",
    "./images/reef5.jpeg",
    "./images/reef6.jpeg",
    "./images/reef7.jpeg",
    "./images/reef8.jpeg",
    "./images/reef9.jpeg",
    "./images/reef10.jpeg",
    "./images/reef11.jpeg",
    "./images/reef12.jpeg",
    "./images/reef13.jpeg",
    "./images/reef14.jpeg"
];
const samericaAr = [
    "./images/samerica.jpg",
    "./images/samerica2.jpeg",
    "./images/samerica3.jpeg",
    "./images/samerica4.jpeg",
    "./images/samerica5.jpeg",
    "./images/samerica6.jpeg",
    "./images/samerica7.jpeg"
];
const trackAr = [
    "./images/track.jpg",
    "./images/track2.jpeg",
    "./images/track3.jpeg"
]

const arrayList = [africaCapeAr, americasAr, arabiaAr, basketballAr, buddhtempleAr, carpetAr, cathedralAr, chicagoAr, chinaAr, coloradoAr, cosmosAr, eastAsiaAr, europeMapAr, hawaiiAr, himalayasAr, ikeaAr, meccaAr, meccabAr, moonAr, nycAr, pentagonAr, poolAr, reefAr, samericaAr, trackAr];
const namesList = ["south-african cape", "the americas", "arabian peninsula", "basketball court", "buddhist temple", "children's carpet", "st. basil's cathedral", "chicago", "china", "colorado roads", "the cosmos", "southeast asia", "europe", "hawaii coast", "the himalayas", "ikea", "mecca", "mecca", "the moon", "new york city", "the pentagon", "pool", "great barrier reef", "south america", "track"];

window.addEventListener("DOMContentLoaded", (event) => {
    document.body.style.overflow = "hidden"
    document.body.style.cursor = "pointer";
    let count = Math.round(Math.random()*arrayList.length);
    if (count == 25){
        count = 24;
    }
    console.log(count);
    document.getElementById("currentSetLabel").innerHTML=namesList[count];
    if(count == 0 || count == 6 || count == 22){ //if long text, decrease font size
        document.getElementById("currentSetLabel").style.fontSize = "11vw";
        document.getElementById("currentSetLabel").style.width = "60vw";
    } else {
        document.getElementById("currentSetLabel").style.fontSize = "16vw";
    }
    for (let i=1; i < arrayList[count].length; i++){
        console.log(arrayList[count][i]);
        let createImg = document.createElement("div");
        createImg.style.backgroundImage = "url("+arrayList[count][i]+")";
        createImg.style.backgroundRepeat = "no-repeat";
        createImg.style.position = "absolute";
        let leftMargin = Math.random()*80+1 + "vw";
        let topMargin = Math.random()*45+1 + "vh";
        createImg.style.marginLeft = leftMargin;
        createImg.style.marginTop = topMargin;
        min = 250;
        max = 650;
        createImg.style.height = Math.floor(Math.random() * (max - min) + min) + "px";
        createImg.style.width = Math.floor(Math.random() * (max - min) + min) + "px";
        createImg.style.backgroundSize = "50%";
        createImg.style.opacity = "65%";
        document.body.append(createImg);
    }

    document.body.addEventListener("click", function() {
        location.reload(true);
    });
});