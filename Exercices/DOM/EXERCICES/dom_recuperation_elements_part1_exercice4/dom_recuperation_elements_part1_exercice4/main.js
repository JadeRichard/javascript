console.log(document.getElementsByTagName("h1")[1].textContent)

let allLi = document.getElementsByTagName("li")

console.log(allLi[allLi.length - 1].textContent)

let exo3 = document.getElementsByTagName("p")[0].textContent;
console.log(exo3.toUpperCase());

let exo4 = document.getElementsByTagName("li");

[...exo4].forEach(element => console.log(element.textContent.toUpperCase()));