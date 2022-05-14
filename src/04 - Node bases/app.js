// const {createArchivo} = require('./helpers/multiplicarWithPromise'); 
const {createArchivo} = require('./helpers/multiplicarWithAsync'); 
const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true//required args
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.b)){
                            throw 'La Base debe ser numerica'
                        }
                        return true; 
                    })
                    .argv; 

console.clear(); 
console.log(argv);

// const base = 4; 
createArchivo(argv.b)
    .then(archivo => console.log(archivo, '- File Writed'))
    .catch(e => console.log(e));
