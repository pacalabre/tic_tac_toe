
//function toggleTurn() {
var counter = true;

  function changeCounter() {
    if (counter === true) {
      counter = false;
    } else if ( counter === false) {
      counter = true;
    }
  }

  //changeCounter();
  //console.log(counter);
//}

document.getElementById('position1').addEventListener("click", function(){
  console.log("click");
  //toggleTurn();
  changeCounter();
  console.log(counter);
  document.getElementById('posOneText').innerHTML="x";
})
