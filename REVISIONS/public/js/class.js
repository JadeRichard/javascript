export class Personne{
    constructor(nom, prenom, age, argent, lieu, mainDroite){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.argent = argent;
        this.lieu = lieu;
        this.mainDroite = mainDroite;
    }

    acheter = (objet) =>{
    }

    seDeplacer = (lieu, transport) =>{
        lieu.personnes.push(this)
        if (transport == "" ){
            console.log(`${this.prenom} est actuellement à ` + lieu.nom)
        } else {
            console.log(`${this.prenom} se déplace à ${lieu.nom} en/a ${transport.nom}` );
            
        }
        
        
        
    }
}

export class Lieu{
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

export class Snack extends Lieu{
    constructor(nom, personnes, commandes){
        super(nom, personnes, commandes)
        this.commandes = []
    }

    commander = (nom) =>{
        let commande = prompt(`Bonjour ${nom}, tu veux un sandwich, durum ou panini ?`)
        let commande2 = prompt(`Viande, poulet ou kefta ?`)
        let commande3 = prompt(`Crudité ou sans crudité ?`)
        let objetF = commande + commande2 + commande3
        let objetS = commande + commande2 + commande3
        this.commandes.push(objetF)
        this.commandes.push(objetS)
        alert(`La commande de ${nom} : ` + commande + ", " + commande2 + ", " + commande3)
        console.log(`La commande de ${nom} : ` + commande + ", " + commande2 + ", " + commande3)
    }
}

export class Transport{
    constructor(nom, personnes, caisse){
        this.nom = nom;
        this.personnes = personnes;
        this.caisse = caisse;
    }

    embarquer = (x) =>{
        this.personnes.push(x)
        x.argent -= 2;
        this.caisse += 2;
        console.log(`${x.prenom} est dans le bus`)
    }
}

