'use strict';

let score = 0;
let userName = prompt('What is your name?');
alert('Hello ' + userName + '! ' + 'Let\'s paly a game');

let truth = 'Correct, Great job!';
let lie = 'Incorrect, You should be messing with me ;)';

function firstQ() {
    let yourName = prompt('Is your name ' + userName + '?');

    switch (yourName.toUpperCase()) {
        case 'YES':
            alert(truth);
            score++;
            break;
        case 'Y':
            alert(truth);
            score++;
            break;
        case 'YEAH':
            alert(truth);
            score++;
            break;

        default:
            alert(lie);
    };
}
firstQ();

function secondQ() {
    let internet = prompt('Are you connected to the internet?')

    switch (internet.toUpperCase()) {
        case 'YES':
            alert(truth);
            score++;
            break;
        case 'Y':
            alert(truth);
            score++;
            break;
        case 'YEAH':
            alert(truth);
            score++;
            break;

        default:
            alert(lie);

    }
}
secondQ();

function thirdQ() {
    let disappear = prompt('Can you make yourself disappear?');

    switch (disappear.toUpperCase()) {
        case 'NO':
            alert(truth);
            score++;
            break;
        case 'N':
            alert(truth);
            score++;
            break;
        default:
            alert('I guess you watch a lot of sci-fi movies!');
    }
}
thirdQ();

function fourthQ() {
    let wrongDay = 'You have to go back to primary school!';

    let day = prompt('Does Sunday come after Monday?')
    switch (day.toUpperCase()) {
        case 'YES':
            alert(wrongDay);
            break;
        case 'Y':
            alert(wrongDay);
            break;
        case 'NO':
            alert(truth);
            score++;
            break;

        case 'N':
            alert(truth);
            score++;
            break;
        default:
            alert('You are not taking me seriously!');
    }
}
fourthQ();

function fifthQ() {
    let read = prompt('Can you read?');
    switch (read.toUpperCase()) {
        case 'YES':
            alert('Good for you 😝');
            score++;
            break;
        case 'Y':
            alert('Good for you 😝');
            score++;
            break;
        default:
            alert('Lier 🤨');
    }
}
fifthQ();

function sixthQ() {
    let userNum = prompt('Guess a number between 1 and 10?');
    for (let i = 0; i < 4; i++) {

        if (userNum < 3) {
            userNum = prompt('The number is more than that');
        } else if (userNum > 3) {
            userNum = prompt('The number is less than that');
        } else if (userNum == 3) {
            alert('Correct');
            score++;
            break;
        }

        if (i == 3) {
            alert('The correct answer is 3');
        }

    }
}

sixthQ();

function seventhQ() {

    let food = ['chinese', 'italian', 'arabian', 'american'];
    let yup = false;

    for (let i = 0; i < 6; i++) {
        let fav = prompt('Guess one of my favorite kitchens?');

        for (let j = 0; j < food.length; j++) {
            if (fav == food[j]) {
                alert('Correct answer!');
                yup = true;
                score++;
                break;
            }

        }
        if (yup == true) {
            break;
        } else {
            alert('Wrong answer')

        }




    }

    alert('the correct answers are ' + food)
}
seventhQ();

alert('Your score is ' + score + ' Out of 7');