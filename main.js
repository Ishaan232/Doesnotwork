camera=document.getElementById("camera");
Webcam.attach('#camera');
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
png_quality:90
});
function Capture(){
    Webcam.snap(function(a){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+a+'"/>';
    });
}
console.log("ml5 version",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/W4ev8CeTP/model.json',anoyc2);
function anoyc2(){
console.log("modelloaded");
}
function something(){
stiv=document.getElementById("selfie");
x.classify(stiv,anoyc3);
}
function anoyc3(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    document.getElementById("identification").innerHTML=result[0].label;
    document.getElementById("Accuracy").innerHTML=Math.floor(result[0].confidence*100)+"%";
}
}