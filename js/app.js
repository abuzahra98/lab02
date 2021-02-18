'use strict';
let userScoor = 0;


function userN() {
  let userName = prompt('enter name:');
  userScoor++;


  alert('welcome' + ' ' + userName);
  console.log(userName);
}

userN();

function loveCoffe() {
  let lovecoffe = prompt('do i love coffe?:y/n');
  lovecoffe = lovecoffe.toLowerCase();



  if (lovecoffe === 'y' || lovecoffe === 'yes') {
    alert('you are good');
    console.log(lovecoffe);
    userScoor++;
  }
  else {
    alert('you are wrong');
    console.log(lovecoffe);

  }
}
loveCoffe();

function loveMeet() {
  let lovemeet = prompt('do i love meet?: Answer y/n:');
  if (lovemeet === 'y' || lovemeet === 'yes') {
    alert('yes i love it');
    console.log(lovemeet);
    userScoor++;

  }
  else {
    alert('noooo i love it');
    console.log(lovemeet);

  }
}
loveMeet();

function loveTravel() {
  let lovetravle = prompt('do i love travel?: Answer: y/n  *ـ*');
  if (lovetravle === 'y' || lovetravle === 'yes') {
    alert('of course');
    console.log(lovetravle);
    userScoor++;

  }
  else {
    alert('of course i love travel');
    console.log(lovetravle);

  }
}
loveTravel();

function guessName() {
  let nameMbf = prompt('What is the name of my best friend?');
  console.log(nameMbf);
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

function colorTab() {
  let arr = ['red', 'green', 'blue', 'yallow'];
  let countAttemtcolor = 0;
  let favColor = prompt('guess my fav color');
  while (arr[0] !== favColor && arr[1] !== favColor && arr[2] !== favColor && arr[3] !== favColor && countAttemtcolor < 5) {

    alert('not correct,try agian');
    ++countAttemtcolor;
    favColor = prompt('guess my fav color');

  }
  if (arr[0] === favColor || arr[1] === favColor || arr[2] === favColor || arr[3] === favColor) {
    alert('you are right');
    userScoor++;

  } else {
    alert('my fav colors are' + ' ' + arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3]);
  }

  alert('your scoor is: ' + userScoor + ' /7');
}
colorTab();
