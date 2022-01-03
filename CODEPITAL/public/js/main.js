/*# Bienvenu à Codepital:
>Dans cet exercice nous aurons des malades qui iront ce faire débuger chez un doctor. Le doctor les diagnostiquera et leur préscrira un remède. Par la suite les malades irons à la pharmacie afin d'acheter leur remède puis le prendrons et seront guérri.

## Description des patients ( class )
>les malades ont un nom, une maladie, de l'argent, une poche, un état de santé, ( un traitement )ils savent aller à un endroit , prendre un médicamment et payer. Au début, les patients sont dans un salle d'attente. 

|nom|maladie|argent|poche|etatSante|traitement|goTo|takeCare|paye|
|---|---|---|---|---|---|---|---|---|
|Marcus|mal indenté|100|vide|malade
|Optimus|unsave|200|vide|malade
|Sangoku|404|80|vide|malade
|DarthVader|azmatique|110|vide|malade
|Semicolon|syntaxError|60|vide|malade

## Description du doctor
>Le doctor lui reçoit les patients dans son cabinet. Tout d'abord il les diagnostiques puis se fait payé avant de préscrire un traitement. Attention le doctor fait à chaque fois sortir le patient de son cabinet avant de prendre le suivant. Dans son cabinet il y a son chat de race sphynx pour garder un environemment stérile. Son chat miaule toutes les deux secondes dans la console(bonus). La consultation coûte 50€. Les patients son dans un état de traitement avant de sortir du cabinet.

etat de santé passe de malade à en traitement 

|nom|argent|cabinet|salled'attente|diagnostique|patienTIn|patientOut
|---|---|---|---|---|---|
|Debugger|0|[chat]

### Grille des diagnostiques
|maladie|traitement|
|---|---|
|mal indenté|`ctrl+maj+f`|
|unsave|`saveOnFocusChange`|
|404|`CheckLinkRelation`|
|azmatique|`Ventoline`|
|syntaxError|`f12+doc`|

## La pharmacie
>Les patients iront par après à la pharmacie et recevront leur traitement s'ils ont assez d'argent. Dans le cas ou ils ont assez d'argent ils seront alors en bonne santé sinon ils seront mort et il faudra alors les pousser dans un cimetière.

### Tarif des traitements
|Traitement|prix|
|---|---|
|`ctrl+maj+f`|60€
|`saveOnFocusChange`|100€
|`CheckLinkRelation`|35€
|`Ventoline`|40€
|`f12+doc`|20€

# Vérification
>Grâce à votre débugger suivé à la trace l'évolution de chacun de vos patients. Vérifier bien qu'il quitte à chaque fois la salle d'attente avant d'entrer dans le cabinet et qu'ils sortent bien du cabinet avant de laisser quelqu'un d'autre entré.*/


import {Patient, Doctor, Diagnostiques, Pharmacy, Lieu} from "./class.js"

let marcus = new Patient("Marcus","mal indenté", 100, [], "malade", [])

let optimus = new Patient("Optimus","unsave", 200, [], "malade", [])

let sangoku = new Patient("Sangoku","404", 80, [], "malade", [])

let darthvader = new Patient("DarthVader","azmatique", 110, [], "malade", [])

let semicolon = new Patient("Semicolon","syntaxError", 60, [], "malade", [])

let malindenté = new Diagnostiques("mal identé", "ctrl+maj+f", 60)

let unsave = new Diagnostiques("unsave", "saveOnFocusChange", 100)

let d_404 = new Diagnostiques("404", "ChckLinkRelation", 35)

let azmatique = new Diagnostiques("azmatique", "Ventoline", 40)

let syntaxerror = new Diagnostiques("syntaxError", "f12+doc", 20)

let docteur = new Doctor("Docteur Günther", 0, ["chat"], [], [malindenté, unsave, d_404, azmatique, syntaxerror])

let pharmacie = new Pharmacy([], 0, [malindenté.traitement, unsave.traitement, d_404.traitement, azmatique.traitement, syntaxerror.traitement])

let chezDocteur = new Lieu("au Cabinet du Docteur Günther", [])

let laPharmacie = new Lieu("à la Pharmacie", [])

let lecimetière = new Lieu("au Cimetière", [])

marcus.goTo(chezDocteur)
optimus.goTo(chezDocteur)
sangoku.goTo(chezDocteur)
darthvader.goTo(chezDocteur)
semicolon.goTo(chezDocteur)

docteur.salleAttente.push(marcus, optimus, sangoku, darthvader, semicolon)

docteur.patientIn(marcus, malindenté)
docteur.payerConsultation(marcus)
docteur.patientOut(marcus)

docteur.patientIn(optimus, unsave)
docteur.payerConsultation(optimus)
docteur.patientOut(optimus)

docteur.patientIn(sangoku, d_404)
docteur.payerConsultation(sangoku)
docteur.patientOut(sangoku)

docteur.patientIn(darthvader, azmatique)
docteur.payerConsultation(darthvader)
docteur.patientOut(darthvader)

docteur.patientIn(semicolon, syntaxerror)
docteur.payerConsultation(semicolon)
docteur.patientOut(semicolon)

console.log(`Le docteur Günther a désormais ${docteur.argent}€, bien joué à lui !`)

marcus.goTo(laPharmacie)
optimus.goTo(laPharmacie)
sangoku.goTo(laPharmacie)
darthvader.goTo(laPharmacie)
semicolon.goTo(laPharmacie)

marcus.payer(malindenté, lecimetière)
optimus.payer(unsave, lecimetière)
sangoku.payer(d_404, lecimetière)
darthvader.payer(azmatique, lecimetière)
semicolon.payer(syntaxerror, lecimetière)


