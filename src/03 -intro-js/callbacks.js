//BASIC CALLBACK (Function into another function like args)

const getUserByID = (id, callback) => {
    const user = {
        id,
        name: 'Damian'
    }
    setTimeout(() => {
        console.log('Succes Callback')
        callback(user)
    }, 1500)
}
getUserByID(1, (user) => {
    console.log(`Legajo nro: ${user.id}`);
    console.log(`Name: ${user.name.toUpperCase()}`);
});


