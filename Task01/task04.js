function getRandomNumber (min = 0, max = 100) {
    let difference = max - min; 
    let rand = Math.random();
    rand = Math.floor( rand * difference); 
    rand = rand + min;
    return rand;
}
/*const min = 1;
const max = 10;
const randomNumber = getRandomNumber(min, max);
console.log(`Random number between ${min} and ${max}: ${randomNumber}`);*/
