//1

let monTab = ['pomme', 'fraise', 'melon', 'citron']

monTab.pop()
console.log(monTab);

monTab.shift()
console.log(monTab);

monTab.push("cerise")
console.log(monTab);

monTab.unshift("orange")
console.log(monTab);


console.log(monTab[0] + monTab[1].toUpperCase() + monTab.slice(2,4));

monTab.reverse();
console.log(monTab);

//2

let chiffres = [4, 5, 2, 1, 3]
console.log(chiffres)

chiffres.sort()
console.log(chiffres)

chiffres = chiffres.join()
console.log(chiffres)

chiffres = chiffres.split(",")
console.log(chiffres)


//3

let tab = []

tab.push(1,2,3,4,5,6,7,8,9,10)
console.log(tab + tab.length)


tab.splice(2,1)
console.log(tab)

let classe = []

classe.push("Adil", "Aleksic", "Amanda", "Baptiste", "Calvin", "Elliot","Gursel", "Kevin","Ilias", "Imane", "Isma","Jade","Louis","Marcyl","Michael","Mohamed","Nicola","Samy")

console.log(classe[Math.floor(Math.random()*18)]);

classe.splice(11,1)
console.log(classe)