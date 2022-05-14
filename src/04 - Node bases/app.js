// const {createArchivo} = require('./helpers/multiplicarWithPromise'); 
const {createArchivo} = require('./helpers/multiplicarWithAsync')

console.log('From the Bases');
console.clear(); 

const base = 4; 
createArchivo(base)
    .then(archivo => console.log(archivo, '- File Writed'))
    .catch(e => console.log(e));
