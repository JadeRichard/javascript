/* 1. Exo 1 Boucles WHILE
    - Créez une variable classe avec un array
    - A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
    - A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
    - Après avoir rempli la classe, affichez tous les etudiants 


    let classe = []
    let noms = ["Jade", "Kevin","Louis", "Aleksic","Ilias","Marcyl","Amanda","Imane", "Michael", "Baptiste","Nicola","Samy","Gursel","Calvin","Mohamed","Adil","Elliot","Isma"]
    let nbr = prompt("Nombre d'étudiants max")
    let i = 0

    while (classe.length < nbr){
        classe.push(prompt("Ajouter un élève"))
    }

    console.log(classe)*/


/*     2. Exo 02
    - Créer un tableau de 9 prénoms 
    - Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
    - Astuce : let i = 0;
    - Astuce 2 : (i < 9)

let name = ["Bark","Bork","Woof","Snarl","Grrr","Meow","Purr", "Hiss","Nyan"]

let i = 0

while (i < 9){
    console.log("Bonjour," + name[i])
    i++
}*/

/* 3. Exo 03
    - Créer un tableau de 6 fruits
    - Avec l'aide d'une boucle while vider le tableau.
    - Utilisez fruits.length 

let fruits = ["Pomme","Fraise","Cerise","Mangue","Orange","Banane"]

while (fruits.length > 0){
    fruits.pop()
}

console.log(fruits)*/

/* 4. Exo 04
    - Créer un tableau de 4 légumes du nom de 'panierLegumes'
    - Stocker la longueur du tableau dans une variable du nom de 'longeur'
    - Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes' 


let panierLegumes = ["Haricot","Carotte","Courgette","Aubergine"]
let caisseLegumes = []
let longueur = panierLegumes.length

while ( panierLegumes.length != 0){
    casseLegumes.push(panierLegumes.pop())
}

console.log(panierLegumes);
console.log(caisseLegumes);*/

/* 5. Exo 05
    - Préparez une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite 

let enigme = prompt("qu'est ce qui est jaune et qui attend")

while ( enigme != "jonathan"){
    alert("Mauvaise réponse")
    enigme = prompt("qu'est ce qui est jaune et qui attend")
}

alert("félicitations")

*/

//6

//7

let actualYear = 2021;
let minYear = 1970;
let maxYear = 2018;
let randomYear = Math.floor(Math.random()*(maxYear-minYear)+ minYear)

let question = +prompt(`How old is the person if he's born in ${randomYear}, guess her/his age?`)
let i = 3
while (question != (actualYear - randomYear) && i > 1) {
    i--
    question = +prompt(`Wrong answer you have ${i} tries left, try again`)
    
    
} if(question != (actualYear - randomYear)){
    alert('Wrong answer')
} else {
    alert("Good Job");
} 



// 8. Exo 08
//     - Demandez a l'utlisateur de remplir un panier de fruit jusqu'a en obtenir 8
//     - Quand son panier est rempli montrez lui, puis demandez lui si il désire retirer un fruit
//     - Si il met le nom d'un fruit alors le fruit est retiré, on lui montre son nouveau panier puis on lui repose la question, si il met autre chose que le nom d'un fruit alors on lui dit "Merci bon appetit"
//     - Chaque fruit entré par l'utilisateur doit finir par etre ortographié avec une premiere lettre majuscule et le reste en minuscule 
//     - Lui montrer son panier avec la première lettre en majuscule



var panier = [];
while (panier.length < 5){
    var fruit = prompt("Quels fruit voules-vous ajouter?")
        panier.push(fruit);
    }

console.log(panier);

var aRetirer = prompt("Panier rempli avec ${panier}. Souhaitez-vous retirer un fruit?");

while(panier.indexOf(aRetirer) != -1){
    panier.splice(panier.indexOf(aRetirer), 1);
    aRetirer = prompt("Panier rempli avec ${panier}. Souhaitez-vous retirer un fruit?");
}
alert("Bon appetit");

for (let i=0; i < panier.length; i++){
    // panier[i] = panier[i].toLowerCase();
    panier[i] = panier[i].charAt(0).toUpperCase() + panier[i].substring(1).toLowerCase();
}
alert(panier);













