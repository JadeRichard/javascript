let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

//1

let elements = document.querySelectorAll("div#liste-competences>h2")

console.log(elements);

//2 

for (const property in competences) {
    elements.innerText = `${property}: ${competences[property]}`
    console.log(`${property}: ${competences[property]}`);
  }