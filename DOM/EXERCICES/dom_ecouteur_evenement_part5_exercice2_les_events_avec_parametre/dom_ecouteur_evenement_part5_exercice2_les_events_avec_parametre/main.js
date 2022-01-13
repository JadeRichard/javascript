// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

let div = document.getElementById("content").children

/* function fun_01 (e){
    console.log(e.target);
}; 

div.addEventListener("click", fun_01)

*/

div.forEach(element => {
element.addEventListener("click", e => {
    console.log(e.target)
})
});






