const fs = require('fs');

function generateSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;

  let shapeSVG = '';

  switch (shape) {
    case 'circle':
      shapeSVG = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
      break;

    case 'triangle':
      shapeSVG = `<polygon points="100,0 200,200 0,200" fill="${shapeColor}" />`;
      break;

    case 'square':
      shapeSVG = `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
      break;

    default:
      console.error('Invalid shape:', shape);
      return;
  }

  textX = 150;
  textY = 130;
  fontSize = 45;

  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="${textX}" y="${textY}" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-family="Blippo, fantasy" font-size="${fontSize}px">${text}</text>
</svg>`;

  fs.writeFileSync('logo.svg', svgContent);
}

module.exports = { generateSVG };
