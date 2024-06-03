// Exemple 01: Arrow Function
const ex01 = (v1, v2) => {

    return v1 + v2;

}
console.log(ex01(1, 2));

/*********************************************************************************************************/

// Exemple 02:
const ex01b = (v3, v4) => {
    let res = v3 + v4;
    return res;
}
console.log(ex01b(3, 4));

/*********************************************************************************************************/

// Exemple 03:
const ex02 = name => { // Quando tiver apenas 1 parametro, nao e necessario colcoar parenteses;

    return name;
}
console.log(ex02('JavaScript!'));

/*********************************************************************************************************/

// Exemple 04:
const add = n => n + 10;
console.log(add(10));