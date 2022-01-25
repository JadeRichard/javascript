/*- #  Exo 3
    - ## let a = 1; -> 2
    - ## let b = 2; -> 3
    - ## let c = 3; -> 4
    - ## let d = 4; -> 1

    - ## Afficher le changement des variables

- # Exo 4
    - ## Afficher 4, 3, 2, 1 avec une variable temporaire
    - ## let tableau = [1, 2, 3, 4];

- # Exo 5
    - ## let a = 1 -> 4
    - ## let b = 2 -> 5
    - ## let c = 3 -> 1
    - ## let d = 4 -> 2
    - ## let e = 5 -> 6
    - ## let f = 6 -> 3

    - ## Afficher le changement des variables */


// Exo 1
    /* let a = 1; //2
    let b = 2; //3
    let c = 3; //1

    let temp = a;
    a = b;
    b = c;
    c = temp;
    console.log(a,b,c) */

// Exo 2
    /* let a = 1; //4
    let b = 2; //3 
    let c = 3; //2
    let d = 4; //1
    let temp = a; 

    
    a = d;
    d = temp;
    temp = b;
    b = c;
    c = temp;
    
    console.log(a,b,c,d) */

// Exo 3
    /* let a = 1; //2
    let b = 2; //3 
    let c = 3; //4
    let d = 4; //1
    let temp = a; 

    a = b;
    b = c;
    c = d;
    d = temp;
    console.log(a,b,c,d)  */

// Exo 4
    /* let tableau = [1, 2, 3, 4]; 

    let temp = tableau[0]

    tableau[0] = tableau[3]
    tableau[3] = temp
    temp = tableau[1]
    tableau[1] = tableau[2]
    tableau[2] = temp
    
    console.log(tableau) */

// Exo 5

    let a = 1 // 4
    let b = 2 // 5
    let c = 3 // 1
    let d = 4 // 2
    let e = 5 // 6
    let f = 6 // 3
    temp = a;

    a = d
    d = b
    b = e
    e = f
    f = c
    c = temp
    
    

    console.log(a,b,c,d,e,f) 

