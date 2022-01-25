/** Créer une classe personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/

/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/

/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */
// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.
/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 */
// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]
/**** DEBUT DE L'OMELETTE ****/

// Pour dire que le personnage est à la maison :

// Avec l'objet personnage, utiliser la methode seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :

// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)

// Il doit y avoir un objet dans la main droite de personnage et un panier en moins. Vérifier avec des console.log() ensuite afficher un message du type : 

// console.log(`${personnage.nom} a pris un ${type du panier}`);

// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage

// Afficher un message à chaque ingrédient pris

// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()

// Afficher un message de ce qu'il reste d'argent sur le personnage.

// rentrer à la maison (comme ça on pourra cuisiner)

// mettre chaque ingrédient dans le bol (1 à 1 donc avec une boucle)

// Vérifier que les ingrédients ne se trouvent plus dans le panier (oups ! on a oublié de le rapporter x)

// Afficher un petit message de chaque ingrédient qu'on met dans le bol.

// Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)

// Afficher un petit message

// Retourner à la maison pour continuer l'omelette

// Afficher un petit message

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

// Afficher un message avec le nouveau mélange

// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

// Cuire l'omelette avec la méthode de la poele 

// Afficher un message final, notre omelette est cuite :)

import {Personne, Lieu, Outil, Epicerie, Produits, Couteau, Poele, Bol} from "./class.js"

let oeuf = new Produits("Oeuf", "entier", 1)
let oignon = new Produits("Oignon", "entier", 3)
let epices = new Produits("Epices", "moulu", 4)
let fromage = new Produits("Fromage", "entier", 12)


let maison = new Lieu("La maison", [])
let epicerie = new Epicerie("L'epicerie" ,[], [], [oeuf, oignon, epices, fromage] )

let personnage = new Personne("Robert", maison, 200, [], [])

let bol = new Bol("bol", [])
let couteau = new Couteau("couteau", "coupé")
let poele = new Poele("poele", [])

personnage.seDeplacer(maison)

personnage.seDeplacer(epicerie)

personnage.mainDroite.push(epicerie.paniers[0])

epicerie.paniers.shift()

console.log(`${personnage.nom} a pris le ${epicerie.panier1.nom}`)

epicerie.remplirPanier()

personnage.payerArticle()

console.log(`Il reste ${personnage.argent}€ à ${personnage.nom}`)

personnage.seDeplacer(maison)

for ( let i = 0; i < personnage.mainDroite[0].contenu.length; i++){
    bol.contenu.push(personnage.mainDroite[0].contenu[i])
    console.log(`${personnage.nom} ajoute ${personnage.mainDroite[0].contenu[i].nom} dans le bol`);
    personnage.mainDroite[0].contenu.shift()
    i--
    
}

console.log("Le contenu du panier : " + personnage.mainDroite[0].contenu);

console.log("Il faut ramener le panier à l'épicerie. Les paniers de l'épicerie : " + epicerie.paniers[0].nom + ", " + epicerie.paniers[1].nom);

personnage.seDeplacer(epicerie)

epicerie.paniers.unshift(personnage.mainDroite[0])

personnage.mainDroite.pop()

console.log("Les paniers de l'épicerie : " + epicerie.paniers[0].nom + ", " + epicerie.paniers[1].nom + ", " + epicerie.paniers[2].nom);

personnage.seDeplacer(maison)

personnage.couper(bol, couteau)

console.log("Les états des ingrédients : " + oeuf.nom + " est " + oeuf.etats + ", " + oignon.nom + " est " + oignon.etats + ", " + epices.nom + " est " + epices.etats + ", " + fromage.nom + " est " + fromage.etats + ".");

bol.melanger("Omelette pas cuite")

console.log("Le nouveau mélange : " + bol.contenu.nom);

poele.contenu.push(bol.contenu)
bol.contenu = ""

console.log("Le contenu de la poêle : " + poele.contenu[0].nom);

console.log("Le contenu du bol : " + bol.contenu);


setTimeout(poele.cuire, 4000)









