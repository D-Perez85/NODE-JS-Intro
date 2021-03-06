const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => { 
    return new Promise(( res, rej ) => {
        const people = empleados.find( e => e.id === id )?.nombre;
        ( people ) 
            ? res( people )
            : rej( `No existe empleado con id ${ id }` );
    });
}
const getSalario = () => {
    return new Promise(( res, rej ) => {
        const salary = salarios.find( s => s.id === id )?.salario;
        ( salary ) 
            ? res( salary )
            : rej( `No existe salario con id ${ id }` );
    });
}
const getInfoUsuario = async( id ) => {
    try {
        const people = await getEmpleado(id);
        const salary = await getSalario(id);
            return `El salario del empleado: ${ people } es de ${ salary }`;    
    } catch (error) {
        throw error;
    }
}
const id = 2;
getInfoUsuario( id )
    .then( msg => {
        console.log('Succes!')
        console.log(msg) 
})
    .catch( err => {
        console.log('Wrong!')
        console.log( err ) 
});

