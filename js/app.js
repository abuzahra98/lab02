let userName = prompt('enter name:');
alert('welcome' + ' ' + userName);
console.log(userName);

let lovecoffe = prompt('do i love coffe?:y/n');
lovecoffe = lovecoffe.toLowerCase();



if (lovecoffe === 'y'|| lovecoffe === 'yes') {
  alert('you are good');
  console.log(lovecoffe);
}
else {
  alert('you are wrong');
  console.log(lovecoffe);

}

let lovemeet = prompt('do i love meet?: Answer y/n:');
if (lovemeet === 'y'|| lovemeet === 'yes') {
  alert('yes i love it');
  console.log(lovemeet);
}
else {
  alert('noooo i love it');
  console.log(lovemeet);

}

let lovetravle = prompt('do i love travel?: Answer: y/n  *ـ*');
if (lovetravle === 'y'||lovetravle === 'yes') {
  alert('of course');
  console.log(lovetravle);
}
else {
  alert('of course i love travel');
  console.log(lovetravle);

}


let nameMbf = prompt('What is the name of my best friend?');
console.log(nameMbf);
if (nameMbf.toLowerCase() === 'ahmad') {
  alert('yes he is ahmad');
}
else {
  alert('wrong');
}



