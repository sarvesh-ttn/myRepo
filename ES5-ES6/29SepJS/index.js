    //  Question 1
    // function Person(){

    // }
    // Person.prototype.prsn_prop = "I'm Person,Super Class";
    // var proto = new Person();

    // proto.emp_prop = "I'm an Employee";
    // function Employee(){

    // }
    // Employee.prototype = proto;
    // var developer = new Employee();
    // developer.dev_prop ="I'm a developer"
    // console.log(developer.prsn_prop);
    // console.log(developer.emp_prop);
    // console.log(developer.dev_prop);


        // Question 2
// const nums =[1,2,3,4,5];
// var i=0;
// setInterval(()=>{              
//     if(i<nums.length){
//    document.writeln(nums[i++])
//     }
//     else clearInterval();

// //     if(i>=nums.length) clearInterval();
// //     else {
// //    document.writeln(nums[i++])
// //     }
// },3000)
            
            // Question 3
            // Bind method
// const name1 ={
// firstName:"",
// lastName:""
// }
// const name2 ={
//     firstName:"",
//     lastName:""
// }
// const printName=(firstName,lastName)=>{
//     this.firstName =firstName;
//     this.lastName=lastName;
//     document.writeln(this.firstName+""+this.lastName );
// }
// let myName = printName.bind(name1,"Amit ","Bhadana")
// myName();

            // Call method
// const name1 ={
// firstName:"",
// lastName:""
// }
// const name2 ={
//     firstName:"",
//     lastName:""
// }
// const printName=(firstName,lastName)=>{
//     this.firstName =firstName;
//     this.lastName=lastName;
//     document.writeln(this.firstName+""+this.lastName );
// }
// printName.call(name1,"Amit ","Bhadana")

            // Qstn 4
// function addSum(){
//     var sum=0;
//     for(let i=0;i<arguments.length;i++){
//     sum+=arguments[i];
//     }
//    document.writeln(sum);
// }
// addSum(21,45,12,-10);

            //  Qstn 5
// const invokeChecker= (function(){
//     let invoked =0;
//     let countInstance=0;
//     return function fn2(){
//         if(new.target) ++countInstance;
//         else invoked++

//         return {
//             invoked,countInstance
//         };
//     };
// })();
// invokeChecker();
// invokeChecker();
// var obj1 = new invokeChecker();
// var obj2 = new invokeChecker();
// console.log(obj1);
// console.log(invokeChecker());
            // Question 6
// const getBtn = document.querySelector("button").addEventListener("click",counter());
// function counter(){
//     var count=0;
//    return function closureCounter(){
//      document.getElementById("count").innerHTML =count;
//         return count+=1;
//     }
// }

            // Qstn 7
// let fruits = ['Apple', 'Banana'];
// document.writeln((fruits),"<br>");
// fruits.push("pineapple");
// document.writeln((fruits),"<br>");
// fruits.unshift("green Apple","strawberry")
// document.writeln((fruits),"<br>");
// fruits.reverse();
// document.writeln((fruits),"<br>");
// fruits.join("");
// document.writeln((fruits),"<br>");
// fruits.sort()
// document.writeln((fruits),"<br>");
 
