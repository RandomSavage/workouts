

// let showCoords = (event) => {
//   let x = event.clientX;
//   let y = event.clientY;
//   let card = document.querySelector("card");
//   var coords = `X Coords: ${x}, Y Coords: ${y}`;
//   document.getElementById("demo").innerHTML = coords;
//   if(x >= 485 && x <= 500 && y >= 50 && y <=65) {
//     card.classList.toggle('active');
//   }
// }

// let clearCoor = () => {
//   document.getElementById("demo").innerHTML ="";
// }
//I am wanting to toggle the classlist of a div from one that display: none  to active where it is display: block or whatever

let showCoords = (event) => {
  let x = event.clientX;
  let y = event.clientY;
  let card = document.querySelector(".card");
  let card2 = document.querySelector(".card2");
  let gat = document.querySelector('.gat-round');
  var coords = `X Coords: ${x}, Y Coords: ${y}`;
  document.getElementById("demo").innerHTML = coords;
  if(x >= 650 && x <= 690 && y >= 85 && y <= 110) {
    card.classList.toggle('active');
  } else if(x >= 555 && x <= 800 && y >= 620 && y <= 815){
  card2.classList.toggle('active');  gat.classList.toggle('next');
  } else {
    card.classList === ""
  }
}

let clearCoor = () => {
  document.getElementById("demo").innerHTML ="";
  card.classList.toggle('no-card');
}

let examin = parseInt("");
console.log(isNaN(examin));


// This is the else if for the codepen version
// if(x >= 290 && x <= 315 && y >= 50 && y <= 65) {
//   card.classList.toggle('active');
// } else if(x >= 325 && x <= 375 && y >= 350 && y <= 450