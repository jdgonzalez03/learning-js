//Seleccionando elementos del DOM

const btn = document.getElementById('btn-color');
const color = document.getElementById('color');

//Generate random color hex

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
    //Update text.
    color.textContent = randomColor;

    //Update background color
    document.body.style.backgroundColor = randomColor;
});

