 export const PI =3.1415926;
 export function circleArea(PI,r){
    console.log(...arguments);
    return PI*r*r;
}
export function rectangleArea(l,b){
return l*b;
}
export function cylinderArea(PI,r,h){
    return PI*r*r*h;
}
export function filterArray(nums){ 
    console.log("original array is ",...nums);
    let unique =[];
     unique = nums.filter((item,index)=>{
    return nums.indexOf(item) ==index;
    })
return unique
}