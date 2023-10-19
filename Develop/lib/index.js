const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./shape');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape for the logo:',
      choices: ['circle', 'square', 'triangle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter a color for the logo:',
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo:',
    },
  ])
  .then((answers) => {
    const { shape, color, text } = answers;
    const svgContent = generateSVG(shape, color, text);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Logo generated and saved as logo.svg');

    // Testing code for different shapes
    const circle = new Circle();
    circle.setColor('blue');
    console.log('Circle SVG:', circle.render());

    const triangle = new Triangle();
    triangle.setColor('green');
    console.log('Triangle SVG:', triangle.render());

    const square = new Square();
    square.setColor('purple');
    console.log('Square SVG:', square.render());
  })
  .catch((error) => {
    console.error(error);
  });

function generateSVG(shape, color, text) {
  let svgShape;
  switch (shape) {
    case 'circle':
      svgShape = `<circle cx="150" cy="150" r="80" fill="${color}" />`;
      break;
    case 'square':
      svgShape = `<rect x="70" y="70" width="160" height="160" fill="${color}" />`;
      break;
    case 'triangle':
      svgShape = `<polygon points="150,30 30,170 270,170" fill="${color}" />`;
      break;
    default:
      svgShape = '';
  }

  return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">${svgShape}<text x="150" y="250" font-size="60" text-anchor="middle" fill="black">${text}</text></svg>`;
}
