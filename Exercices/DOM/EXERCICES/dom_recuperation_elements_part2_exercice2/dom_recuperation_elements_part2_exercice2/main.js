console.log(document.getElementsByTagName("div")[0].firstElementChild)

console.log(document.getElementsByTagName("div")[0].children[5])

console.log(document.getElementsByTagName("div")[0].children[5].previousElementSibling)

console.log(document.getElementsByTagName("div")[0].children[2].nextElementSibling)

console.log(document.getElementsByTagName("li")[0,1,2,3].parentElement)

console.log(document.getElementsByTagName("ul")[0].parentElement.firstElementChild)

console.log(document.getElementsByTagName("li")[3].nextElementSibling)

console.log(document.getElementsByTagName("p")[3].nextElementSibling.nextElementSibling)

console.log( document.getElementsByTagName("div")[0].children[10].children[1].children[0].parentElement.nextElementSibling)




console.log(document.querySelector(".grandParagraphe"))

let li_1 = document.querySelectorAll("li");

li_1.forEach(element => {
    console.log(element);
});