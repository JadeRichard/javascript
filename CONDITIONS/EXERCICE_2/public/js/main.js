//1

/* let nombre1 = (prompt ("Nombre x"))
let nombre2 = (prompt ("Nombre y"))

if (nombre1 == nombre2){
    alert( "Le nombre x et le nombre y sont-ils égaux ? : Oui")
} else if (nombre1 != nombre2){
    alert( "Le nombre x et le nombre y sont-ils égaux ? : Non")
} */

//2

/* let nombre1 = (prompt ("Nombre x"))
let nombre2 = (prompt ("Nombre y"))

if (nombre1 < nombre2){
    alert( "Le nombre x est il plus petit que le nombre y : Oui")
} else if (nombre1 > nombre2){
    alert( "Le nombre x est il plus petit que le nombre y : Non")
} */

//3

/* let nombre1 = (prompt ("Nombre x"))
let nombre2 = (prompt ("Nombre y"))
let nombre3 = (prompt ("Nombre z"))
let plusgrand = nombre1 + nombre2 > nombre3
let pluspetit = nombre1 + nombre2 < nombre3

if (plusgrand){
    alert( "La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? " + plusgrand)
} else if (pluspetit){
    alert( "La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? " + (pluspetit = false))
} */

//4

/* let phrase = (prompt ("Phrase d'un certain nombre de caractères"))
let nbrcara = (prompt ("Nombres de caractères de la phrase précédente"))

if ( nbrcara > phrase.length ){
    alert("Incorrect tu étais à " + ( nbrcara - phrase.length ) + " unités de la bonne réponse !")
} else if (nbrcara < phrase.length){
    alert("Incorrect tu étais à " + ( phrase.length - nbrcara ) + " unités de la bonne réponse !")
} else if ( nbrcara == phrase.length){
    alert("Bonne réponse!")
} */

//5

/* let nom = prompt("Nom")

if ( nom ){
    alert("Bonjour, " + nom )
} else if ( nom == undefined || nom === '' ){
    alert("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?")
} */

//6


/* if ( confirm("Voulez vous vous abonner ? ")){
    let conf = prompt("Souhaitez vous la formule luxe ou normale ?")
    if (conf == "luxe"){
        alert("Félicitation vous avez choisis la formule Luxe !")
    } else if (conf == "normale"){
        alert("Merci pour votre abonnement.")
    } else if ( conf == undefined || conf === '' ){
        if (confirm("Être vous sûr ?")){
            alert("Dommage, bonne journée !")
        } else {
            prompt("Souhaitez vous la formule luxe ou normale ?")
    if (conf == "luxe"){
        alert("Félicitation vous avez choisis la formule Luxe !")
    } else if (conf == "normale"){
        alert("Merci pour votre abonnement.")
    }
    }
}
} else {
    alert("Dommage, bonne journée !")
}
 */

//7

/* let quest1 = prompt("En quelle année est sortie le premier film de la franchise Halloween ? ")
let quest2 = prompt("Quel est l'auteur de 'La ferme des Animaux' ? ")

let ans1 = 1978
let ans2 = "George Orwell"

if ( quest1 != ans1 && quest2 != ans2){
    alert("Les deux réponses sont fausses :(((")
} else if ( quest1 == ans1 && quest2 != ans2){
    alert("La réponse 2 est fausse!")
} else if ( quest1 != ans1 && quest2 == ans2){
    alert("La réponse 1 est fausse!")
} else if ( quest1 == ans1 && quest2 == ans2){
    alert("Félicitations <333")
} */

//8

/* let age = prompt("Quel est votre âge ?")

if ( age < 0 && age == 0 && age == " " && age == undefined){
    alert("Vous n’êtes même pas nés, n’essayez pas de tricher")
} else if (age < 18){
    alert("Vous êtes mineur, l'accès est réservé aux grands")
} else if ( age == 18 ){
    alert("Vous pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.")
    
} else if ( age > 100) {
    alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester.")
} else if (age >= 18 ){
    alert("Vous êtes majeur, vous pouvez réserver.")
}  */

//9
 

let rich = confirm("Êtes-vous riche ?")
let holi = confirm("Voulez-vous partir en vacance ?")
let cat = confirm("Est-ce que vous avez un chat ?")


if (!rich && !holi && !cat ) {
    alert("Vous ne partez pas en vacances.")
} else if ( !holi ) {
    alert("Pas de problème, ne partez pas en vacance.")
} else if (!rich || cat ){
    alert("Même si vous le voulez, vous ne pouvez pas partir.")
} else if ( rich && !holi && !cat ){
    alert("Vous pourriez partir en vacance si vous le voulez.")
} else if (rich && holi && !cat ){
    alert("Tout est parfait, partez en vacance!")
}








