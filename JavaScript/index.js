// printing count value 
let saveEl = document.getElementById("save-el") //Grabing save-el usiing saveEl

let count = 0
let countEl = document.getElementById("count-el");
function increament(){
    count++;
    countEl.textContent = count;
}

let callSave = document.getElementById("save-btn")
function save(){
    console.log(count);
    let countStr = count + " - "
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = 0;
}








// using p tag
let welcomeEl = document.getElementById("welcome-el");
let name = "Tahzib Mahmud Rifat Rifat"
let greetings = "Assalamualaikum, ";
welcomeEl.innerText = greetings + name
welcomeEl.innerText += "👏"

// name = name + "👏" ;
// welcomeEl.innerText = greetings + name;


// using string in js
let username = "Rifat"
let message = "You have 3 notifications"

console.log(message+ ", " + username)

let number = 45
let string = "87"
let combined = string + number
console.log(combined)
combined = number + string
console.log(combined)


// methods in JS
// function countDown(){
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
// }
// countDown()

// let lap1 = 32
// let lap2 = 33
// let lap3 = 34

// function myLogger(){
//     console.log(lap1+lap2+lap3)
// }
// myLogger( )

// let lapsCompleted = 0

// function lapsCounter(){
//     lapsCompleted++
// }

// lapsCounter()
// lapsCounter()
// lapsCounter()

// console.log(lapsCompleted)
