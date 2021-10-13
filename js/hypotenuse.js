let side1 = document.getElementById('side1');
let side2 = document.getElementById('side2');
let msg = document.getElementById('msg');

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  msg.innerText = '';

  s1 = Number(side1.value);
  s2 = Number(side2.value);

  if (side1.value == '' || side2.value == '') {
    msg.innerText = 'Please fill in all the fields';
  } else if (s1 <= 0 || s2 <= 0) {
    msg.innerText = 'Invalid input';
  } else {
    let ans = Math.sqrt(calcSquare(side1.value) + calcSquare(side2.value));
    ans = ans.toFixed(2);
    msg.innerText = `The length of the hypotenuse is ${ans} cm`;
  }
});

function calcSquare(num) {
  return Math.pow(num, 2);
}
