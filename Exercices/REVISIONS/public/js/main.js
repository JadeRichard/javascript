import {Personne, Lieu, Snack, Transport} from "./class.js"



let francois = new Personne("Dupont", "François", 32, 70, "dehors",[])

let sergio = new Personne("Dubois", "Sergio", 33, 92, "dehors", [])

let maison = new Lieu("la maison", [])

let molengeek = new Lieu("Molengeek", [])

let bus = new Transport("bus", [], 120)

let pied = new Transport("pied")

let snack = new Snack("SnackMomo", [])

console.log("Caisse du bus : " + bus.caisse)
console.log("Argent de Francois : " + francois.argent)
console.log("Argent de Sergio : " + sergio.argent)

francois.seDeplacer(maison, "")
sergio.seDeplacer(maison, "")

francois.seDeplacer(molengeek, pied)
sergio.seDeplacer(molengeek, bus)
bus.embarquer(sergio)

francois.seDeplacer(snack, pied)
sergio.seDeplacer(snack, pied)

snack.commander("François")
snack.commander("Sergio")

francois.mainDroite.push(snack.commandes[0])
sergio.mainDroite.push(snack.commandes[1])
francois.argent - 6
sergio.argent - 6

console.log(francois.mainDroite)
console.log(sergio.mainDroite)

francois.seDeplacer(molengeek, bus)
bus.embarquer(francois)
sergio.seDeplacer(molengeek, bus)
bus.embarquer(sergio)

francois.seDeplacer(maison, pied)
sergio.seDeplacer(maison, pied)

console.log("Caisse du bus : " + bus.caisse)
console.log("Argent de Francois : " + francois.argent)
console.log("Argent de Sergio : " + sergio.argent)