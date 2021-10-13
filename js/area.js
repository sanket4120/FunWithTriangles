let base = document.getElementById('base');
let height = document.getElementById('height');
let msg = document.getElementById('msg');

document.forms[0].addEventListener('submit', (e) => {
  e.preventDefault();

  msg.innerText = '';

  let b = Number(base.value);
  let h = Number(height.value);

  if (base.value == '' || height.value == '') {
    msg.innerText = 'Please fill in all the fields';
  } else if (b <= 0 || h <= 0) {
    msg.innerText = 'Invalid input';
  } else {
    let ans = (base.value * height.value) / 2;
    ans = ans.toFixed(2);
    msg.innerText = `The area of the triangle is ${ans} cm²`;
  }
});
