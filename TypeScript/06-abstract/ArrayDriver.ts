 import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rect } from "./Rect";

let myCircle = new Circle(10, 15, 20);
let myRect = new Rect(0, 0, 3, 7);

//declare an array of shapes
let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRect);

for (let tempShape of theShapes){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea() + "\n");
}