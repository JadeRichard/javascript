let myObject = {
    nom: 'nicolas',
    age: 18,
}

// 1
let myElements = document.querySelector("#object").children;
console.log(myElements);

// 2
let monObjet = Object.keys(myObject);
console.log(monObjet);

// 3
/* for (const property in myObject) {
    console.log(`${property}: ${myObject[property]}`);
  } */

// 4
for (const key in myObject) {
    console.log(myObject[key]);
}

// 5
let i = 0;
for (const key in myObject) {
    i++;
    console.log(i);
}

// 6
i = 0;
for (const key in myObject) {
    myElements[i].innerText=myObject[key];
    i++;
}