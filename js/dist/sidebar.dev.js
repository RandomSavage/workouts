"use strict";

var toggleBtn = document.querySelector('.sidebar-toggle');
var closeBtn = document.querySelector('.close-btn');
var sidebar = document.querySelector('.sidebar');
toggleBtn.addEventListener("click", function () {
  console.log(sidebar.classlist); // long way:
  // if(sidebar.classList.contains("show-sidebar")) {
  //   sidebar.classList.remove("show-sidebar");
  // } else{
  //   sidebar.classList.add("show-sidebar");
  // }

  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});