let form = document.getElementById('quiz-form');
let msg = document.getElementById('msg');
const correctOptions = ['90', 'right angled'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  let index = 0;
  const formResults = new FormData(form);
  for (let value of formResults.values()) {
    if (value === correctOptions[index]) {
      score++;
    }
    index++;
  }
  msg.innerText = `Your score is ${score}`;
});
