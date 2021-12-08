/*EX 1*/

/*1*/
let colors = ["Red", "Pink", "Blue"]
2
console.log(colors); 
/*3*/
console.log(colors.length); 
/*4*/
colors.forEach(item => console.log(item));  

/*EX 2

/*1*/
let colors2 = ["Red", "Pink", "Blue"] 
/*2*/
 console.log(colors2); 
/*3*/
colors2.push('Jade'); 
console.log(colors2);
/*EX 3*/

/*1*/
let colors3 = ["Red", "Pink", "Blue"]
/*2*/
console.log(colors3);
/*3*/
colors3.push('Jade');
console.log(colors3);
/*4*/
colors3.splice(1, 0, 'Green');
console.log(colors3);

/*EX 3*/

/*1*/
let colors4 = ["Red", "Pink", "Blue"]
/*2*/
console.log(colors4);
/*3*/
colors4.push('Jade');
console.log(colors4);
/*4*/
colors4.splice(1, 0, 'Green');
console.log(colors4);
/*4*/
colors4.splice(0, 1);
console.log(colors4);