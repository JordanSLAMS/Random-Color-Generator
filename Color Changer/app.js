
function getRandomHexColor() {
    const hexCharacters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function getRandomSimpleColor() {
    const simpleColors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "teal", "brown"];
    return simpleColors[Math.floor(Math.random() * simpleColors.length)];
}


function changeBackgroundColor() {
    let color = Math.random() < 0.5 ? getRandomSimpleColor() : getRandomHexColor(); // 50% chance to get either hex or simple color
    document.body.style.backgroundColor = color;
    document.querySelector('.color').textContent = color; // Update the text showing the background color
}


const btn = document.getElementById('btn');
btn.addEventListener('click', changeBackgroundColor);
