// const {createArchivo} = require('./helpers/multiplicarWithPromise'); 
const {createArchivo} = require('./helpers/multiplicarWithAsync'); 
const argv = require('./config/yargs').argv;

console.clear(); 

createArchivo(argv.b, argv.l)
    .then(archivo => console.log(archivo, '- File Writed'))
    .catch(e => console.log(e));
