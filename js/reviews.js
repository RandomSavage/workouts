// Local Data consisting of an array of objects will go here.


// Select Items
const img =  document.getElementById("person-img");
const author =  document.getElementById("author");
const job =  document.getElementById("job");
const info =  document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", () => {
  console.log("shake and bake");
  showPerson(currentItem);
})

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
