/* //1

let week = prompt("Jour de la semaine")

switch (week){
    case "Lundi" : 
        alert("Lundi, j'ai cours en journée et je fais des courses en soirée.")
        break
    
    case "Mardi" : 
        alert("Mardi, j'ai cours en journée et sport en soirée.")
        break
    case "Mercredi" : 
        alert("Mercredi, j'ai cours en journée et je fais la cuisine et le ménage en soirée.")
        break
    
    case "Jeudi" : 
        alert("Jeudi, j'ai cours en journée et je m'entraîne sur du JS en soirée.")
        break

    case "Vendredi" : 
        alert("Vendredi, j'ai cours en journée et je me détends en soirée.")
        break

    case "Samedi" : 
        alert("Samedi, j'ai sport en matinée et je joue aux jeux vidéo le reste de la journée.")
        break

    case "Dimanche" : 
        alert("Dimanche, je fais le ménage en matinée et je m'entraîne sur du JS le reste de la journée.")
        break
} */

/* //2

let meteo = prompt("Quel temps fait il ? ")

switch (meteo){
    case "Pluie" : 
        alert("Il pleut, donc je prends un parapluie.")
        break
    
    case "Beau temps" : 
        alert("Il fait beau, donc je profite du soleil.")
        break

    case "Neige" : 
        alert("Il neige, donc je prends un parapluie et j'essaie de ne pas glisser dans la rue.")
        break
    
    case "Vent" : 
        alert("Il y a beaucoup de vent donc j'évite de sortir de chez moi par précaution.")
        break

} */

//3

/* let number = prompt("Choisissez un nombre.")
let multiple = number%2

switch (multiple){
    case 0 : 
        alert("Le nombre est un multiple de 2")
        break

    case 1 : 
        alert("Le nombre n'est pas un multiple de 2")
        break

    default : 
        alert("Ceci n'est pas un nombre")
        break
} */

//4

let nbr1 = prompt("Nombre 1")
let opérateur = prompt("Opérateur ( +-/*)")
let nbr2 = prompt("Nombre 2")

switch (opérateur){
    case "+" : 
        alert( nbr1 + nbr2 )
        break

    case "-" : 
        alert( nbr1 - nbr2 )
        break

    case "/" : 
        alert( nbr1 / nbr2 )
        break

    case "*" : 
        alert( nbr1 * nbr2)
        break

}

