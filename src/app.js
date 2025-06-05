import "bootstrap";
import "./style.css";

let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let randomWho = who [Math.floor(Math.random()*4)]
let randomAction = action [Math.floor(Math.random()*4)]
let randomWhat = what [Math.floor(Math.random()*3)]
let randomWhen = when [Math.floor(Math.random()*5)]

window.onload = function() {
  //write your code here
  document.querySelector('.alert').innerHTML = `${randomWho}  ${randomAction}  ${randomWhat}  ${randomWhen}`
};
