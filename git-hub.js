const canvas = document.getElementById('avatarCanvas');
const ctx = canvas.getContext('2d');
const squareSize = 50;

// Het patroon van de avatar
const pattern = [
    [0, 2, 2, 0],
    [0, 0, 0, 0],
    [0, 2, 2, 0],
    [2, 0, 0, 2]
];

const colors = ['#000000', '#FFFFFF', '#D19963']; // 0 = zwart, 1 = wit, 2 = oranje

// Functie om een vierkant te tekenen
function drawSquare(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

// Functie om de avatar te tekenen
function drawAvatar() {
    const offsetX = (canvas.width - (pattern[0].length * squareSize)) / 2;
    const offsetY = (canvas.height - (pattern.length * squareSize)) / 2;
    
    for (let row = 0; row < pattern.length; row++) {
        for (let col = 0; col < pattern[row].length; col++) {
            const colorIndex = pattern[row][col];
            drawSquare(offsetX + col * squareSize, offsetY + row * squareSize, squareSize, colors[colorIndex]);
        }
    }
}

drawAvatar();
