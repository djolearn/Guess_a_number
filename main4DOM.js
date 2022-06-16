// promenljive
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//funkcije
const displayMessage = function (mess) {
  document.querySelector('.message').textContent = mess;
};
const displaySecret = function (secNum) {
  document.querySelector('.number').textContent = secNum;
};
document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  //   ako nije unet broj
  if (!guess) {
    displayMessage('You did not choose your number?');
    // ako je tacan broj
  } else if (guess === secretNumber) {
    displaySecret(secretNumber);
    displayMessage('You did it bro!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
    // ako je broj razlicit
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('You suck');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displaySecret('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
