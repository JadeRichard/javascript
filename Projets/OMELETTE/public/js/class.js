export class Personne{
    constructor(nom, lieu, argent, mainDroite, mainGauche){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = (lieu) =>{
            lieu.personnes.push(this)
            console.log(this.nom + " se trouve actuellement à : " + lieu.nom);
        }
        
        
    }

    payerArticle = () =>{
        for( let i = 0; i < this.mainDroite[0].contenu.length; i++){
            this.argent -= this.mainDroite[0].contenu[i].prix
            console.log(`${this.nom} a acheté ${this.mainDroite[0].contenu[i].nom}`);
        }
    }

    couper = (contenant, outil) =>{
        for ( let i = 0; i < contenant.contenu.length; i++){
            if( contenant.contenu[i].etats === "entier"){
                contenant.contenu[i].etats = outil.etat
                console.log(contenant.contenu[i].nom + " est coupé");
            }
        }
    }

    
}

export class Lieu{
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}



export class Outil{
    constructor(nom){
    this.nom = nom;
    }
}

export class Produits{
    constructor(nom, etats, prix){
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}

export class Epicerie extends Lieu{
    constructor(nom, personnes, paniers, ingredients){
        super(nom, personnes, paniers, ingredients)
        this.ingredients = ingredients;
        this.paniers = [
            this.panier1 = {
                type : paniers,
                nom: "Panier 1",
                contenu: []
            },
            this.panier2 = {
                type : paniers,
                nom: "Panier 2",
                contenu: []
            },
            this.panier3 = {
                type : paniers,
                nom: "Panier 3",
                contenu: []
            }
        ]
        
        
    }   
    remplirPanier = () =>{
        for(let i = 0; i < this.ingredients.length; i++){
            this.panier1.contenu.push(this.ingredients[i]);
            console.log("Robert a mis dans son panier : " + this.ingredients[i].nom);
        }
    }
}


export class Couteau extends Outil{
    constructor(nom, etat){
        super(nom, etat)
        this.nom = nom; 
        this.etat = etat;
    }
}

export class Poele extends Outil{
    constructor(nom, contenu){
        super(nom, contenu)
        this.nom = nom; 
        this.contenu = contenu;
        
    }
    cuire = () =>{
        this.contenu[0].etat = "cuite"
        console.log("L'omelette est dans cet état : " + this.contenu[0].etat + " !")
    }
}

export class Bol extends Outil{
    constructor(nom, contenu){
        super(nom, contenu)
        this.nom = nom; 
        this.contenu = contenu;
        
    }

    melanger = (nomMelange) =>{

        let newMelange = {
            nom : nomMelange,
            etat : "pas cuit"
        }

        this.contenu = newMelange;

    }
}