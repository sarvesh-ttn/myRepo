            // Qstn 1
// const nums =[3,62,234,7,23,74,23,76,92]
// console.log(nums);
// const newnums =[];
// const filterNums = (arr)=>{
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]>70){
//             newnums.push(nums[i]);
//         }
//     }
//     console.log(newnums);
// }
// filterNums(nums);

                // Qstn 3
// const song = { name: 'Dying to live', artist: 'Tupac', featuring: 'Biggie Smalls' };
// const divSong =document.createElement("div")
// divSong.classList.add("song")
// divSong.innerHTML = `
// <p>${song.name} --${song.artist} (${song.featuring})</p>
// `;
// const parentDiv = document.querySelector("div");
// parentDiv.appendChild(divSong)
// console.log(divSong);

                // Qstn 4
// const user = { firstName: "Sahil", lastName: "Dua", Address: { Line1: "address line 1", Line2: "address line 2", State: "Delhi", Pin: 110085, Country: "India", City: "New Delhi", }, phoneNo: 9999999999 }
// const { Address:{
//         ...value
//     } 
// }=user;
// console.log(Object.keys(value));

// const listItems = Array.from(document.querySelectorAll("li"));
// const flexItems = listItems.filter((li)=>li.textContent.includes("Flexbox"));

// const dataTime =flexItems.map((fli)=>fli.getAttribute("data-time"));
// const secondsList = dataTime.map((dt)=>{
//     const[min,sec] = dt.split(":");
//     return +min*60+ +sec;
// })
// const totalSeconds = secondsList.reduce((total,curr)=>total+curr,0)
