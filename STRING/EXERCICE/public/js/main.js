let phrase = "bonjour tout le monde            ";

let newphrase = phrase.replace(/\s/g, "");

console.log(`${newphrase.length}`);

console.log(newphrase.charAt(newphrase.length - 1));

console.log(phrase.replace(phrase.substring(0,8),''));

console.log(phrase.replace(phrase.substring(8),''));

console.log(phrase.replace('Bonjour','string'));


console.log(phrase.slice(0,4) + phrase.charAt(4).toUpperCase()+ phrase.slice(5,6) + phrase.charAt(6).toUpperCase() + phrase.slice(7));

console.log(phrase.indexOf('o'));

let name = "jade"

console.log(name.charAt(0).toUpperCase()+ name.slice(1,3) + name.charAt(3).toUpperCase());