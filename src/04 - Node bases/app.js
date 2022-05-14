// const {createArchivo} = require('./helpers/multiplicarWithPromise'); 
const {createArchivo} = require('./helpers/multiplicarWithAsync'); 
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

console.clear(); 

createArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(' File Writed -', archivo))
    .catch(e => console.log(e));
