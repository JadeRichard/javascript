export class Patient{
    constructor(nom, maladie, argent, poche, etatSante, traitement){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.traitement = traitement;
    }

    goTo = (lieu) =>{
        lieu.personnes.push(this)
        console.log(this.nom + " se trouve actuellement : " + lieu.nom);
    }

    takeCare = () =>{

    }
    
    payer = (traitement, lecimetière) =>{
        if (traitement.prix > this.argent){
            console.log(`${this.nom} n'a pas assez d'argent pour payer : ${traitement.traitement}. Il reste malade et meurt devant la pharmacie.`)
            lecimetière.personnes.push(this.nom)
            console.log(`Le cimetière contient désormais : ${lecimetière.personnes}`)
        } else {
            this.poche.push(traitement)
            this.etatSante = "soigné"
            console.log(`${this.nom} a suffisamment d'argent pour payer : ${traitement.traitement} ! Il est désormais ${this.etatSante} et rentre chez lui.`)
        }
    }
}

export class Doctor{
    constructor(nom, argent, cabinet, salleAttente, diagnostique){
        this.nom = nom;
        this.argent = argent;
        this.cabinet = cabinet, 
        this.salleAttente = salleAttente; 
        this.diagnostique = diagnostique;
    }

    patientIn = (personne, diagnostique) =>{
        this.salleAttente.pop();
        this.cabinet.push(personne);
        console.log(`Le docteur Günther accueille ${personne.nom} dans son cabinet.`)
        console.log("Les patients actuellement dans la salle d'attente du docteur sont : " + this.salleAttente)
        personne.etatSante = "en traitement"
        console.log(`Le diagnostique de ${personne.nom} est celui-ci : ${diagnostique.maladie}. Son état est désormais : ${personne.etatSante}`);
        
        
    }

    patientOut = (personne) =>{
        this.salleAttente.push(personne);
        this.cabinet.pop(personne);
    }

    payerConsultation = (personne) =>{
        personne.argent -= 50;
        this.argent += 50;
        console.log(`${personne.nom} a payé le docteur Günther, il lui reste ${personne.argent}€. `)
    }
    
}

export class Diagnostiques{
    constructor(maladie, traitement, prix){
        this.maladie = maladie;
        this.traitement = traitement;
        this.prix = prix; 
    }
}

export class Pharmacy{
    constructor(client, argent, stock){
        this.client = client; 
        this.argent = argent; 
        this.stock = stock;
    }
}

export class Lieu{
    constructor(nom, personnes){
        this.nom = nom; 
        this.personnes = personnes;
    }
}