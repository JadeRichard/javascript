/* let personnage1 = {
    prenom: "François", 
    panier: ["pain","essui-tout","chocolat","poisson"],
    derober(){
        this.panier.push(personnage2.panier[1],personnage2.panier[2])
        
        for(let i = 0; i < 2; i++){
            personnage2.panier.pop()
        }
    }
}

let personnage2 = {
    prenom: "Sergio", 
    panier: ["biscuits","viande","liquide vaisselle"],
}

personnage1.derober()

console.log(personnage1.panier)

console.log(personnage2.panier) */

let vieille_dame = {
    nom: {
        nomdefamille: "Vieille",
        prenom: "Vieille",
    },
    moral: "mal",
    objet: "canne",
    age: 99,
    parler(){
        if ( this.moral == "mal"){
            alert("Vous me dérangez!! *frappe avec sa canne*")
        } else if (this.moral == "bien"){
            alert("Bonjour " + vieil_homme.nom)
        }
    },
}


let vieil_homme ={
    nom : "Vieil Homme",
    adoucir(){
        vieille_dame.moral = "bien"
    }
}


vieille_dame.parler()
vieil_homme.adoucir()
vieille_dame.parler()