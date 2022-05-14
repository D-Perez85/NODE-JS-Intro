// const {createArchivo} = require('./helpers/multiplicarWithPromise'); 
const {createArchivo} = require('./helpers/multiplicarWithAsync')

console.log('From the Bases');
console.clear(); 

//Args are comming by Console (IS NOT USED)
// const [ , , arg3 = 'base=5'] = process.argv; 
// const [ ,base = 5] = arg3.split('='); 

const base = 4; 
createArchivo(base)
    .then(archivo => console.log(archivo, '- File Writed'))
    .catch(e => console.log(e));
