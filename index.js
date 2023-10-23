const main = document.querySelector('main');
const changeColorButton = document.querySelector('.container button');
const currentColorDisplayed = document.querySelector('.color');

function generateRandomNumber(){
  let num = Math.floor(Math.random() * 256);
  return num;
}

function generateRandomRGBColor(){
  return `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`;
}

function changeCurrentColorDisplay(newColor){
  currentColorDisplayed.textContent = newColor;
}

function randomizeBackgroundColor(){
  const randomColor = generateRandomRGBColor();
  changeCurrentColorDisplay(randomColor);
  main.style.backgroundColor = randomColor;
}

changeColorButton.addEventListener('click', randomizeBackgroundColor);