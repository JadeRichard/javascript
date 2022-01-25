export class Appartement{
    constructor(nom, armoire, personnes){
        this.nom = nom;
        this.armoire = armoire;
        this.personnes = personnes;
    }
}

export class Personne{
    constructor(nom, prenom, age, argent, panier){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.argent = argent,
        this.panier = panier;
        this.prendre = (objet) =>{
            this.panier.push(objet)
        }
        this.acheter = (objet) =>{
            objet.acheté = true
            this.argent = argent - objet.prix
            
        }
    }
}


export class Produit{
    constructor(nom, prix, taille, acheté){
        this.nom = nom;
        this.prix = prix;
        this.taille = taille;
        this.acheté = acheté;
    }
}