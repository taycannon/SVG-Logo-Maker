// Example svg file(s) created with the app
// Folder for classes or functions
// Exports `Triangle`, `Circle`, and `Square` classes
// Jest tests for shapes
// Additional files and tests
// Indicates which folders and files Git should ignore
// Runs the application using imports from lib/
// App description, link to video, setup and usage instructions 

class Shape{
  constructor(){
      this.color=''
  }
  setColor(color){
      this.color=(color);
  }
}
// Defines a Circle that extends the shape
class Circle extends Shape{
  render(){
      return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
  }
}
// Defines a Square that extends the shape
class Square extends Shape{
  render(){
      return `<rect x="50" height="200" width="200" fill="${this.color}">`
  }
}
// Defines a Triangle that extends the shape 
class Triangle extends Shape{
  render(){
      return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
  }
};

module.exports = {Circle, Square, Triangle}
