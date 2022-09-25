// //generate random fractions
// function randomFraction(){


//     return Math.random();
// }
// console.log(randomFraction())

/*generate random
whole number*/

// let randomNumberBetween0and19 = Math.floor(Math.random()* 20);

// function randomWholenum() {


//     return Math.floor(Math.random() * 10);
// }

// console.log(randomWholenum());

/* generate random whole number range*/

function randomRange(myMin, myMax){

    return Math.floor(Math.random()* (myMax - myMin + 1))

}

let myRandom = randomRange(5,15);

console.log(myRandom);