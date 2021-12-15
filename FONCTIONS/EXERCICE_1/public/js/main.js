/* //1

const addition = (nb1, nb2) => {
    let result = nb1 + nb2 
    console.log(result)
    
}

addition(1,4); */

/* //2

const soustraction = (nb1, nb2) => {
    let result = nb1 - nb2 
    console.log(result)
    
}

soustraction(42,23); */

/* //3

const multiplication = (nb1, nb2) => {
    let result = nb1 * nb2 
    console.log(result)
    
}

multiplication(52,2); */

/* //4

const division = (nb1, nb2) => {
    let result = nb1 / nb2 
    console.log(result)

}

division(42,2); */

/* //4

const division = (nb1, nb2) => {
    let result = nb1 / nb2 
    console.log(result)
    return result
    
}

division(48,4); */

/* //6

const carre = (nb1) => {
    let result = Math.pow(nb1, 2)
    console.log(result)
    return result
    
}

carre(6); */

/* //7

const expo = (nb1, nb2) => {
    let result = Math.pow(nb2, nb1)
    console.log(result)
    return result
    
}

expo(3,6); */

/* //8
let phrase = prompt("Phrase!!")
const capitalize = () =>{
    phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1)
    console.log(phrase)
}
capitalize() */

/* //9


const calcul = (nbr1,operator, nbr2) => {
    nbr1 = +prompt("Nombre 1")
    operator = prompt("Opérateur (+ - / *)")
    nbr2 = +prompt("Nombre 2")

    switch (operator){
        case "+" :
            let result1 = nbr1 + nbr2
            alert(result1)
            break
        case "-" :
            let result2 = nbr1 - nbr2
            alert(result2)
            break
        case "/" :
            let result3 = nbr1 / nbr2
            alert(result3)
            break
        case "*" :
            let result4 = nbr1 * nbr2
            alert(result4)
            break
    }   
}

calcul() */
