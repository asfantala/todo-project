'use strict';
// Ask the user to enter his/her name as input.
var inputRes = prompt("Please enter your name: ");
console.log(inputRes); 
//Ask the user to enter his/her gender as input
var inputGen = prompt("Enter your gender female/male");
console.log(inputGen);
//Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero
var inputAge = prompt ("Enter your age");
if (inputAge <= 0){
    alert("The age less than or equal zero");
}

//Ask the user to confirm if he wants to skip the welcoming message.

var confirMsgResult = confirm("press ok to see the welcoming message");
console.log(confirMsgResult); 

//Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is not correct alert the welcoming message without the title, according to the confirmation.

/*if (confirMsgResult==true){
if ( inputGen == "female"){
alert ("Hello Ms" +" " +inputRes );
}else if (inputGen == "male") {
    alert ("Hello Mr" +" " + inputRes );  
}  else {
    alert ("Hello " +" " + inputRes );  

} 
}*/
if (confirMsgResult==true){
switch (inputGen){
case "female" :
alert ("Hello Ms" +" " +inputRes );
break;
case "male" :
    alert ("Hello Mr" +" " +inputRes );
    break;
default :
alert ("Hello " +" " + inputRes );


}}


//ask 3 question
// let answers =[];

// let question1 =prompt(" Do you like wakeup early? ");
// if (question1 =="") {answers.push("invalid");
// }else{
//     answers.push(question1);
// }

// let question2 = prompt(" Do you like drink coffee?");
// if (question2 ==""){answers.push("invalid");
// }else{
//     answers.push(question2);
// }
// let question3 =prompt(" Do you like using this web ? ");
// console.log(question3);
// if (question3 =="") {answers.push("invalid");
// }else{
//     answers.push(question3);
// }

//  console.log(answers);


let question =[" Do you like wakeup early? ",
" Do you like drink coffee?",
" Do you like using this web ? "];

const answers =()=> {
for (let i = 0; i < question.length; i++) {
let questions = prompt (question [i]);
if (questions === "yes" || questions === "no") {
    return questions;
  }
  return "invalid";
};

}

let answer =[];
for (let i = 0; i < question.length; i++) {
  answer.push(answers());
}
console.log (answer);
















