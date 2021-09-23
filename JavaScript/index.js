// Question 1
// const principalAmount = prompt("Enter a amount");
// const rate = prompt("Enter rate of interest");
// const time = prompt("Enter time period");
//  let amount = (principalAmount*rate*time)/100;
//  let paraText = document.getElementById("para");
//  paraText= document.writeln("prinicpal amount is "+" "+principalAmount," rate of interest is "+" "+rate," time period is "+" "+time);
//  const displayAmount = document.getElementById("qstn1");
//  displayAmount.textContent = amount;

// Question 2
//  let userName = window.prompt("Enter a name");
// const checkPalindrome =(userName)=>{
//     let reverseName="";
//     for(let i =userName.length-1;i>=0;i--){
//         reverseName+=userName.charAt(i);
//     }
//     return reverseName;
// }
// let storedName = checkPalindrome(userName);
// console.log(storedName);
// if(userName===storedName){
//     let a1 =document.getElementById("qstn2")
//     a1 =document.writeln(userName+"  "+storedName+" It's a palindrome");
// }
// else {
//     let a2 =document.getElementById("qstn2")
//     a2 =document.writeln(userName+"  "+storedName+"  It's not a palindrome");
// }

// Qstn 3
// const radiusCircle = prompt("Enter circle radius");
// const findArea =(r)=> {
//     let circleArea =22/7 *r*r;
//     return circleArea;
// }
// let myArea = findArea(radiusCircle).toFixed(2);
// let area = document.getElementById("qstn3");
// area =document.writeln("Area of circle with radius "+radiusCircle+" is "+myArea);


// Qstn 4
// const person ={
//     name:"Sarvesh",
//     age:23,
//     city:"Haldwani"
// }
// console.log(person);
// const newPerson = {...person,copy:true};
// console.log(newPerson);

// Qstn 5

// list of people  
const personDetails =[
    {name:"Amit",age:23,salary:30000,DOB:"29-05-1987"},
    {name:"Rashi",age:24,salary:6000,DOB:"27-04-1997"},
    {name:"Koushal",age:44,salary:50000,DOB:"16-08-1978"},
    {name:"Piyush",age:31,salary:80000,DOB:"31-03-1990"},
    {name:"Ashish",age:18,salary:2500,DOB:"20-04-1999"},
    {name:"Divya",age:44,salary:308,DOB:"15-09-1977"},
    {name:"Amayra",age:30,salary:400,DOB:"12-03-1991"},
    {name:"Itachi",age:26,salary:23000,DOB:"19-03-1995"},
    {name:"Mitali",age:38,salary:230,DOB:"28-07-1983"},
    {name:"Amita",age:19,salary:3000,DOB:"21-08-2002"},
    ]

// part a
console.log(...personDetails.filter((person)=>person.salary >5000 ));

//  part c
// console.log(...personDetails.filter((person)=>{
//     if(person.salary < 1000 && person.age >20){
//         console.log(person)
//          return {...person.salary*=5} ;
//     } ;
// }));

// part b
// console.log(...personDetails.sort((a,b)=> a.age- b.age));
