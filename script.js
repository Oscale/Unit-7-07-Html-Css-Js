document.getElementById('submit').addEventListener('click', CalCulate)

let n1 = 0
let n2 = 0
let times = 0
let anwser1 = 0

function CalCulate () {
  n1 = document.getElementById('number1').value
  n2 = document.getElementById('number2').value

  n1 = parseFloat(n1)
  n2 = parseFloat(n2)

  anwser1 = 0

  if ((n1 >= 0) && (n2 >=0)) { 
    for (times = 0; times < n1; times++) {
      anwser1 = n2 + anwser1 
    } 
  } else if ((n1 < 0) && (n2 < 0)) {
    n1 = Math.abs(n1)
    n2 = Math.abs(n2)

    for (times = 0; times < n1; times++) {
      anwser1 = n2 + anwser1 
    } 
  } else {
    n1 = Math.abs(n1)
    n2 = Math.abs(n2)

    for (times = 0; times < n1; times++) {
      anwser1 = n2 + anwser1 
    } 
    anwser1 = 0 - anwser1
  }
 document.getElementById('result').innerHTML = anwser1
}
