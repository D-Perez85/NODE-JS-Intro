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

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e=> e.id === id)?.nombre; 
    if(empleado){
        callback(null,empleado);
    }else{
        console.log(`No existe el ${id} ingresado`);
    }
}

const getSalario = (id, callback) =>{
    const salario = salarios.find(e=>e.id === id); 
    if(salario){
        callback(null,salario);
    }else{
        console.log(`No existe el ${id} ingresado`);
    }
}



getEmpleado(2, (err,date)=>{
    if(err){
        console.log('ERROR');
        return console.error(err)
        }
        getSalario(2, (err, salary)=>{
            if(err){
                console.log('ERROR');
                return console.error(err); 
                }
            console.log(`El salario para ${date} (id ${salary.id}) es de $${salary.salario}`);
        }); 
    }); 