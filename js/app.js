'use strict';

let userName = prompt('What is your name?');
// console.log(userName);
alert ('Hello '+ userName + '! ' + 'Let\'s paly a game' );

let truth = 'Correct, Great job!';
let lie = 'Incorrect, You should be messing with me ;)';

let yourName = prompt('Is your name ' + userName + '?');

switch(yourName.toUpperCase()){
    case'YES':
        // console.log(truth);
        alert(truth);
        break;
    case'Y':
        // console.log(truth);
        alert(truth);
        break;
    case'YEAH':
        // console.log(truth);
        alert(truth);
        break;
    
    default:
        // console.log(lie);
        alert(lie);
};

let internet = prompt('Are you connected to the internet?')

switch(internet.toUpperCase()){
    case'YES':
        // console.log(truth);
        alert(truth);
        break;
    case'Y':
        // console.log(truth);
        alert(truth);
        break;
    case'YEAH':
        // console.log(truth);
        alert(truth);
        break;
    
    default:
        // console.log(lie);
        alert(lie);

}

let disappear = prompt('Can you make yourself diappear?');

switch(disappear.toUpperCase()){
    case 'NO':
        // console.log(truth);
        alert(truth);
        break;
    case 'N':
        // console.log(truth);
        alert(truth);
        break;
    default:
        // console.log('I guess you watch alot of sci-fi movies!');
        alert('I guess you watch alot of sci-fi movies!');            
}

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
        break;
    case 'N':
        // console.log(truth);
        alert(truth);
        break;
    default:
        // console.log('You are not taking me seriously!');
        alert('You are not taking me seriously!');    
}

let read = prompt('Can you read?');
switch(read.toUpperCase()){
    case 'YES':
        // console.log('Good for you');
        alert('Good for you 😝');
        break;
    case 'Y':
        // console.log('Good for you');
        alert('Good for you 😝');
        break;
    default:
        // console.log('Lier🤨');
        alert('Lier 🤨');
}