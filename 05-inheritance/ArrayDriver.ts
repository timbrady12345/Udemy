import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rect } from "./Rect";

let myShape = new Shape(10, 15);
let myCircle = new Circle(10, 15, 20);
let myRect = new Rect(0, 0, 3, 7);

//declare an array of shapes
let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRect);

for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
}