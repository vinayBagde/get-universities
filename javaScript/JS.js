// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

//  =========  Dog picture API ============
// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//   let info = await getImg();
//   let img = document.querySelector("img");
//   img.setAttribute("src", info);
//   console.log(info);
// })
// async function getImg() {
//   try {
//     let data = await axios.get(url2);
//     return data.data.message
//   } catch (err) {
//     console.log(err);
//   }
// }

//  ========   Headeers   ===========
// let url = "https://icanhazdadjoke.com";

// async function getJokes() {
//   const config = { headers: { Accept: "text/plain" } };
//   let res = await axios.get(url, config);
//   console.log(res.data);
// }

// =========    query String    ============

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let country = document.querySelector("input").value;
//   let colArr = await getColleges(country);
//   show(colArr);
// });

// function show(colArr) {
//   let list = document.querySelector("#list");
//   for (col of colArr) {
//     console.log(col.name);
//     let li = document.createElement("li");
//     li.innerText = col.name;
//     list.appendChild(li);
//   }
// }

// async function getColleges(country) {
//   try {
//     let res = await axios.get(url + country);
//     return res.data;
//   } catch (err) {
//     console.log("Error : ", err);
//     return [];
//   }
// }

// ========   fetch   ==========
// async function getFact() {
//   try {
//     let data = await fetch(url);
//     let data2 = await data.json();
//     console.log(data2.fact);
//   } catch (err) {
//     console.log(err);
//   }
// }

// =========   Axios   =========
// let btn = document.querySelector("button");

// btn.addEventListener("click", async function () {
//   let fact = await getInfo();
//   let p = document.querySelector("p");
//   p.innerText = fact;
// });

// async function getInfo() {
//   try {
//     let data =  await axios.get(url);
//     return data.data.fact;
//   } catch (err) {
//     console.log(err);
//     return "no fact found";
//   }
// }

// fetch(url)
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((result) => {
//     console.log(`data 1 : ${result.fact}`);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((result) => {
//     console.log(`data 2 : ${result.fact}`);
//   })
//   .catch((err) => {
//     console.log("ERROR - ", err);
//   });

let url = "https://catfact.ninja/fact";

// axios
//   .get(url)
//   .then((result) => {
//     console.log(result.data.fact);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function getInfo() {
  try {
    let data = await axios.get(url);
    console.log(data.data.fact);
  } catch (err) {
    console.log(`Error : ${err}`);
  }
}
