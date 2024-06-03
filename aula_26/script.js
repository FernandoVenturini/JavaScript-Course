// Nested Functions
const sum = (...values) => { // Arrow functions => spreed

    const add = val => {

        let res = 0;
        for(v of val) 
            res += v;
        return res;
        
    }
    return add(values);
}

console.log(sum(10, 5, 15));