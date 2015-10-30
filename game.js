var userName=prompt("What is your name?");
var counter=0;
var answer1= "Boston";
var answer2= "October";
var answer3= "7";

console.log("The user name entered was" + userName);

var play = confirm("Welcome to my guessing game " + userName + " would you like to play? (Press ok to play the game)");

while (play){
var userAnswer1 = prompt("I currently live in Seattle but I grew up in Massachusetts. What city in Massachusetts did I grow up in?");
var userAnswer2 = prompt("I was born in 1983 can you guess which month?");
var userAnswer3 = prompt("I have a child who is less than a year old can you guess how many months old she is?");

if (userAnswer1 === answer1){
  alert("You are correct I was born in " + answer1);
  counter++;
}

else {
  alert("You were incorrect you guessed " + userAnswer1 + " The correct answer is " + answer1);
}

if (userAnswer2 === answer2){
  alert("You are correct I was born in " + answer2);
  counter++;
}

else {
  alert("You were incorrect you guessed " + userAnswer2 + " The correct answer is " + answer2);
}

if (userAnswer3 === answer3){
  alert("You are corerct my daughter is " + answer3 + " months old");
  counter++;
}

else {
  alert("You were incorrect you guessed " + userAnswer3 + " The correct answer is " + answer3);
}

alert("You got " + counter + "/3 correct");
play=false;
}
