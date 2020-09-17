let showCoords = (event) => {
  let x = event.clientX;
  let y = event.clientY;
  let card = document.querySelector("card");
  var coords = `X Coords: ${x}, Y Coords: ${y}`;
  document.getElementById("demo").innerHTML = coords;
}

let clearCoor = () => {
  document.getElementById("demo").innerHTML ="";
}