// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

//1 

let button_01 = document.getElementsByTagName("input")[0]
let p_01 = document.getElementsByTagName("p")[0]
button_01.para_01 = "AAAAAAAAAAAAA";

let fun_01 = (e) =>{
    p_01.textContent = e.currentTarget.para_01
}

button_01.addEventListener("click", fun_01)

//2

let h1 = document.getElementsByTagName("h1")[0]

let changementCouleur = (event, color1, color2) => {
    event.target.style.backgroundColor = color1
    event.target.style.color = color2
}

document.querySelector("h1").addEventListener('click', (event) => changementCouleur(event, theBackground, theColor))

