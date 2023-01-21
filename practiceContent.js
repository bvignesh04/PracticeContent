// SWITCHCASE

// let day = "Friday"

// switch (new Date().getDay()) {
//     case 1:
//         console.log("Tough")
//         break;
//     case 2:
       
//     case 3:
//        console.log('Fine')
//        break;
//     case 4:
//         console.log("Haircare")
//         break;
//     case 5:
//     case 6:
//     case 0:
//         console.log("Alright")
//         break;

//     default:
// console.log('Special day')
// }

// console.log(new Date().getDay())


// TEMPLATE LITERAL

// let num1 = 5;
// let num2 = 6;
// let result = num1 + num2;

// console.log("Thum sum of"+" "+ num1 + " "+"and"+" "+num2+" "+'is'+" "+result)

// console.log(`The sum of ${num1} and ${num2} is ${result}`)


// LOOP
// WHILE LOOP  - FIRST CONDITION IF TRUE THEN ONLY EXECUTION
// let i=0
// while(i<=10){
//     console.log(`The numbers are ${i}`);
//     i++
// }

// DO WHILE LOOP  - FIRST EXECUTION ONCE THEN ONLY CHECKING CONDITION


// let i = 10;
// do {
//     console.log("Print"+" "+i)
//     i++;
// } while (i<5);

// FOR LOOP - JUST DO THE SAME AS ABOVE BUT YOU CAN INITIALIZE CONDITION AND INCREMENT IN SINGLE LINE/YOU CAN DO SAME AS THE REST 2 TYPES

// for(let i=0;i<6;i++){
//     console.log("print hello")
//     console.log("print number"+" "+i) 
// }

// NESTED - HAVE A LOOK

// for(let i=1;i<=5;i++){
//     console.log(`Hai ${i}`);
//     for(let j=1;j<=5;j++) console.log(`Hello ${j}`)
// }

//WHICH IS BEST
//IF YOU THE STARTING AND ENDING POINT THEN GO WITH FOR LOOP
//DONT KNOW ABOUT STARTING AND ENDING POINT ONLY KNOW THE CONDITION THEN GO WITH WHILE/DO WHILE LOOP(EXECUTE ONCE BEFORE CONDITION)


// OBJECT - IT REPRESENTS THE REAL ENTITIES
// DOT/SQAURE WAY - FOR SOME SPECIAL REQUIREMENT LIKE WHEN THE NAME OF KEY IS MORE THAN ONE WORD/WHEN WE USING THE USER RESPONSE TO FETCH THE PROPERTY FROM OBJECT


// NULLCOLEASCING

// let laptop ={
//     brand:'Acer',
//     color1:'Black',
//     cpu:"i5"
// }

// console.log(laptop.color?.length)
// WHAT IF THE COLOR IS NOT AVAILBLE IN OBJECT - SIMPLY IT THROWS ERROR - TO AVOID THI USE (?)

// DELETE
// delete laptop.cpu
// console.log(laptop);

// FOR IN LOOP - fetching keys
// let laptop ={
//     brand:'Acer',
//     color1:'Black',
//     cpu:"i5",
//     prices:{
//         _4gb:"25000",
//         _8gb:"25000",
//         _16gb:"25000"
//     }
// }

// for 
// (key in laptop.prices){console.log(key, laptop.prices[key])}

// FUNCTION

// RETURN - when the execution reaches return then it exist from the bock
//        - it returns that data to something

// FUNCTION EXPRESSION
//   function assigning to variable

//   let add = function(num1,num2){
//     return num1+num2;
//   }


//   let sum =add
//   //can assingn like these two


//   let result = sum(4,5)
//   console.log(result);


// CONSTRUCTOR FUNCTION - KIND OF BLUEPRINT FOR CREATING MANY OBJECT OF SAME TYPE

// function Person(name,technology){
//     this.name = name;
//     this.technology = technology;

//     // this.work() = function(){console.log('coding and solving bugs')};
//     // have a look about function gives error;
// }

// let employee1 = new Person('Vicky','JS')
// let employee2 = new Person('Gopi',"Vue")

// console.log(employee1,employee2)
// employee1.work()




// ARRAY - CAN STORE NUMBER OF DATA EVEN WITH DIFFERENT DATA TYPES
//  push  and pop - add and cut last element respectively
//  unshift and shift - add and cut first element respectively
//  splice(2,3) - cut the data from given index and third parameter you can add some data toolbar

//  let data = [3,4,5,6,7,9]
//  console.log(data.splice(2,2,10,11,12,13));//5,6 got spliced further in that place returning usig third parameter 11,12,13
//  console.log(data);


// FOR OF LOOP
// for(let num in data){console.log(num)}

// YOU CAN USE FOR IN TOO THAT BASED ON KEY SO HERE IN THE SENSE ITS INDEX SO IT GIVES THAT -bUT FOR ARRAY GO WITH FOR OF
 

// DESTRUCTURING IN ARRAY

// let numbers = [1,2,3,4,5]
// // let [a,b,c,d] = numbers
// // console.log(a);
// // let [a,b,,d] = numbers
// // console.log(d);
// let [a,b,,...d] = numbers //using rest operator we can give rest of elements to one variable(d)
// console.log(d);


// SWAPPING

// let a=5;
// let b=6;
// [a,b] =[b,a]

// console.log(a,b)

//DESTRUCTURING IN STRING

// let name = 'My name is Vicky js developer'.split(' ')
// // console.log(name);
// // let [a,b,c,d] = name;
// // console.log(d)
// let [a,b,c,...d] = name
// console.log(d)

// ARRAY METHODS

// FOR EACH

// let nums = [34,45,67,45,78]
// nums.forEach((value,index,nums)=>{
//     console.log(value,index,nums)
//     //it gives each value of that array so we can perform something with array values
//     console.log(value *2);
// })

// FILTER - IF IT TRUE IT ALLOWS TO RENDER IF NOT NO

// let numbers = [34,66,79,34,25,75]
// numbers.filter(numbers => {console.log(numbers % 2 === 0)})

// // MAP - TAKE THE VALUE PERFORM SOME ACTION
// numbers.map(n=>{console.log(n * 2)})
// numbers.reduce((a,b)=> a+b)


//SET - ES6
// // SETS DIFFER FROM ARRAY
//collection of values
// *occur only once ie.unique
// *set is class
// // *no index

// let data = new Set();
// data.add(2)
// data.add(2)
// data.add(3)
// data.add(5)
// data.add('vicky')
// data.add('gopi')
// data.add('tom')
// console.log(data)

// console.log(data.has('vicky'))


// MAP - COLLECTION OF SET OF VALUES AND THE KEY AND VALUE CAN BE OF ANY DATA Types.

// let map = new Map();
// map.set('vicky','thanjai')
// map.set('gopi',30000)
// console.log(map)

// RECURSION

// function greet(){
//     console.log('Hello!')
// }

// greet()

// greet() is let console.log() function to complete, even into console there may be lot of function will happen,so console let it all to happen and it goes like this...
// this is called STACK.

// function greet() {
//     console.log('Hello!')
//     greet()
//     }
// if i call like this loop continue like above concept it calls greet and wait for other greet function to happen once it gets over it starts again and the process goes same as long as can based on the run engine.This is called RECURSION.
// IT CAN BE USED FOR FACTORIAL -REFER



// CLASS/OBJECT 
// CLASS - ITS JUST A BLUEPRINT/TEMPLATE IT DOES NOT GIVE ANY DATA(ALLOWS YOU TO GREAT MULTIPLE OBJECTS WITH SAME TYPE)
// OBJECT - USING NEW CONSTRUCTOR CREATING A OBJECT INSTANCE TO PASS DATA IN THE TEMPLATE(CLASS)

//  class User{
//     constructor(email,name){
//         this.email = email;
//         this.name = name;
//         this.score = 0;//we are not passing this parameter since its not the instance of new object, it is for methods

//     }
//     //methosds we are not creating inside constuctor - creating outside of the constructor
//     logIn(){console.log(this.email,'has login')
//              return this;}
//     logOut(){console.log(this.email,'has logged out')
//             return this}


//     //METHOD CHAINING
//     updateScore(){ this.score++;
//     console.log(`${this.email} has scored ${this.score}`)
//             return this;}

//             //REASON BEHIND return this FOR METHOD CHAINING 
// }

// let user1 = new User('vicky@123','Vicky')
// let user2 = new User('gopi@123','Gopi')
// //with that User template we have create so many object instance of same type  

// console.log(user1,user2)
// user1.logIn()
// user2.logOut()

// user1.logIn().updateScore().updateScore().logOut() //method chaining
// user2.logIn().updateScore().updateScore().logOut() //method chaining

// // INHERITANCE

// class Admin extends User{
//     deleteUser(user){
//          users = users.filter(u=>{ return u.email!= user.email})
//     }
// }

// let admin = new Admin('kumar@123','kumar')

// let users =[user1,user2,admin]
// admin.deleteUser(user1)

// console.log(users)


//CONSTRUCTOR FUNCTION

// function User(email,name){
//     this.email = email;
//     this.name = name;
//     this.logIn = function(){console.log(`${this.email} has logged in.`)}
// }

// IF YOU SEE IN CLASS THE FUNCTION ARE THERE IN THEIR PROTOTYPE BUT IT HERE ITS NOT LIKE THAT SO LOOK DOWN...

// User.prototype.logIn = function(){console.log(`${this.email} has logged in.`)}
// //instead of adding function like above we here adding it to its prototype - Actually these are takes place internally when we using Class(Es6)

// let user1 = new User('vicky@123','Vicky')
//  let user2 = new User('gopi@123','Gopi')

//  console.log(user1)
//  user2.logIn()

//  BEFORE CLASS (ES6) THIS WAS A FEATURE(constructor function) TO CREATE MULTIPLE OBJECT INSTANCE OF SAME TYPE
//  AND STILL EXIST.
//  THATS THE DEFFERENCE BETWEEN CLASS AND CONSTRUCTOR FUNCTION. 


// HOISTING - DEFAULT BEHAVIOUR OF MOVING VARIABLE/FUNCTION DECLARATION TO THE TOP SCOPE.
            // - variable can be used before it has been declared

// FUNCTION DECLARATION
// greet() //still it works since function declaration has hoisting
// function greet(){console.log('Hello!')}
// // greet() //usual call

// // FUNCTION EXPRESSION
// greet() - throws error cannot acces before initialization, since expression has no hoisting behaviour
// let greet = function(){console.log('Hello from function expression')}
// // greet() - usual call works


// myname = 'Vicky'
// console.log(myname)
// var myname; - it works since var has hoisting
// let myname; let,const has no hoisting
// const myname;

// Hoisting in Initialization

// var firstname = 'vicky';
// console.log(firstname,lastName)
// var lastName = 'sharma';

// OUTPUT IS VICKY UNDEFINED - VAR IS HOISTED BUT INITIALIZATION IS NOT HOISTED REASON WE GET UNDEFINED ELSE WE GET ERROR cannot acces before initialization before access  if hoisting is not works


// CALLBACK

// 1.Write the required function
// 2.pass the callback function in the first function arguments
// 3.get the argument in first function parameter
// 4.then call the callback function inside the function
// 5.call the first function as usual in outside 

//     function myname(name,place){                  //3//1
//         setTimeout(()=>{console.log('Im',name)
//         place()  //4
//     },3000)
//     }
    

// function place(){                                   //1
//     console.log('From Thanjavur')
// }
    
// myname('vicky',place)//5                         //2


// // PROMISES

// function makeOrder(cofee){
//     return new Promise((resolve,reject)=>{
//      if(cofee === "Black Cofeee"){resolve('your order is placed')}
//      else{reject('Sorry we are only serving Black cofee')}
//     })
// }

// function processedOrder(order){
//     return new Promise((resolve,reject)=>{
//         resolve('Dont worry your order is processing'+ order)
//     })
// }

// // makeOrder('Black Cofeee').then((order)=>{
// //     return processedOrder(order)
// // }).then((processedOrder)=>{console.log(processedOrder)})
// // .catch((error)=>{console.log(error)})

// // ASYNC/AWAIT

// async function alternate(){
//     try{
//         let order = await makeOrder('Black Cofeee ');
//         let fprocessedOrder = await processedOrder(order)
//         console.log(fprocessedOrder)
//     }
//     catch(error){
//       console.log(error)
//     }
// }

// alternate();


// DOM - DOCUMENT OBJECT MODEL

// // JAVASCRIPT QUOTE GENERATOR
// let btn = document.querySelector('.btn')
// let quote = document.querySelector('.text-area')
// let person = document.querySelector('.person-name')

// const quotes = [
//     {
//         quote:'1. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime, quidem, similique nostrum impedit, ',
//         person:'1 Vicky'
//     },
//     {
//         quote:'2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime, quidem, similique nostrum impedit, ',
//         person:'2 Vicky'
//     },
//     {
//         quote:'2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime, quidem, similique nostrum impedit, ',
//         person:'2 Vicky'
//     },
//     {
//         quote:'3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime, quidem, similique nostrum impedit, ',
//         person:'3 Vicky'
//     },
//     {
//         quote:'3. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime, quidem, similique nostrum impedit, ',
//         person:'3 Vicky'
//     },
//     {
//         quote:'4. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime, quidem, similique nostrum impedit, ',
//         person:'4 Vicky'
//     },
//     {
//         quote:'5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta maxime, quidem, similique nostrum impedit, ',
//         person:'5 Vicky'
//     },
// ]

// btn.addEventListener('click',()=>{
//     let random = Math.floor(Math.random() * quotes.length)
//     quote.innerText = quotes[random].quote
//     person.innerText = quotes[random].person
//     console.log(random)
// })



// MODAL

let modal = document.getElementById('modal-container')
let openbtn = document.getElementById('open-btn')
let closebtn = document.getElementById('close-btn')

openbtn.addEventListener('click' ,()=>{
    modal.style.display = 'block'
})

closebtn.addEventListener('click' ,()=>{
    modal.style.display = 'none'
})

window.addEventListener('click' ,(e)=>{
    if(e.target === modal){modal.style.display = 'none'}
    
})






