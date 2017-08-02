var str = 'Hi';
console.log(str.padStart(5));           //   Hi
console.log(str.padStart(5, '-'));      //---Hi
console.log(str.padStart(11, ' baby '));// baby baHi
console.log('String greater than 5 character length'.padStart(5, '-'));//String greater than 5 character length

console.log(str.padEnd(5));             //Hi   
console.log(str.padEnd(5, '-'));        //Hi---
console.log(str.padEnd(11, ' baby '));  //Hi baby ba
console.log('String greater than 5 character length'.padEnd(5, '-'));//String greater than 5 character length
