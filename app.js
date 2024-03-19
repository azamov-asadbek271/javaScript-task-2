const API = " https://api.adviceslip.com/advice ";


const btn = document.querySelector(".btn")
const title = document.querySelector(".number");
const p = document.querySelector(".advice_p");


async function getData(api) {
  let req = await fetch(api);
  let data = req.json();
  return data;
}
   function upDate(data) {
     title.innerHTML = data.slip.id;
     p.innerHTML = data.slip.advice;
   }

btn.addEventListener("click", () => {
getData(API).then((data) => upDate(data));
 function upDate(data) {
   title.innerHTML = data.slip.id;
   p.innerHTML = data.slip.advice;
 }
   
})
getData(API).then((data) => upDate(data));


