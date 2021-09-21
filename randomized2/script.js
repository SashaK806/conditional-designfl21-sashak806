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
    "./images/chicago2.jpg",
    "./images/chicago3.jpg"
];
const chinaAr = [
    "./images/china.jpg",
    "./images/china2.jpg",
    "./images/china3.jpg"
];
const coloradoAr = [
    "./images/colorado.jpg",
    "./images/colorado2.jpg",
    "./images/colorado3.jpg"
];
const cosmosAr = [
    "./images/cosmos.jpg",
    "./images/cosmos2.jpg",
    "./images/cosmos3.jpg",
    "./images/cosmos4.jpg",
    "./images/cosmos5.jpg"
];
const eastAsiaAr = [
    "./images/eastAsia.jpg",
    "./images/eastAsia2.jpg",
    "./images/eastAsia3.jpg"
];
const europeMapAr = [
    "./images/europeMap.jpg",
    "./images/europeMap2.jpg",
    "./images/europeMap3.jpg",
    "./images/europeMap4.jpg",
    "./images/europeMap5.jpg"
];
const hawaiiAr = [
    "./images/hawaii.jpeg",
    "./images/hawaii2.jpeg",
    "./images/hawaii3.jpeg",
    "./images/hawaii4.jpeg"
];
const himalayasAr = [
    "./images/himalayas.jpg",
    "./images/himalayas2.jpg",
    "./images/himalayas3.jpg",
    "./images/himalayas4.jpg",
    "./images/himalayas5.jpg",
    "./images/himalayas6.jpg",
    "./images/himalayas7.jpg"
];
const ikeaAr = [
    "./images/ikea.jpg",
    "./images/ikea2.jpg",
    "./images/ikea3.jpg"
];
const meccaAr = [
    "./images/mecca.jpg",
    "./images/mecca2.jpg",
    "./images/mecca3.jpg",
    "./images/mecca4.jpg",
    "./images/mecca5.jpg",
    "./images/mecca6.jpg"
];
const meccabAr = [
    "./images/meccab.jpeg",
    "./images/meccab2.jpeg",
    "./images/mecab3.jpeg",
    "./images/meccab4.jpeg"
];
const moonAr = [
    "./images/moon.jpg",
    "./images/moon2.jpg",
    "./images/moon3.jpg"
];
const nycAr = [
    "./images/nyc.jpg",
    "./images/nyc2.jpg",
    "./images/nyc3.jpg",
    "./images/nyc4.jpg",
    "./images/nyc5.jpg",
    "./images/nyc7.jpg",
    "./images/nyc8.jpg",
    "./images/nyc9.jpg"
];
const pentagonAr = [
    "./images/pentagon.jpg",
    "./images/pentagon2.jpg",
    "./images/pentagon3.jpg",
    "./images/pentagon4.jpg",
    "./images/pentagon5.jpg"
];
const poolAr = [
    "./images/pool.jpg",
    "./images/pool2.jpg",
    "./images/pool3.jpg",
    "./images/pool4.jpg"
];
const reefAr = [
    "./images/reef.jpg",
    "./images/reef2.jpg",
    "./images/reef3.jpg",
    "./images/reef4.jpg",
    "./images/reef5.jpg",
    "./images/reef6.jpg",
    "./images/reef7.jpg",
    "./images/reef8.jpg",
    "./images/reef9.jpg",
    "./images/reef10.jpg",
    "./images/reef11.jpg",
    "./images/reef12.jpg",
    "./images/reef13.jpg",
    "./images/reef14.jpg"
];
const samericaAr = [
    "./images/samerica.jpg",
    "./images/samerica2.jpg",
    "./images/samerica3.jpg",
    "./images/samerica4.jpg",
    "./images/samerica5.jpg",
    "./images/samerica6.jpg",
    "./images/samerica7.jpg"
];
const trackAr = [
    "./images/track.jpg",
    "./images/track2.jpg",
    "./images/track3.jpg"
]

const arrayList = [africaCapeAr, americasAr, arabiaAr, basketballAr, buddhtempleAr, carpetAr, cathedralAr, chicagoAr, chinaAr, coloradoAr, cosmosAr, eastAsiaAr, europeMapAr, hawaiiAr, himalayasAr, ikeaAr, meccaAr, meccabAr, moonAr, nycAr, pentagonAr, poolAr, reefAr, samericaAr, trackAr];
const namesList = ["south african cape", "the americas", "arabian peninsula", "basketball court", "buddhist temple", "children's carpet", "st. basil's cathedral", "chicago", "china", "colorado roads", "the cosmos", "southeast asia", "europe", "hawaii coast", "the himalayas", "ikea", "mecca", "mecca+", "the moon", "new york city", "the pentagon", "pool", "great barrier reef", "south america", "track"];

window.addEventListener("DOMContentLoaded", (event) => {
    let count = Math.round(Math.random()*arrayList.length);
    if (count == 25){
        count = 24;
    }
    console.log(count);
    document.getElementById("currentSetLabel").innerHTML=namesList[count];
    for (let i=0; i < arrayList[count].length; i++){
        if (i==0){
            continue;
        } else {
            console.log(arrayList[count][i]);
            let createImg = document.createElement("div");
            createImg.style.backgroundImage = "url("+arrayList[count][i]+")";
            createImg.style.backgroundRepeat = "no-repeat";
            createImg.style.position = "absolute";
            let leftMargin = Math.random()*80+1 + "vw";
            let topMargin = Math.random()*45+1 + "vh";
            createImg.style.marginLeft = leftMargin;
            createImg.style.marginTop = topMargin;
            min = Math.ceil(500);
            max = Math.floor(600);
            createImg.style.height = Math.floor(Math.random() * (max - min) + min) + "px";
            createImg.style.width = Math.floor(Math.random() * (max - min) + min) + "px";
            createImg.style.backgroundSize = "50%";
            createImg.style.opacity = "65%";
            document.body.append(createImg);
        }
    }
    setTimeout("location.reload(true);", 1900);
});
