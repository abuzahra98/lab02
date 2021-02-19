'use strict';
let userScoor = 0;


function userN() {
  let userName = prompt('enter name:');
  userScoor++;


  alert('welcome' + ' ' + userName);

}

userN();

function loveCoffe() {
  let lovecoffe = prompt('do i love coffe?:y/n');
  lovecoffe = lovecoffe.toLowerCase();



  if (lovecoffe === 'y' || lovecoffe === 'yes') {
    alert('you are good');

    userScoor++;
  }

  else {
    alert('you are wrong');
  }

}

loveCoffe();

function loveMeet() {
  let lovemeet = prompt('do i love meet?: Answer y/n:');
  if (lovemeet === 'y' || lovemeet === 'yes') {
    alert('yes i love it');

    userScoor++;

  }

  else {

    alert('noooo i love it');
  }

}
loveMeet();

function loveTravel() {
  let lovetravle = prompt('do i love travel?: Answer: y/n  *ـ*');
  if (lovetravle === 'y' || lovetravle === 'yes') {
    alert('of course');

    userScoor++;

  }
  else {
    alert('of course i love travel');
  }


}

loveTravel();

function guessName() {
  let nameMbf = prompt('What is the name of my best friend?');

  if (nameMbf.toLowerCase() === 'ahmad') {
    alert('yes he is ahmad');
    userScoor++;

  }
  else {
    alert('wrong');
  }
}
guessName();
function guessNum() {

  let countAttemt = 0;


  let yearGrad = Number(prompt('guess my graduated year?'));
  while (yearGrad !== 2021 && countAttemt < 3) {

    if (yearGrad < 2021) {
      alert('too low');
    }
    else {
      alert('too high');
    }
    ++countAttemt;
    yearGrad = Number(prompt('guess my graduated year?'));

  }
  if (yearGrad === 2021) {
    alert('you are right');
    userScoor++;

  }
  else {
    alert('you are wrorng the answer is 2021');
  }
}
guessNum();

function playerN() {
  let arr = ['ronaldo', 'messi', 'xavi', 'kaka '];

  let playerName = prompt('guess my best player');
  let conditionCheck = false;
  for (let index = 0; index < 5; index++) {
    if (arr[0] !== playerName && arr[1] !== playerName && arr[2] !== playerName && arr[3] !== playerName) {
      alert('You are wrong');
      playerName = prompt('guess my best player');
    } else if (arr[0] === playerName && arr[1] === playerName && arr[2] === playerName && arr[3] === playerName) {
      conditionCheck = true;
      break;
    }
  }

  if (!conditionCheck) {
    alert('my best player is' + '  ' + arr[0] + '  ' + arr[1] + '  ' + arr[2] + '  ' + arr[3]);
  } else {
    alert('you are right');

    userScoor++;


  }

  alert('your scoor is: ' + userScoor + ' /7');
}
playerN();
