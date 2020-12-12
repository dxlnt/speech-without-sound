var SpeechRecognition =window.webkitSpeechRecognition;

var Recognition=new SpeechRecognition();

function speechtotext(){
    document.getElementById("words").innerHTML="";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);
    var content=event.results[0][0].transcript;

    document.getElementById("words").innerHTML=content;
console.log(content);
}

function stop(){
    Recognition.stop();
}
