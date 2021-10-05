// // const nums =[1,2,3,4,5,6,1,2,3,4,5,6,3,4,1,5,2,5];
// // const newSet = new Set();
// // // for(let i=0;i<nums.length;i++){
// // //     newSet.add(nums[i]);
// // // }
// // nums.forEach((item)=>newSet.add(item))
// // console.log(newSet);

//             // Question 3
// class Person {
//     constructor(first,last,age,gender,interests){
//         this.first = first;
//         this.last =last;
//         this.age=age;
//         this.gender=gender;
//         this.interests=interests;
//     }
//      greeting(){
//         console.log(`Hi I'm ${this.first}`);
//     }
//     static print(){
//         console.log(`Hello super`);
//     }
//     farewell() {
//         console.log(`${this.first} has left the building. Bye for now!`);
//       };
// }
// let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
//     han.greeting();
//     han.farewell();

//     // Inheriting parent class
// class Teacher extends Person {
//     constructor(first,last,age,gender,interests,subject,grade){
//         super(first,last,age,gender,interests);
//         this.subject =subject;
//         this.grade = grade;
//     }
//     static print2(){
//         console.log(`Hello immediate child`);
//     }
// }
//                 // Instantiating Teacher
// let snape = new Teacher ('Severus','Snape',58,'male',['Potions'],'Dark arts',5)
// snape.greeting();
// snape.farewell();
// //          Inheriting parent class
// class Student extends Teacher{
//     static count=50;
//     constructor(first,last,age,gender,interests,subject,grade,house){
//         super(first,last,age,gender,interests,subject,grade);
//         this.house = house;
//     }
//     static print3(){
//         console.log(this);
//     }
   
//     studentFunction(){
//         console.log(`Hi I'm ${this.first} ${this.last} from ${this.house} house`);
//     }
// }
//             // Instantiating Student Class
// let Harry = new Student('Harry','Potter',18,'male',['Magic Potion'],'Dark Arts',1,'Gryffindor');
// Harry.greeting();
// Harry.studentFunction();
// Person.print();
// Teacher.print2();
// Student.print3();

        // Qstn 2
// function substrings(str){
//     var map1 = new Map();
//     for(let x=0,y=1;x<str.length;x++,y++){
//         map1.set(x,str.substring(x,y));
//     }
//     var map2 = new Map();
//     var temp ="";
//     var slent = Math.pow(2,map1.size)

//     for(let i=0;i<slent;i++){
//         temp="";
//         for(let j=0;j<map1.size;j++){
//             if((i & Math.pow(2,j))){
//                 temp+=map1.get(j);
//             }
//         }
//         if(temp!==""){
//             map2.set(i,temp);
//         }
//     }
//     console.log(map2);
// }
// substrings("abcd")