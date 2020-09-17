"use strict";

var showCoords = function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var card = document.querySelector("card");
  var coords = "X Coords: ".concat(x, ", Y Coords: ").concat(y);
  document.getElementById("demo").innerHTML = coords;
};

var clearCoor = function clearCoor() {
  document.getElementById("demo").innerHTML = "";
};