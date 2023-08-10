const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const textRed = document.getElementById('text-red');
const textGreen = document.getElementById('text-green');
const textBlue = document.getElementById('text-blue');

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

textRed.innerText = red;
textGreen.innerText = green;
textBlue.innerText = blue;

function updateColor (r, g, b) {
    const colorRGB = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = colorRGB;
}


inputRed.addEventListener('change', (e) => {
    red = e.target.value;
    textRed.textContent = red;
    updateColor(red, green, blue);

})

inputGreen.addEventListener('change', (e) => {
    green = e.target.value;
    textGreen.textContent = green;
    updateColor(red, green, blue);

})

inputBlue.addEventListener('change', (e) => {
    blue = e.target.value;
    textBlue.textContent = blue;
    updateColor(red, green, blue);

})
