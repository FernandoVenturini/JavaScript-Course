// Parameterized Functions

// EXEMPLE 01:
function exemple_01(parameter1) { // Starting the function and passing parameter
    
    console.log(parameter1); // Printing in console log
}

exemple_01('Parameter 01'); // Calling the function and passing the parameter

/**********************************************************************************************************/

// EXEMPLE 02:
function exemple_02(n1, n2) { // Starting the function and passing parameter

    console.log(n1 + n2); // Printing in console log
}
exemple_02(1, 2); // Calling the function and passing the parameter

/**********************************************************************************************************/

// EXEMPLE 03:
function exemple_03(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}
exemple_03(10);

/**********************************************************************************************************/

// EXEMPLE 04:
function exemple_04(n1 = 0, n2 = 0) {

    return n1 + n2;
}
console.log(exemple_04(3, 4));

/**********************************************************************************************************/

// EXEMPLE 05:
function exemple_05(n1 = 0, n2 = 0) {

    let res;
    res = n1 * n2;
    return res;

}
let result_sum = exemple_05(5, 6);
console.log(result_sum);

/**********************************************************************************************************/

// EXEMPLE 06:
const value = 0;
function exemple_06(n1 = 0, n2 = 0) {

    let res;
    res = n1 + n2;
    return res;
}
let result_sum_02 = exemple_06(7, 8);
console.log(result_sum_02);

/**********************************************************************************************************/

// EXEMPLE 07:
const value_02 = 0;

let value_03 = 0;
console.log(value_03);

function add(v) {
    return value_03 + v;
}
add(10); 
console.log(value_03);