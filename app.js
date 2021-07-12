// 1. if/else if/else statements #

// var weather = function(temperature){
//     console.log("The temperature outside is", temperature, "degrees farenheight.");
    
//     if(temperature <= 65) {
//       console.log("It's getting cold outside. Better wear a jacket!");
//     } else if (temperature > 65 && temperature <= 80){
//       console.log("It's pleasant outside!");  
//     } else {
//       console.log("It's getting hot outside!");
//     }
//   }
  
//   weather(79);


// var weather = function(temperature){
//     console.log("The temperature outside is", temperature, "degrees farenheight.");
    
//     if(temperature <= 30) {
//       console.log("It's freezing outside! It'll be best to bundle up.");
//     } else if(temperature <= 55) {
//       console.log("It's getting cold outside. Better wear a jacket!");
//     } else if (temperature <= 75){
//       console.log("It's pleasant outside!");  
//     } else {
//       console.log("It's getting hot outside!");
//     }
//   }
  
//   weather(20);
//   weather(40);
//   weather(60);
//   weather(90);


// function foo(){
//     for (var i=0; i<5 ; i++){
//       console.log(i);
//     }
//     console.log(i);
//   }
  
//   foo();


// const student = {
//     ID: '21',
//     name: 'Jhon',
//     GPA: '3.0',
//   };
  
//   const id = student.ID;
//   const name = student.name;
//   const GPA = student.GPA;
  
//   console.log(id);
//   console.log(name);
//   console.log(GPA);


// const student = {
//     ID: '21',
//     name: 'Jhon',
//     GPA: '3.0',
//   };
  
//   const {ID, name, GPA} = student;


//   const student = {
//     ID: '21',
//     name: 'Jhon',
//     GPA: '3.0',
//   };
  
//   const {name:n} = student;
//   console.log(n);


//   // no destructuring
// const users = this.state.users;
// const counter = this.state.counter;

// // destructuring
// const { users, counter } = this.state;

// JavaScript ES5 function
// function getGreetingFunc() {
//     return 'Welcome to JavaScript';
//   }
  
//   // JavaScript ES6 arrow function with body
//   const getGreetingArrow1 = () => {
//     return 'Welcome to JavaScript';
//   }
  
//   // JavaScript ES6 arrow function without body and implicit return
//   const getGreetingArrow2 = () =>
//     'Welcome to JavaScript';
  
//   console.log(getGreetingFunc());
//   console.log(getGreetingArrow1());
//   console.log(getGreetingArrow2());