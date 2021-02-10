'use strict';

let score = 0;
let userName = prompt('What is your name?');
// console.log(userName);
alert ('Hello '+ userName + '! ' + 'Let\'s paly a game' );

let truth = 'Correct, Great job!';
let lie = 'Incorrect, You should be messing with me ;)';

function firstQ(){
let yourName = prompt('Is your name ' + userName + '?');

switch(yourName.toUpperCase()){
    case'YES':
        // console.log(truth);
        alert(truth);
        score++;
        break;
    case'Y':
        // console.log(truth);
        alert(truth);
        score++;
        // console.log(score);
        break;
    case'YEAH':
        // console.log(truth);
        alert(truth);
        score++;
        break;

    default:
        // console.log(lie);
        alert(lie);
};
}
firstQ();

function secondQ(){
let internet = prompt('Are you connected to the internet?')

switch(internet.toUpperCase()){
    case'YES':
        // console.log(truth);
        alert(truth);
        score++;
        break;
    case'Y':
        // console.log(truth);
        alert(truth);
        score++;
        break;
    case'YEAH':
        // console.log(truth);
        alert(truth);
        score++;
        break;

    default:
        // console.log(lie);
        alert(lie);

}
}
secondQ();

function thirdQ(){
let disappear = prompt('Can you make yourself diappear?');

switch(disappear.toUpperCase()){
    case 'NO':
        // console.log(truth);
        alert(truth);
        score++;
        break;
    case 'N':
        // console.log(truth);
        alert(truth);
        score++;
        break;
    default:
        // console.log('I guess you watch alot of sci-fi movies!');
        alert('I guess you watch a lot of sci-fi movies!');            
}
}
thirdQ();

function fourthQ(){
let wrongDay = 'You have to go back to primary school!';

let day = prompt('Does Sunday come after Monday?')
switch(day.toUpperCase()){
    case 'YES':
        // console.log(wrongDay);
        alert(wrongDay);
        break;
    case 'Y':
        // console.log(wrongDay);
        alert(wrongDay);
        break;
    case 'NO':
        // console.log(truth);
        alert(truth);
        score++;
        break;
       
    case 'N':
        // console.log(truth);
        alert(truth);
        score++;
        break;
    default:
        // console.log('You are not taking me seriously!');
        alert('You are not taking me seriously!');    
}
}
fourthQ();

function fifthQ(){
let read = prompt('Can you read?');
switch(read.toUpperCase()){
    case 'YES':
        // console.log('Good for you');
        alert('Good for you 😝');
        score++;
        break;
    case 'Y':
        // console.log('Good for you');
        alert('Good for you 😝');
        score++;
        break;
    default:
        // console.log('Lier🤨');
        alert('Lier 🤨');
}
}
fifthQ();

function sixthQ(){
let userNum= prompt('Guess a number between 1 and 10?');
for (let i = 0; i < 4; i++) {

    if (userNum < 3) {
        userNum=prompt('The number is more than that');
    }else if(userNum > 3){
        userNum=prompt('The number is less than that');
    }else if(userNum == 3){
        alert('Correct');
        score++;
        break;
    }
    
    if( i==3 ){
        alert('The correct answer is 3');
    }
    
}
}

sixthQ();

function seventhQ (){

let food = ['chinese', 'italian', 'arabian', 'american'];
let yup = false;

for (let i = 0; i < 6; i++) {
    let fav = prompt('Guess one of my favorite kitchens?');
    // console.log('in the first loop' + i);

    for (let j = 0; j < food.length; j++) {
        // console.log('in the second loop' + j);
        if (fav == food[j]) {
            alert('Correct answer!');
            yup= true;
            score++;
            break;
        }

    }
    if(yup == true){
        break;
    }else{
        alert('Wrong answer')
        
    }

    


}

alert('the correct answers are '+ food)
}
seventhQ();

alert('Your score is ' + score + ' Out of 7');