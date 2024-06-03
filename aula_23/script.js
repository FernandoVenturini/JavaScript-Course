// Exemple 01:
function sum(...values) {

    return values.length;

}
console.log(sum(10, 5));

/****************************************************************************************************/

// Exemple 02:
function sum02(...values2) {

    let size = values2.lenght;
    let res = 0;

    for (let i = 0; i < size; i++) {
        
        res += values2[i];
        
    }
    return res;
}
console.log(sum(10, 5, 2));

/****************************************************************************************************/

// Exemple 03:
function sum03(...values3) {

    let res3 = 0;

    for (const v of values3) {
        res3 += v;
    }
    return res3;
}
console.log(sum03(12, 6, 9));