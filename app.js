//variable
let userNumber = 0;
let tries = 1;
let maximumTries = 3;
//let wordTrys = 'time';

let maxNumber = parseInt(prompt("Text the range to play, from 1 to: "));

let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
console.log(secretNumber);

while(userNumber != secretNumber) {
    
    userNumber = parseInt(prompt(`Enter a new number between 1-${maxNumber}: `));

    console.log(userNumber);

    if (userNumber == secretNumber) { //compare two  numbers
        alert(`You guessed it,  the number is : ${secretNumber}, you tried ${tries} ${tries == 1 ? 'time' : 'times'}`);//condition was true
    } else {
        if (userNumber > secretNumber){
            alert("The secret number is lower")
        } else {
            alert("The secret number is greater")
        }
        tries++;
        //wordTrys = 'times';
        if (tries > maximumTries){
            alert(`You reached the maximum tries (${maximumTries})`);
            break;
        }
        //alert("Sorry, you didn't guess the number");//condition wasn't met
    }
}

