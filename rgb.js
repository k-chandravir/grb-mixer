const redSlider = document.getElementById('red-slider');
const greenSlider = document.getElementById('green-slider');
const blueSlider = document.getElementById('blue-slider');
const colorPreview = document.querySelector('.color-preview');
const colorCode = document.getElementById('color-code');
const redIndicator = document.getElementById('red-indicator');
const greenIndicator = document.getElementById('green-indicator');
const blueIndicator = document.getElementById('blue-indicator');

console.log(redSlider)
console.log(greenSlider)
console.log(blueSlider)

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;
  console.log(redValue)
  console.log(greenValue)
  const colorString = `rgb(${redValue},${greenValue},${blueValue})`;
//   const colorString = 'rgb('+redValue+','+greenValue+','+blueValue+')';
  colorPreview.style.backgroundColor = colorString;
  colorCode.innerText = colorString;

  redIndicator.style.backgroundColor = `rgb(${redValue},0,0)`;
  greenIndicator.style.backgroundColor = `rgb(0,${greenValue},0)`;
  blueIndicator.style.backgroundColor = `rgb(0,0,${blueValue})`;
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
