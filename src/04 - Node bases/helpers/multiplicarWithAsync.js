const fs = require('fs');
const createArchivo = async (base = 5, listar = false) => {
    try {
        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }
        if (listar) {
            console.log('=============================');
            console.log('TABLA DE MULTIPLICAR -', base);
            console.log('=============================');
            console.log(data);
        }
        fs.writeFileSync(`tabla-${base}.txt`, data)
            return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }
}
module.exports = {createArchivo}

