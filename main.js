let score = 0
let max = 100
let alteZufall = 50

function hoeher(){

    let zufall = Math.round(Math.random()*max)
    document.getElementById("Zufallszahl").innerHTML= "" + zufall
    if (zufall>alteZufall){
        document.getElementById("ausgabe").innerHTML="Du hast bisher" + score +" mal richtig gelegen!
    } else {
        document.getElementById("ausgabe").innerHTML="Schade. Du musst wieder von 0 anfangen :("
    }
}


function tiefer(){

    let zufall = Math.round(Math.random()*max)
    document.getElementById("Zufallszahl").innerHTML= "" + zufall
    if (zufall<alteZufall){
        document.getElementById("ausgabe").innerHTML="Du hast bisher" + score +" mal richtig gelegen!
    } else {
        document.getElementById("ausgabe").innerHTML="Schade. Du musst wieder von 0 anfangen :("
    }
}