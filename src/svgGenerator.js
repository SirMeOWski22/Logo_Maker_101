function generateSVG(userInput) {
  const { text, textColor, shape, shapeColor } = userInput;
  const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${shapeColor}"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="${textColor}">${text}</text>
  </svg>`;

  fs.writeFileSync('logo.svg', svgContent);
}

module.exports = { generateSVG };
