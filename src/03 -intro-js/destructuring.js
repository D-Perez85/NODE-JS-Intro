//BASIC OBJECT
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

//VALUES ASIGN WITH DESTRUCTURING
const nombre   = deadpool.nombre;
const apellido = deadpool.apellido;
const poder    = deadpool.poder;

//CREATION FASE
function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    nombre = 'Damian';
    console.log(nombre, apellido, poder, edad );
}
//EJECUTION FASE
imprimeHeroe( deadpool );


//CREATION FASE OF ANOTHER INSTANCE
let a = deadpool.getNombre(); 
//EJECUTION FASE
console.log(a);

const heroes = ['Deadpool', 'Superman', 'Batman'];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];
console.log(heroes)

//DESTRUCTURING OF AN ARRAY
const [ , , h3 ] = heroes;
console.log( h3 );
