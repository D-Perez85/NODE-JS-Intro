
var name1 = 'Leonardo';
      if ( true ) var name1 = 'Marcelo'; //GLOBAL SCOPE
console.log(name1); //Marcelo
console.log('-----------------------------------------------------------------');


let name2 = 'Pablo'; 
   if ( true ) name2 = 'Juanchi'; //LOCAL SCOPE
console.log(name2); //Juanchi
console.log('-----------------------------------------------------------------');


const name3 = 'Celina'; 
if ( true ) {const name3 = 'Paola'}; //GLOBAL SCOPE - CONST NEVER CHANGES
console.log(name3); //
console.log('-----------------------------------------------------------------');