
function getAttributes(){
    let myObject = {
        a: 0,
        b:0,
        x:0
    }
    const yargs = require('yargs')
            .option("a", {
                alias:"a",
                type:"number",
                demandOption:true // Esto lo ponemos si queremos que la variable sea obligatoria
            })
            .option("b", {
                alias:"b",
                type:"number",
                demandOption:true // Esto lo ponemos si queremos que la variable sea obligatoria
            })
            .option("x", {
                alias:"x",
                type:"number",
                demandOption:true // Esto lo ponemos si queremos que la variable sea obligatoria
            })
            .check((argv, options) => {
               let myData = ["a", "b", "x"];
               let accountent = 0;
               for(let x of myData){
                   if(parseInt(argv[x])* 0 == 0){
                    accountent += 1;
                   }else{
                       accountent = 0;
                   }
               }
               if(accountent != myData.length){
                throw "Solo se admiten números en las variables";
               }
               return true;
            }).argv;

    for(let x in myObject){
        myObject[x] = parseInt(yargs[x]);
    }
    return myObject;
}

module.exports = {
    getAttributes
};
