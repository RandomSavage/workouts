import { getParkingData } from "./network.js";

async function callGetParkingData() {
  console.log("calling");
  const parkingData = await getParkingData();
  return parkingData;
}

const parkingData = await callGetParkingData();
console.log(parkingData);

parkingData.sort((a, b) => (parseInt(a.out) < parseInt(b.out) ? 1 : -1));

var table = document.getElementById("parkingData");
let tr = table.getElementsByTagName("tr");
tr[0].style.background = "blue";
// console.log("Hello" + tr) //Hello [object HTMLCollection]
var tableData = {
  license: [],
  price: [],
  duration: [],
  in: [],
  out: [],
};



for (const singleData of parkingData) {
  var minutes = (singleData["out"] - singleData["in"]) / 1000 / 60;
  var duration = (minutes / 60).toFixed(2);
  var price = (minutes > 60 ? (duration - 1) * 2.99 : 0).toFixed(2);
  var finalParkingData = {
    ...singleData,
    ...{
      price: price,
      duration: duration,
    },
  };
  for (const [key, value] of Object.entries(finalParkingData)) {
    tableData[key].push(value);

    // console.table(key,value)
    // console.log(tableData[value])
    //not sure but it paints the first row red 
    if(value == 1) {
      tr[0].style.color = "red";
    }
  }
}


for (let i = 0; i < parkingData.length; i++) {
  var row = table.insertRow();

  if(document.getElementById("parkingData").rows[0].cells[0].innerHTML === "0") {
    console.log("heeelelelelelelelelelelel")
  }else{
    console.log("ahahahahaahahah")
  }

  ["license", "price", "duration", "in", "out"].forEach(function (item, index) {
    var content = tableData[item][i];
    var cell = row.insertCell();
    if (["in", "out"].includes(item)) {
      var date = new Date(content);
      var newText = document.createTextNode(date.toLocaleString("en-US"));
    } else {
      var newText = document.createTextNode(content);
    }
    // console.log(`Im crazy: ${row.innerHTML[i]}`)
    cell.appendChild(newText);
  });

}


//money-maker for accessing down to table data 
for(let i = 0; i < table.rows.length; i++) {
  //gets cells of current row
  var oCells = table.rows.item(i).cells;

     //gets amount of cells of current row
     var cellLength = oCells.length;

        //loops through each cell in current row
   for(var j = 0; j < cellLength; j++){
    /* get your cell info here */
     var cellVal = oCells.item(j).innerHTML; 
     console.log(cellVal);
     if(cellVal == 0) {
       console.log("Found one:")
       table.rows.item(i).style.background = "royalblue"
     } else if(parseInt(cellVal) > 24) {
        table.rows.item(i).style.background = "red"
     } else{
      console.log("not here")
     }
 }
}
