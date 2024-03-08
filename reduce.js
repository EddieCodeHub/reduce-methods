  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc =+ curr, 0); // acc = accumulator, curr = current value, 0 = initial value
console.log(sum); // 10


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc += curr.yrsExperience, 0); // not spcifying the initial value will break the code as an object will be passed as the initial value
console.log(totalExperience); // 16


// Grouping by a property, and totaling it too
let experienceByProffesion = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {}); // final {} is setting initial value as an empty object

console.log(experienceByProffesion); // { Developer: 12, Designer: 4 }