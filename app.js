const {succession} = require("./helpers/succession");
const {getAttributes} = require("./helpers/validationWhitYargs");


let myObject = getAttributes();
succession(myObject);

