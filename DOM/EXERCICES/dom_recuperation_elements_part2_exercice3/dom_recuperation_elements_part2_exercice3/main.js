
console.log(document.querySelector("#content"));

console.log(document.querySelectorAll("#content")[0]);

console.log(document.querySelector(".important"));

let exo4 = document.querySelectorAll(".important");
console.log(exo4);

let exo5 = exo4;
exo5.forEach(element => {
    let recup = element.textContent;
    let dernier = recup.substring(0,recup.length-1) + recup.substring(recup.length-1,recup.length).toUpperCase();
    console.log(dernier);
});

console.log(document.getElementById("content").getElementsByClassName("grandParagraphe")[0]);