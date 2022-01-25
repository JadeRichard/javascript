//CONDITIONS

/* //1

let check = "5" === 5
if (check){
    alert(" '5' est strictement égal à 5")
} else {
    alert(" '5' n'est pas strictement égal à 5 ")
} */

/* //2 

let question = prompt("Choisissez un nombre entre 1 et 20")
let randoNumber =  Math.floor(Math.random()*20)

if ( question == randoNumber ){
    alert("gg frérot")
} else {
    alert("Raté :((")
} */

/* //3 

let fruits = ["Fraise", "Cerise","Pomme","Banane", "Poire"]
let devinette = prompt("Devinez un des cinq fruits qui se trouve dans le tableau ! :) ")

if (devinette == fruits[0] || devinette == fruits[0] || devinette == fruits[1] || devinette == fruits[2] || devinette == fruits[3] || devinette == fruits[4]){
    alert("gg frérot")
} else {
    alert("Raté :((")
} */

/* //4 

let day = prompt("Choisissez un jour")

if (day == "lundi" || day == "mardi" || day == "mercredi" || day == "jeudi" ){
    alert(`On est ${day}. Je suis fatigué </3 `)
} else if ( day == "vendredi" || day == "samedi" || day == "dimanche" ){
    alert(`On est ${day} ! C'est le wekeeend ! <3 `)
} */

/* //5

let age = prompt("Quel âge avez-vous ? ")

if (age < 18){
    alert("Trop jeune déso !")
} else if (age >= 18 && age <= 30) {
    alert("Vous êtes dans la section des 18-30 ans !")
} else if (age > 30 && age <= 50) {
    alert("Vous êtes dans la section des 30-50 ans !")
} else if (age > 50) {
    alert("Vous êtes dans la section des plus de 50 ans !")
} */

/* //6

let question1 = prompt("2+2 = ?")
let question2 = prompt("36 / 6 = ?")
let question3 = prompt("120 - 15 = ?")

let answer1 = 4
let answer2 = 6
let answer3 = 105

if (question1 == answer1 || question2 == answer2 || question3 == answer3){
    alert("gg!!!!! Tu as eu au moins une bonne réponse !!")
} else {
    alert("Raté!!!!")
} */

/* //7

let question1 = prompt("2+2 = ?")
let question2 = prompt("36 / 6 = ?")
let question3 = prompt("120 - 15 = ?")

let answer1 = 4
let answer2 = 6
let answer3 = 105

if (question1 == answer1 && question2 == answer2 && question3 == answer3){
    alert("gg!!!!!")
} else if (question1 == answer1 && question2 != answer2 && question3 != answer3) {
    alert("Tu n'as réussi qu'une question! ")
} else if (question1 != answer1 && question2 == answer2 && question3 != answer3) {
    alert("Tu n'as réussi qu'une question! ")
} else if (question1 != answer1 && question2 != answer2 && question3 == answer3) {
    alert("Tu n'as réussi qu'une question! ")
} else if (question1 == answer1 && question2 == answer2 && question3 != answer3) {
    alert("Tu as raté une question! ")
} else if (question1 != answer1 && question2 != answer2 && question3 == answer3) {
    alert("Tu as raté une question! ")
} else if (question1 != answer1 && question2 == answer2 && question3 == answer3) {
    alert("Tu as raté une question! ")
} else if (question1 != answer1 && question2 != answer2 && question3 != answer3) {
    alert("Tu as tout raté ! :o ")
}  */







/* // TABLEAUX 

//1 

let tableau = ["coucou","slt","bjr","yo","bonsoir"]

console.log(tableau)

tableau.shift()

console.log(tableau)

tableau.pop()

console.log(tableau)

//2

tableau.unshift("bonjourrr")

console.log(tableau)

tableau.push("hey")

console.log(tableau)

//3

tableau = tableau.map(a => a.toUpperCase())

console.log(tableau)

//4

let pos = tableau.indexOf("BJR")

let delTab = tableau.splice(pos,1)

console.log(tableau)

//5 et //6

tableau = tableau.toString()

console.log(tableau)

tableau = tableau.split(",")

console.log(tableau)

tableau = tableau.join()

console.log(tableau)

tableau = [...tableau]

console.log(tableau) */







// FUNCTIONS

/* //1
let phrase = prompt("Phrase ?")

const findLength = () =>{
    alert(phrase.length)
}

findLength() */

/* //2
const whatType = (para) =>{
    para = prompt(`déso je comprends pas la consigne parce que si je mets un prompt ça sera d'office un string même si je tape un nombre et je sais plus comment on convertit un string en number :'(((((`)
    alert(typeof para)
}

whatType() */

/* //3
const isItBigger = (nbr) =>{
    nbr = prompt("Nombre ?")
    if (nbr >= 50){
        alert(`${nbr} est plus grand ou égal à 50 !`)
    } else {
        alert(`${nbr} est plus petit que 50 !`)
    }
}

isItBigger() */

/* //4
const jaimePasLesMaths = (nbr) =>{
    nbr = prompt("Nombre ?")
    return alert(Math.cbrt(nbr))
}

jaimePasLesMaths() */

/* //5 et //6 et //7
const cetaitVraimentPasFacile = (phrase) =>{
    phrase = prompt("Phrase ?")
    phrase = phrase.slice(0,3).substring(0) + phrase.slice(3,9).substring(0).toUpperCase() + phrase.slice(9).substring(0).toLowerCase()
    console.log(phrase)
}

cetaitVraimentPasFacile() */







// BOUCLES 

/* //1
let question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?")
let answer = "tête"

while (question != answer){
    question = prompt("Trois nains vont a la mine, l'un prend une pioche, le deuxième prend une pelle, que prend le troisième?")
}

alert("Bravo :)") */

/* //2
let classe = ["Un","Deux","Trois","Quatre","Cinq"]
let otherClasse = []

while (classe.length != 0){
    otherClasse.push(classe.shift())
}

console.log(classe)
console.log(otherClasse) */

//3
/* let fruits = [" Fraise"," Pomme"," Poire"," Orange"," Mangue",]


const jeSaisPasCommentFaireSansFonction = () =>{
 
    let question =  confirm(`Voici les fruits disponiples = ${fruits}. Retirer un fruit ?`)
    
    if (fruits.length > 0){
        switch (question) {
            case true :
                let retirer = prompt(`Quel fruit retirer parmi ${fruits}? `)
                let pos = fruits.indexOf(retirer)
                removeFruit = fruits.splice(pos,1)
                jeSaisPasCommentFaireSansFonction()
                break

            case false :
                alert("Oki")
                break
        }

    } else {
        alert("Il n'y a plus de fruits disponibles")
    }
}

jeSaisPasCommentFaireSansFonction() */

/* //4

let classe = ["Un","Deux","Trois","Quatre","Cinq"]
let otherClasse = [];

classe.forEach(element => {

    classe = classe.slice(0, -1)
    otherClasse.push(element)

    
});
    

console.log(classe)

console.log(otherClasse); */