const main = document.querySelector('main');
const changeColorButton = document.querySelector('.container button');
const currentColorDisplayed = document.querySelector('.color');
const colorOptions = document.querySelector('.nav-links');
const simpleOption = colorOptions.querySelector('li:nth-child(1)');
const hexOption = colorOptions.querySelector('li:nth-child(2)');
let isHexSelected = false;

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

function randomizeBackgroundColor(randomize){
  // randomize is a function that will be passed
  const randomColor = randomize();
  changeCurrentColorDisplay(randomColor);
  main.style.backgroundColor = randomColor;
}

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function generateRandomHexColor(){
  return rgbToHex(generateRandomNumber(),generateRandomNumber(),generateRandomNumber());
}

changeColorButton.addEventListener('click', function(){
  if (!isHexSelected) {
    randomizeBackgroundColor(generateRandomRGBColor);
  } else {
    randomizeBackgroundColor(generateRandomHexColor);
  }
});

simpleOption.addEventListener('click', function(){
  changeCurrentColorDisplay('rgb(?,?,?)');
  isHexSelected = false;
});

hexOption.addEventListener('click', function(){
  changeCurrentColorDisplay('#??????');
  isHexSelected = true;
});