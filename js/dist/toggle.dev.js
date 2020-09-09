"use strict";

//classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove clas
// toggle - toggles class
var navToggle = document.querySelector(".nav-toggle");
var links = document.querySelector(".links");
navToggle.addEventListener('click', function () {
  // console.log(links.classList);
  // console.log(links.classList.contains("random"));
  // console.log(links.classList.contains("links"));
  // if(links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  links.classList.toggle("show-links");
});