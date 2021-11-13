// output: [8, 2, 0, 10, 20, 22] 1 array chua cac phan tu la so chan
// let array = [];

// numbers.forEach((e) => {
//   if (e % 2 === 0) array.push(e);
// });

// let res = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     res.push(numbers[i]);
//   }
// }

// let res2 = numbers.filter((number) => {
//   return number % 2 == 0;
// });

// console.log(array);
// console.log(res);
// console.log(res2);

const numbers = [5, 5, 3, 2, 5, 0, 10, 11, 20, 22];

// Array method: filter, map, indexOf, includes, find, concat, some, every
// filter

// function print(value) {
//   console.log(value);
// }

// function add2(value) {
//   let res = value + 2;
//   console.log(res);
// }

// function sum(callback) {
//   let a = 7,
//     b = 10;
//   let total = a + b;
//   callback(total);
// }

// sum(add2);
// // sum(add2);

function test(number) {
  if (number > 5) {
    return true;
  } else {
    return false;
  }
  // if (number % 2 == 0) {
  //   return true;
  // } else {
  //   return false;
  // }
}

// function sum(a, b) {
//   return a + b;
// }

// const sum1 = (a, b) => a + b;

// let res = numbers.filter((number) => number % 2 == 0);
// console.log(res);

// Map
// let mapRes = numbers.map((number) => number + 2);
// console.log(mapRes);
// const values = [1, true, {}, "", [], "1"];
// // [number, boolean, object, string, array, string]
// const types = values.map((value) => typeof value);
// console.log(types);

// indexOf & lastIndexOf
// let indexOfRes = numbers.indexOf(5);
// let lastIndexOfRes = numbers.lastIndexOf(5);
// console.log(indexOfRes, lastIndexOfRes);

// includes
// let includesRes = numbers.includes(-5);
// console.log(includesRes);

let num1 = [1, 2],
  num2 = [3, 4];
let concatRes = num1.concat(num2);
// console.log(concatRes);

// some
let someRes = numbers.some((number) => number % 2 == 0);
// console.log(someRes);
let everyRes = numbers.every((number) => number % 2 == 0);
// console.log(everyRes);

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// output: [9,8,7,6,5,4,3,2,1]
// let arr1 = [1, 2],
//   arr2 = [1, 3];

// "abc" => "cba"
// const arr = arr2.filter((e) => arr1.indexOf(e) === -1);
// const res = arr1.concat(arr);
// console.log(res);

// function findMin(arr) {
//   let min = arr[0];
//   for (let val of arr) {
//     if (min > val) {
//       min = val;
//     }
//   }
//   return min;
// }

// const sumMin = (arr) => {
//   let res = 0;
//   for (let item of arr) {
//     let min = findMin(item);
//     res += min;
//   }
//   console.log(res);
// };

// sumMin([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100],
// ]);

// template literal
// let myName = "Quang";
// let company = "Mindx";
// let className = "CI-JS69";

// let myStr = `Hello my name is ${myName}, my company is ${company}`;
// console.log(myStr);

// default param
// const sum = (a = 0, b = 0) => a + b;
// console.log(sum(1, 2)); // 3
// console.log(sum(1)); //
// console.log(sum()); //

// Destructuring (array, object)
// array
// let skills = ["JS", "Go", "Java", "C++"];
// let [, go, ...res] = skills;
// console.log(go);
// console.log(res);

// object
// let person = {
//   id: 1,
//   lastName: "Quang",
//   skills: ["JS", "Go", "Java", "C++", "Python"],
//   age: 22,
//   pet: {
//     name: "Tom",
//     age: 1,
//   },
// };

// let {
//   id: userId,
//   lastName,
//   skills,
//   age,
//   pet: { name },
// } = person;
// // let lastName = person.lastName;
// // let skills = person.skills;

// console.log("lastName", lastName);
// console.log("skills", skills);
// console.log("id", userId);
// console.log("petName", name);

// Rest / Spread (...)
const sum = (...params) => {
  let total = 0;
  params.forEach((item) => (total += item));
  console.log(total);
};

// sum(1, 2, 4, 5, 6);

let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push(10);
console.log(arr1);
console.log(arr2);

// let arr2 = [4, 5, 6];
// // console.log(arr1.concat(arr2));
// console.log([1, 2, 4, 5, 6, 3]);
// let arr3 = [...arr1];
