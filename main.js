

var counter = true;

  function toggleTurn() {
    if (counter === true) {
      counter = false;
    } else if ( counter === false) {
      counter = true;
    }
  }


//Position 1
document.getElementById('position1').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);

  document.getElementById('posOneText').innerHTML="x";
  } else {
  document.getElementById('posOneText').innerHTML="O";
  }
  toggleTurn();
})

//Position 2
document.getElementById('position2').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posTwoText').innerHTML="x";
  } else {
  document.getElementById('posTwoText').innerHTML="O";
  }
  toggleTurn();
})

//Position 3
document.getElementById('position3').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posThreeText').innerHTML="x";
  } else {
  document.getElementById('posThreeText').innerHTML="O";
  }
  toggleTurn();
})

//Position 4
document.getElementById('position4').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posFourText').innerHTML="x";
  } else {
  document.getElementById('posFourText').innerHTML="O";
  }
  toggleTurn();
})

//Position 5
document.getElementById('position5').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posFiveText').innerHTML="x";
  } else {
  document.getElementById('posFiveText').innerHTML="O";
  }
  toggleTurn();
})

//Position 6
document.getElementById('position6').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posSixText').innerHTML="x";
  } else {
  document.getElementById('posSixText').innerHTML="O";
  }
  toggleTurn();
})

//Position 7
document.getElementById('position7').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posSevenText').innerHTML="x";
  } else {
  document.getElementById('posSevenText').innerHTML="O";
  }
  toggleTurn();
})

//Position 8
document.getElementById('position8').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posEightText').innerHTML="x";
  } else {
  document.getElementById('posEightText').innerHTML="O";
  }
  toggleTurn();
})

//Position 9
document.getElementById('position9').addEventListener("click", function(){
  if (counter === true) {
  console.log(counter);
  document.getElementById('posNineText').innerHTML="x";
  } else {
  document.getElementById('posNineText').innerHTML="O";
  }
  toggleTurn();
})
