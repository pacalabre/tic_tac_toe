

var counter = true;

  function toggleTurn() {
    if (counter === true) {
      counter = false;
    } else if ( counter === false) {
      counter = true;
    }
  }



document.getElementById('position1').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);

  document.getElementById('posOneText').innerHTML="x";
  } else {
  document.getElementById('posOneText').innerHTML="O";
  }
  toggleTurn();
})

document.getElementById('position2').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posTwoText').innerHTML="x";
  } else {
  document.getElementById('posTwoText').innerHTML="O";
  }
  toggleTurn();
})
