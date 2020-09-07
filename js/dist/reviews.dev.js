"use strict";

// Local Data consisting of an array of objects will go here.
// Select Items
var img = document.getElementById("person-img");
var author = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
var randomBtn = document.querySelector(".random-btn"); // set starting item

var currentItem = 0; //load initial item

window.addEventListener("DOMContentLoaded", function () {
  console.log("shake and bake");
  showPerson(currentItem);
}); // show person based on item

function showPerson(person) {
  var item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}