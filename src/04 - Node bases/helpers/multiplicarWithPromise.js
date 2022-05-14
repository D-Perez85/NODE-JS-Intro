const fs = require('fs');

const createArchivo = (base = 5) => {
    return new Promise((res, rej) => {
        console.log('=============================');
        console.log('TABLA DE MULTIPLICAR -', base);
        console.log('=============================');
        let data = '';
            for (let i = 1; i <= 10; i++) {
                data += `${ base } * ${ i } = ${ base * i }\n`;
            }
        console.log(data);
            if (!Number(base)) {
                rej(`El valor introducido ${ base } no es un número`);
                return;
            }
        fs.writeFile(`./files/tabla-${base}.txt`, data, (err) => {
            if (err) throw error;
            res(`tabla-${base}.txt`);
        });
    });
}
module.exports = {createArchivo}