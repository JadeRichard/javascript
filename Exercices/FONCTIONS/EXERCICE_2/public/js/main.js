/* //1

const reverseNumber = (nbr) =>{
    nbr = prompt("Nombre")
    nbr.reverse()
    console.log(nbr);
}

reverseNumber() */

/* //2

const divPar2 = (nbr) =>{
    nbr = prompt("Number")
    switch ( nbr % 2 ){
        case 0:
            console.log(`${nbr} est divisible par 2. ${nbr} / 2 = ` + nbr/2)
        break
        case 1:
            console.log(`Ce nombre n'est pas divisible par 2 `)
        break

    }
}

divPar2() */

/* //3 

const logIn = (mdp) =>{
    mdp = prompt("Mot de passe")
    switch (mdp){
        case "mdp":
            alert(`Vous êtes connecté`)
        break
        default:
            alert(`Mauvaise réponse`)
            mdp = prompt("Mot de passe")
        break

    }
}

logIn() */