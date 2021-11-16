// let a = 10;
// console.log(a); // 10
// console.log("b"); // "b"
import { getData, getData1 } from "./api.js";
import { PI, temp } from "./math.js";

// di lam ve -> hoc CI -> di ngu
// console.log("Di lam ve");

// setTimeout(() => {
//   console.log("Hoc CI");
// }, 3000);
// // web api

// console.log("Di ngu");

// setTimeout(() => {
//   console.log("Di lam ve");
//   setTimeout(() => {
//     console.log("Hoc CI");
//     setTimeout(() => {
//       console.log("Danh rang");
//       setTimeout(() => {
//         console.log("Luot tiktok");
//         setTimeout(() => {
//           console.log("di ngu");
//         }, 1000);
//       }, 500);
//     }, 500);
//   }, 3000);
// }, 1000);

// ES6 (Promise)

let myPromise = new Promise(
  // executor
  // 1: Pendding
  // 2: Fulfilled
  // 3: Rejected
  function (resolve, reject) {
    // fake fetch API
    resolve([
      {
        id: 1,
        name: "Mindx",
      },
      {
        id: 2,
        name: "CI",
      },
    ]);
    // reject({
    //   code: 404,
    //   message: "Get user failed",
    // });
  }
);

// let loading = false;
// myPromise
//   .then(function (duLieu) {
//     console.log(duLieu);
//     loading = true;
//   })
//   .catch(function (error) {
//     console.log(error);
//     if (error.code === 404) {
//       alert("Not Found");
//     }
//   })
//   .finally(function () {
//     console.log("Done");
//     loading = false;
//   });

// Promise

// function getData(url, callback) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       callback(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// Async await
// async function getData1(url, callback, handleError) {
//   try {
//     const request = await fetch(url);
//     const response = await request.json();
//     callback(response);
//   } catch (error) {
//     handleError(error);
//   }
// }

// async await

function renderProduct(products) {
  console.log("products", products);
}

function renderUsers(users) {
  const { data } = users;
  let userStr = data
    .map((user) => {
      return `
     <div class="user">
      <img src="${user.avatar}" alt="">
      <h2>${user.first_name} ${user.last_name}</h2>
      <p>${user.email}</p>
    </div>
  `;
    })
    .join("");
  document.getElementById("root").innerHTML = userStr;
}

getData(
  "https://60ae0d5e80a61f00173324bc.mockapi.io/products",
  renderProduct,
  () => {}
);
getData1("https://reqres.in/api/users?page=2", renderUsers);

// happy case
