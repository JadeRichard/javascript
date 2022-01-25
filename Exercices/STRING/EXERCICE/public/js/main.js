let phrase = "bonjour tout le monde            ";

console.log(`${phrase.length}`);

phrase = phrase.trim();

console.log(`${phrase.length}`);

console.log(phrase.substring(phrase.length-1));

phrase = phrase.substring(8);
console.log(phrase);

phrase = "Bonjour" + phrase;
console.log(phrase);

console.log(phrase.replace('Bonjour','string'));

console.log(phrase.slice(0,4) + phrase.charAt(4).toUpperCase()+ phrase.slice(5,6) + phrase.charAt(6).toUpperCase() + phrase.slice(7));

console.log(phrase.indexOf('o'), 2);

let name = "jade"

console.log(name.charAt(0).toUpperCase()+ name.slice(1,3) + name.charAt(3).toUpperCase());