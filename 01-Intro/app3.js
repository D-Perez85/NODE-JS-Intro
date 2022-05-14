console.log('Starting Program'); // 1

setTimeout( () => {
    console.log('First Timeout'); // 5
}, 3000 );


setTimeout( () => {
    console.log('Second Timeout'); // 2
}, 0 );


setTimeout( () => {
    console.log('Third Timeout'); // 3
}, 0 );


console.log('Ending Program'); // 4 :: 2

