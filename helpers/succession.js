
const fs = require("fs");


function succession({a, b, x}){
    
    let suma = 0;
    let myArray = [a, b];

        for(let i = 1; i <= x - 2; i++){
            suma = a + b;
            myArray.push(suma);
            let data = b;
            b = suma;
            a = data;
        }

       fs.writeFileSync(`./output/Fibonacci-${x}.json`, JSON.stringify(myArray));
       console.log(`Su archivo "Fibonacci-${x}.json" fue creado con éxito:D`);

}


module.exports = {
    succession
};

