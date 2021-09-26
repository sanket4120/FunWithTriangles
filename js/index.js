let angle1 = document.getElementById('angle1');
let angle2 = document.getElementById('angle2');
let angle3 = document.getElementById('angle3');
let msg = document.getElementById('msg');

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();
  msg.innerText = '';

  if (angle1.value == '' || angle2.value == '' || angle3.value == '') {
    msg.innerText = 'Please fill in all the fields';
  } else {
    if (
      Number(angle1.value) + Number(angle2.value) + Number(angle3.value) ==
      180
    ) {
      msg.innerText = 'Yayy, the angles form a triangle';
    } else {
      msg.innerText = 'Oh Oh!, the angles do not form a triangle';
    }
  }
});
