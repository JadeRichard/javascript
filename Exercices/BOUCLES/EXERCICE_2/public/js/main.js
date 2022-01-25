/* //1

let multiplicateur = 5

for ( let i = 0; i <= 9 ; i++){
    console.log("5 x " + i + " = " + multiplicateur*i)
} */

/* //2 

let multiplicateur = 5

for ( let i = 0; i <= 20 ; i+=2){
    console.log("5 x " + i + " = " + multiplicateur*i)
} */

/* //3

for ( let i = 20; i >= 0 ; i-=2){
    console.log(i)
} */


/* //4

let classe = ["Jade", "Kevin","Louis", "Aleksic","Ilias","Marcyl","Amanda","Imane", "Michael", "Baptiste","Nicola","Samy","Gursel","Calvin","Mohamed","Adil","Elliot","Isma"]
let longPrenoms = []


for (let i = 0; i < classe.length; i++) {
    if(classe[i].length > 5){
        longPrenoms.push(classe[i])
    }
    
}

console.log(longPrenoms) */




/* //5

let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61]
let grossesSommes = []

for (let i = 0; i < sommes.length; i++) {
    if(sommes[i] > 60){
        grossesSommes.push(sommes[i])
        
        sommes.splice(i--, 1)
        
    }
    
}

console.log(grossesSommes)
console.log(sommes) */


/* //6

let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100]

let typeString = []
let typeNumber = []
let typeObject = []
let typeAutre = []


for (let i = 0; i < donnees.length; i++){

    if (typeof donnees[i] === "number") {
        typeNumber.push(donnees[i])
        donnees.splice(i--, 1)
    } else if (typeof donnees[i] === "string"){
        typeString.push(donnees[i])
        donnees.splice(i--, 1)
    } else if (typeof donnees[i] === "object"){
        typeObject.push(donnees[i])
        donnees.splice(i--, 1)
    } else {
        typeAutre.push(donnees[i])
        donnees.splice(i--, 1)
    }
}

console.log(typeString);
console.log(typeNumber);
console.log(typeObject);
console.log(typeAutre);
console.log(donnees); */


//7




/* //8

let phrase = "bonjour à tous"

phrase = phrase.split("");

for(let i = 0; i < phrase.length; i += 2){
    phrase[i] = phrase[i].toUpperCase();
};

phrase = phrase.join("");

console.log(phrase); */

//9

//10

let number = 1

for (let i = 0; i< 9; i++){
    number[i]*i
}

console.log(number)