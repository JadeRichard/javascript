/* //1

class Lieu {
    constructor(nom, contenu, ingredients){
        this.nom = nom;
        this.contenu = contenu;
        this.ingredients = ingredients
    }
}
class Ingredient{
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}
class Personne{
    constructor(nom, lieu, argent, panier, x){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.se_deplacer = (x)=> {
        }
    }

    payer(x){
    }
    couper(x,y){
    }
}

let maison = new Lieu("maison", [])
let poivron = new Ingredient("poivron", "entier", 1)
let personnage = new Personne("Maxime", "nean", 100, []) */













/* //2 et //3



class Personnage{
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        sePresenter = () =>{ 
            console.log(`Bonjour, je m'appelle ${this.nom}`)
        }
    }
}

let personnage = new Personnage(28, "Nom1", "Paris")
let personnage2 = new Personnage(42, "Nom2", "Londres")

personnage.sePresenter()
personnage2.sePresenter() */

/* //4 


class Objet{
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }
}



let objet1 = new Objet("Livre", 18)
let objet2 = new Objet("Tasse", 6)

let boîte = [objet1, objet2]

class Personnage{
    constructor(nom, sac, argent, x){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.depenser_argent = (x) =>{
        }
    }
    prendre(x){
        perso1.sac.push(boîte[0])
        perso2.sac.push(boîte[1])
    }
    acheter(y){
        this.sac.push()
    }
}



let perso1 = new Personnage("Robert", [], 120)
let perso2 = new Personnage("Bobby", [], 150)

perso2.prendre()

console.log(perso1.sac, perso2.sac) */

/* /* //5

### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux en faisant appel à la méthode embarquer() du bus.
### Puis créez une instance de votre personnage.
### Créez une class [Transport] avec une propriéte personnes(array vide), une propriéte caisse(number) et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent, si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

### Créez une instance de Transport (Bus). 
### 8h00 Vous êtes à la maison.
### 8h30 Vous prennez le bus vers MolenGeek.
### 8h45 Vous êtes à MolenGeek.
### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

### Faites un console.log() de votre argent, ainsi que l'argent du Bus 

class Lieu{
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

let Molengeek = new Lieu("Molengeek",[])
let Snack = new Lieu("Snack",[])
let Maison = new Lieu("Maison",[])




class Personne{
    constructor(nom, prenom, argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.seDeplacer = (depart, arrivee, transport) =>{
            depart.personnes.splice(depart.personnes.indexOf(this), 1)
            transport.embarquer(this)
            arrivee.personnes.push(this);
        }
    }
}

class Transport{
    constructor(personnes, caisse){
        this.personnes = personnes;
        this.caisse = caisse;
        this.embarquer = (x) =>{
            if (x.argent >= 2.80){
                x.argent -= 2.80;
                this.caisse += 2.80;
                this.personnes.push(x)
                this.personnes.splice(this.personnes.indexOf(x), 1)
            }
        }
    }
}

let bus = new Transport([], 10)
let bernard = new Personne("Nom1", "Prénom1", 12)




console.log(bernard.argent, bus.caisse)

Maison.personnes.push(bernard)

bernard.seDeplacer(Maison, Molengeek, bus)
console.log(Molengeek)
console.log(bernard.argent, bus.caisse)

bernard.seDeplacer(Molengeek, Snack, bus);
console.log(bernard.argent, bus.caisse)
bernard.seDeplacer(Molengeek, Maison, bus)
console.log(bernard.argent, bus.caisse) */







//6
/* - Vous allez créer une class Personne qui aura besoin d'un nom, prenom, age, argent, panier et d'une methode prendre
- Vous allez créer une class Produit dans laquelle il y a un nom, un prix et une taille

- Vous allez créer 3 instances de Personne et 5 instance de Produit
- Avez la méthode prendre, vous allez mettre les produits dans votre sac */


/* class Appartement{
    constructor(nom, armoire, personnes){
        this.nom = nom;
        this.armoire = armoire;
        this.personnes = personnes;
    }
}

class Personne{
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


class Produit{
    constructor(nom, prix, taille, acheté){
        this.nom = nom;
        this.prix = prix;
        this.taille = taille;
        this.acheté = acheté;
    }
}


let robert = new Personne("Lebrun","Robert", 57, 400, [])
let louise = new Personne("Leblanc","Louise", 33, 200, [])
let anne = new Personne("Legrand","Anne", 57, 300, [])

let robe = new Produit("Robe", 39, "S", false)
let jupe = new Produit("Jupe", 18, "L", false)
let pantalon = new Produit("Pantalon", 39, "L", false)
let pull = new Produit("Pull", 39, "XXL", false)
let bonnet = new Produit("Bonnet", 12, "M", false)

louise.prendre(robe)
anne.prendre(jupe)
anne.prendre(pull)
robert.prendre(pantalon)
robert.prendre(bonnet)

// - Vous allez ajouter une propriété dans le produits appelé acheté qui sera false
// - Dans la classe personne, vous allez créer  une méthode acheter qui va faire passer 
// tous les éléments de votre sac en acheté true et vous allez retirer l'argent de ce que vous avez par rapport au prix du produit. 


louise.acheter(robe)
anne.acheter(jupe)
anne.acheter(pull)
robert.acheter(pantalon)
robert.acheter(bonnet)



// - Vous allez créer une classe appelée Appartement avec un nom, une armoire (tableau vide) et personnes (tableau vide)
// - Vous allez créer une instance d'Appartement appelée chambre et vous allez push la personne à l'intérieur de la chambre
// - Tous les éléments qui se trouvent dans le sac vont aller dans l'armoire grâce à une méthode déposer() qui va se trouver dans la personne.



let chambreRobert = new Appartement ("chambreRobert", [], [])
let chambreLouise = new Appartement ("chambreLouise", [], [])
let chambreAnne = new Appartement ("chambreAnne", [], [])

console.log(robert)
console.log(louise)
console.log(anne) 

chambreRobert.personnes.push(robert)
chambreLouise.personnes.push(louise)
chambreAnne.personnes.push(anne)

chambreRobert.armoire.push(robert.panier)
chambreLouise.armoire.push(louise.panier)
chambreAnne.armoire.push(anne.panier)

console.log(chambreRobert)
console.log(chambreLouise)
console.log(chambreAnne)  */




/* # Exercice bonus: Combat Pokemon

## mise en place:

### Dans ce exo, tu vas devoir mettre en place une Class Pokemon dans laquelle on retrouvera un nom sous forme de String, un niveau allant de 1 à 99 sous forme d'un Integer, des points de vie sous forme d'un Integer, une vitesse aussi sous forme d'un Integer ainsi qu'un tableau de type avec un maximum de 2 types par Pokemon

#### (Pour voir les différents types de Pokemon, tu peux consulter cette page : https://boutique-pokemon.com/blogs/blog-pokemon/table-types-pokemon )

## Combat:

### Tu devras ensuite extends cette Class afin de créer une Class par Pokemon. Cette Class devra contenir des méthodes pour permettre au Pokemon d'effectuer différentes actions ex: une Class Pikachu avec les méthodes fatal_foudre, queue_de_fer, charge et quick_attack

### Pour cette partie , tu vas devoir mettre en place une fonction qui va gérer le combat. Cette fonction prendra en charge deux paramètres: Le Pokemon que tu contrôleras et le Pokemon ennemi. Il faudra à l'aide de prompt demander à l'utilisateur quelle action il voudra exécuter. Ensuite, il faudra laisser l'ennemi exécuter une action et ce ainsi de suite jusqu'à ce que l'un des deux Pokemons tombe KO. N'oublie pas qu'une propriété de vitesse a été mise en place, cela determinera quel Pokemon attaquera en premier.

## BONUS : 

### Si tu es assez chaud, grâce au tableau de faiblesses que je t'ai fourni ci-dessus tu peux gérer les faiblesses. Ainsi un Pokemon eau subissant une attaque de type éléctrique se verra ramasser le double de dégats,etc ...

## BONUS II: 

### Si tu es encore plus chaud, tu peux rajouter une propriété défense dans la Class Pokemon afin d'avoir un vrai calcul de dégats ...

## N'oublie pas tes IMPORTS/EXPORTS

## COURAGE ET SI TU AS DES QUESTIONS J'Y REPONDRAIS (PAS)
*/


/* class Pokemon{
    constructor(nom, niveau, pv, vitesse, type){
        this.nom = nom; 
        this.niveau = niveau;
        this.pv = pv;
        this.vitesse = vitesse;
        this.type = type;
    }
} */

