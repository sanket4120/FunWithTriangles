let angle1 = document.getElementById('angle1');
let angle2 = document.getElementById('angle2');
let angle3 = document.getElementById('angle3');
let msg = document.getElementById('msg');

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();
  msg.innerText = '';
  let ang1 = parseFloat(angle1.value);
  let ang2 = parseFloat(angle2.value);
  let ang3 = parseFloat(angle3.value);
  if (ang1 + ang2 + ang3 == 180) {
    msg.innerText = 'Yayy, the angles form a triangle';
  } else {
    msg.innerText = 'Oh Oh!, the angles do not form a triangle';
  }
});
