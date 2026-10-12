let rec = document.getElementById("record");
let stop = document.getElementById("stop");


let texte = document.getElementById("text");
//localStorage.setItem("text", text.innerHTML)

let recon = new (window.webkitSpeechRecognition)();
recon.lang = "fr-FR";
recon.continuous = true;
recon.onresult = function(event){
    texte.value = event.results[0][0].transcript;
}
rec.onclick = function() {
    recon.start();
   // localStorage.setItem("text", text.innerHTML)
}

stop.onclick = function() {
    recon.stop();
    localStorage.setItem("text", text.value)
}

console.log(texte.value);
window.addEventListener("load", 
    function(){
        const save = localStorage.getItem("text");
        if (save){
            text.innerHTML = save;
        }
    }
)