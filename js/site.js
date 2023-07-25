const getValues = () => {
  let userString = document.getElementById('user-string').value;

  let revString = reverseString(userString);

  displayString(revString);

}

const reverseString = (input) => {

  let revString = '';

  for (let i = input.length - 1; i >= 0; i--) {
    let letter = input[i];
    revString += letter;
  }

  return revString;

}

const displayString = (output) => {

  document.getElementById('results').textContent = output;
  let alertBox = document.getElementById('alert');
  alertBox.classList.remove('invisible');

}