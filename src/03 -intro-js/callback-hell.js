const empleados = [{
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

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id) ?.nombre
        if (empleado) {
            callback(null, empleado);
        } else {
            callback(`Empleado con id ${ id } no existe`);
        }
    }
const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id === id) ?.salario
        if (salario) {
            callback(null, salario);
        } else {
            console.log(`No existe el ID ${id}`)
        }
    }
const id = 2; //ID PARA SALARIO      
getEmpleado(1, (err, empleado) => {
        if (err) {
            return console.error(err)
        }
        getSalario(id, (err, salario) => {
            if (err) {
                console.log('Error');
                return console.error(err)
                }
            console.log(`El Empleado ${empleado}, tiene el id ${id} y salario: $${salario}`);
            })
    });