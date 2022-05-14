const fs = require('fs');
const colors = require('colors');
const createArchivo = async (base = 5, listar = false, limite = 10) => {
    try {
        let data = '';
        let consola = ''; 
        for (let i = 1; i <= limite; i++) {
            data += `${ base } X ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'X'.green} ${ i } ${'='.green} ${ base * i }\n`;

        }
        if (listar) {
            console.log('============================='.green);
            console.log('TABLA DE MULTIPLICAR -', colors.cyan(base));
            console.log('============================='.green);
            console.log(consola);
            
        }
        fs.writeFileSync(`./files/tabla-${base}.txt`, data)
            return `tabla-${base}.txt`.red;
    } catch (error) {
        throw error
    }
}
module.exports = {createArchivo}

