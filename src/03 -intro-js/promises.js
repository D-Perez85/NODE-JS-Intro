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

const getEmpleado = (id)=>{
    return new Promise((res, rej)=>{
        const people = empleados.find(e=> e.id === id); 
        (people) ? res(people) : rej('No existe ese ID para empleados')
    })
}
const getSalario = (id)=>{
    return new Promise((res, rej)=>{
        const value = salarios.find(e=> e.id === id); 
        (value) ? res(value) : rej('No existe ese ID para Salarios')
    })
}

//INDIVIDUAL PROMISES
// let id = 20; 
// getEmpleado(id)
//     .then(people =>console.log(people))
//     .catch( err => console.log(err) ); 
// getSalario(id)
//     .then(value=> console.log(value))
//     .catch(err => console.log(err))


//UNIQUE PROMISE - IF THE ID EXISTE MAKE THE REST
let name;
let id = 2;  
getEmpleado(id)
    .then( people => {
        name = people;
        return getSalario( id ) // NOW EXECUTE THE FUNCTION INSIDE
        })
    .then( salary => console.log( 'El empleado:',name ,'tiene un salario de:', salary ))
    .catch( err => console.log( err ) );

    
    