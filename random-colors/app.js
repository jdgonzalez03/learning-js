
const btn = document.getElementById('btn-color');
const color = document.getElementById('color');


function generateRandomColorHex(){
    let digits = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i<6; i++){
        let randomIndex = Math.floor(Math.random()*16);
        colorHex += digits[randomIndex];
    }

    return colorHex;
}

btn.addEventListener('click', () => {
    let randomColor = generateRandomColorHex();
    color.textContent = randomColor;

    document.body.style.backgroundColor = randomColor;
});

