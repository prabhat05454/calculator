let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function squareRoot() {
  try {
    let result = Math.sqrt(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function exponentiation() {
  try {
    let result = Math.pow(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function sin() {
  try {
    let result = Math.sin(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function cos() {
  try {
    let result = Math.cos(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}

function tan() {
  try {
    let result = Math.tan(eval(display.value));
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
