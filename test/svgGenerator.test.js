const { generateSVG } = require('../src/svgGenerator');
const fs = require('fs');

describe('SVG Generator', () => {
  it('generates SVG correctly', () => {
    const userInput = {
      text: 'ABC',
      textColor: '#ff0000',
      shape: 'circle',
      shapeColor: '#0000ff',
    };

    generateSVG(userInput);

    const svgContent = fs.readFileSync('logo.svg', 'utf-8');
    expect(svgContent).toContain('<svg');
    expect(svgContent).toContain('<text');
    expect(svgContent).toContain('<circle');
    expect(svgContent).toContain('ABC');
    expect(svgContent).toContain('#ff0000');
    expect(svgContent).toContain('#0000ff');

    fs.unlinkSync('logo.svg');
  });
});
