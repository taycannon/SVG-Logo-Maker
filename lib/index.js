const { writeFile } = require('fs/promises')
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes.js')
const SVG = require('./svg.js')

inquirer
  .prompt([
    {
      type: 'text',
      message: 'Please enter 3 characters:',
      name: 'text',
      
    },
    {
      type: 'input',
      message: 'Please enter a text color',
      name: 'textcolor',
    },
    {
      type: 'list',
      message: 'Please choose a shape:',
      choices: ["Square", "Circle", "Triangle"],
      name: 'shape',
    },
    {
      type: 'input',
      message: 'Please enter a color for the shape:',
      name: 'shapecolor',
    },
  ])
  .then(({ text, textcolor, shape, shapecolor }) => {
    let shapeChoice;
    switch (shape) {
      case "Circle":
        shapeChoice = new Circle();

        break;

      case "Square":
        shapeChoice = new Square();


        break;
      case "Triangle":
        shapeChoice = new Triangle();
    }
    shapeChoice.setColor(shapecolor);

    const svg = new SVG()
    svg.setText(text, textcolor);
    svg.setShape(shapeChoice);
    return writeFile('logo.svg', svg.render()).then(()=>console.log("Generated logo.svg"))
    
      .catch((error) => {
        console.log(error)
      });

  }

  );