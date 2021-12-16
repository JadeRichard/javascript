//1 

let personne = {
    nom: "Richard",
    prenom: "Jade", 
    age: 22,
    taille: "1,64m",
}

//2 

let personne2 ={
    nom: "Nom2",
    prenom: "Prénom2",
    age: 28,
    taille: "Taille2",
}

//3

let personne3 ={
    nom: personne["nom"],
    prenom: "Prénom3",
    age: personne2["age"],
    taille: "Taille3",
}


console.log(personne, personne2, personne3) 

//4

let personne4 ={
    nom : "Bark",
    prenom : "Barkbark!!",
    age : 2,
    taille : "100cm",
    sePresenter() {
        console.log(`Bonjour, je suis ${this.prenom}`)
    }
}

personne4.sePresenter()

//5

let objet1 ={
    nom: "Objetnom",
    age: "4",
    changeAge(){
        newAge = prompt("Nouvel age?")
        objet1.age = newAge
    }
}

objet1.changeAge()
alert(objet1["nom" ] + ` a ` + objet1["age"] + ` ans`)