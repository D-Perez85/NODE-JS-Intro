const { describe, number } = require('yargs');

const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,//required args
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Lista la tabla en Consola'
                    })
                    .option('h',{
                        alias: 'limite',
                        type: 'number',
                        default: 10,
                        describe: 'Es el limite que le indico'
                    })
                    .check((argv, options)=>{
                        if(isNaN(argv.b)){
                            throw 'La Base debe ser numerica'
                        }
                        return true; 
                    })
                    .argv; 
module.exports = {
    argv
}