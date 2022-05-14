const fs = require('fs');

console.log('Desde las Bases');
console.clear(); 
console.log('=============================')
console.log('TABLA DE MULTIPLICAR - 5');
console.log('=============================')

const base = 3; 
let data = '';
for (let i = 1; i <= 10; i++) {
    data += `${ base } * ${ i } = ${ base * i }\n`;
}
console.log(data);

fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if (err) throw error; 
     console.log(`tabla-${base} Creada`);
});

