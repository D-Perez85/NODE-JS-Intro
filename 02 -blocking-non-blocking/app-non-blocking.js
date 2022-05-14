const { getUser } = require('./users/users');

console.log('Program starting');
console.time('Init');

getUser( 1, ( user ) => {
    console.log('User 1:', user );
});

getUser( 2, ( user) => {
    console.log('User 2:', user );
    console.timeEnd('Init');
});

console.log('Ending Program');
 