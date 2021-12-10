/* 

 //1
/* console.log(1 == "1");

//2
console.log(1 === "1");

//3
let name = prompt("Nom");

if (name.length < 5 ){
    alert("Ton nom est trop court");
} 

//4
let addition = prompt("2 + 8 = ");

if (addition == 10 ){
    alert("Félicitations !!");
} else {
    alert("Mauvaise réponse");
}

//5
let multipication = prompt (" 5 x 5 = ")
let resultat = 25

if (multipication == resultat ){
    alert("La réponse était bien " + resultat);
} else if ( multipication > resultat) {
    alert("Mauvaise réponse, tu étais à " + ( multipication - resultat ) + " unités de la bonne réponse");
} else if ( multipication < resultat) {
    alert("Mauvaise réponse, tu étais à " + ( resultat - multipication ) + " unités de la bonne réponse");
}


//6
let boite = []

boite.push(prompt ("Premier element"))
boite.push(prompt ("Deuxième element"))
boite.push(prompt ("Troisième element"))

alert(boite) */

//7
/* let GrandNombres = []
let PetitNombres = []
let Nombres = []
let limit = 12

let nombre1 = Nombres.push(prompt ("Premier nombre"))
let nombre2 = Nombres.push(prompt ("Deuxième nombre"))
let nombre3 = Nombres.push(prompt ("Troisième nombre"))
let nombre4 = Nombres.push(prompt ("Quatrième nombre"))


for (i = 0; i < 4 ; i++){
    if(Nombres[i] > 12){
        GrandNombres.push(Nombres[i])
    } else
    PetitNombres.push(Nombres[i])
}

console.log(PetitNombres)
alert("Grands nombres = " + GrandNombres + "Petits nombres = " + PetitNombres) */

//8. Invente un exercice avec ce que tu as appris en Javascript jusqu'a maintenant en incluent des conditions 

let question1 = prompt("Vrai ou faux? Nous sommes en 2021.")
let question2 = prompt("Vrai ou faux? Il fait toujours beau en Belgique.")
let question3 = prompt("Vrai ou faux? 2 + 2 = 22")
let reponse1 = "Vrai"
let reponse2 = "Faux"
let reponse3 = "Faux"

if (question1 != reponse1 || question2 != reponse2 || question3 != reponse3){
    if ( confirm("Mauvaise réponse, recommencer ?") === true){
        return true;
    } else {
        alert("Merci d'avoir essayé")
    }
} else {
    alert("Bien joué")
}




