// Exemple 01:
const f = function(v1, v2) {
    return v1 + v2;
}
console.log(f(10, 5));

/*************************************************************************************************/

// Exemple 02:
const f2 = function(...values) {

    let res = 0;

    for(v of values) {

        res += v;

    }
    return res;
}

console.log(f2(10, 10));

/*************************************************************************************************/

// Exemple 03: Function Contructor
const f3 =  new Function('v1', 'v2', 'return v1 + v2') 
    console.log(f(10, 20));

