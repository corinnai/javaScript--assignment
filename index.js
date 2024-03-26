//TODO Tasks:  

//TODO 1: Create a variable that stores your name and log a string to the console that provides a personalised greeting e.g. “Hello John” 

let name = "Corina";
console.log(`1. Hello ${name}`);

//TODO 2: Create additional variables to store your favourite colour and your favourite film or tv series. Using template literals I want you to log a sentence including your name and these values to the console. 

let favouriteColour = "blue";
let favouriteFilm = "The lion king";
console.log(`2. Hello my name is ${name}, my favourite colour is ${favouriteColour} and my favourite film is ${favouriteFilm}`);

//TODO 3: Create variables storing what you ate for breakfast, lunch and dinner yesterday and log them to the console. I then want you to update the values for the breakfast, lunch and dinner variables to what you are eating today and log the new values to the console.  


const food={
    breakfast: "Oatmeal",
    lunch : "Chicken Fried",
    diner : "Spaghetti"
}
console.log(`3. Yesterday in the breakfast i ate ${food.breakfast}, at the lunch ${food.lunch} and in the afternoon ${food.diner}` );

food.breakfast = "pancake";
food.lunch ="Turkey";
food.diner = "Grilled salmon";
console.log(`3. Today in the breakfast i ate ${food.breakfast}, at the lunch ${food.lunch} and in the afternoon ${food.diner}` );


//TODO 4: Research on below string methods and experiment with them to see how you can manipulate / work with the string data. Put together some examples. 
    //Length(), slice(), toUpperCase(), trim(), split(), replaceAll(), replace() 

let length = "today is a beautiful day";
console.log(`4.${length.length}`);

const slice = 'today is a beautiful day';
console.log(`4.${slice.slice(2, 7)}`);

const upperCase = 'Hello, world!';
console.log(`4. ${upperCase.toUpperCase()}`);

const trim = '    Hello, world!    ';
console.log(`4. ${trim.trim()}`);

const split = 'apple, orange, banana, mango';
console.log(`4. ${split.split(', ')}`);

const replaceA = 'Today is a beautiful day';
console.log(`4.${replaceA.replaceAll('beautiful', 'rainy')}`);

const replace = 'The sky is blue. The ocean is blue.';
console.log(`4. ${replace.replace('blue', 'dark')}`);

let string = "        today is a beautiful day and the sun is shining";
     let modifiedString = string.trim().toUpperCase().slice(0, 24);
        console.log(`4. ${modifiedString}`);

let text = "today is a rainy day";
    let modifiedText = text.replaceAll('today', 'now').split(' ');
    console.log(`4. ${modifiedText}`);

//TODO 5: Write conditional statement to check ATM transaction: Think of a scenario where you are withdrawing money from ATM, create a cash machine / atm function which take card number and pin as parameters, your card pin and number should be check first if correct then: 
    //If the withdrawal amount is less than or equal to the account balance, the transaction should be successful, and the new/updated balance should be printed in the console of browser. Otherwise, if the withdrawal amount exceeds the account balance, the transaction should fail due to insufficient funds. 
    //Also you shouldn’t be able to withdraw more than 250 
    //If the card number or pin is incorrect, alert(‘Card Rejected’). 


const account = {
    cardNumber: 12345,
    pin: 1234,
    balance: 1000 
};

function atm(cardNumber, pin, withdrawalAmount) {

    if (cardNumber !== account.cardNumber || pin !== account.pin) {
        alert('Card Rejected');
        return; 
    }

    if (withdrawalAmount > 250) {
        console.log('Withdrawal limit exceeded. You cannot withdraw more than 250.');
        return;
    }

    
    if (withdrawalAmount <= account.balance) {
        account.balance -= withdrawalAmount;
        console.log(`Transaction successful. Your new balance is ${account.balance}.`);
    } else {
        console.log('Insufficient funds ');
    }
}

atm(12345, 1234, 200);


//TODO 6: Create an array of your favourite films / TV shows, up to 5 items. Use an array method to add 2 more items to your array. Use a loop to cycle through the array and log each item to the console. 


let favouriteFilms =["movie1", "movie2", "movie3", "movie4","movie5"];
     favouriteFilms.push("movie6", "movie7");

     for (let i=0; i< favouriteFilms.length; i++ ){
        console.log(`6. ${favouriteFilms[i]}`);
     }



//TODO 7: Create a function which will ask user for input to guess a number between 1-10, then generate random numbers between 1-10 until the guess number is generated. When the guess number is generated, alert ‘ Congratulation! Guess number found [x-time] attempts’ 
    //Note: x-time => number of iterations in which the guess number was found. 


function guessGame() {
    const number = Math.floor(Math.random() * 10) + 1; 
    let attempts = 0;
    let found = false;
        
    while (!found) {
        const userGuess = prompt("Guess a number between 1 and 10:");
        attempts++;
        
        
        if (parseInt(userGuess) === number) {
            found = true;
            alert(`Correct! It took you ${attempts} attempts to guess the number.`);
            console.log(`Correct! It took you ${attempts} attempts to guess the number.`)

        } else if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            alert(`Enter a valid number.`)

        }
        else{
            alert(`Wrong guess. Try again!`);
        }
    }
}

guessGame();



//TODO 8: Creating a function that generates random password of length that you are passing as argument to the function. 


function createPassword (length){

const text = "shfhuishfgiohsajgoihaouujgolsjngoih";
let password = '';
    for ( let i=0; i<length; i++ ){
       const passwordGenerate = Math.floor(Math.random() * text.length + 1);
        password += text[passwordGenerate];
    }
    return password;

}
const password = createPassword(6);
console.log(password);




