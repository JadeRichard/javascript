//1
let tabvar = 1

let tabExo = ["Livre", tabvar,2, 4,true]

console.log(tabExo);

//2
console.log(tabExo.length);

//3
tabExo.pop()
console.log(tabExo);

//4
tabExo.shift()
console.log(tabExo);

//5
tabExo.push(6,8)
console.log(tabExo);

//6
tabExo.push(16,"trente-deux",64)
console.log(tabExo);

//7
tabExo.reverse()
console.log(tabExo);

//8

let boite = ["objet1"]

alert(boite);

boite.forEach(function(item, index, array) {
    boite.push("objet 2")
    alert(boite);
  });

boite.unshift("objet 3");

alert(boite);

boite.push("objet 4", "objet 5", "objet 6");

alert(boite);

boite.splice(0, 3) ;

alert(boite);

boite.push("objet 7") ;

alert(boite);

alert("Il y a " + boite.length + " objets");

boite.splice(2, 4) ;

alert(boite);

boite.splice(0, 2) ;

alert(boite);