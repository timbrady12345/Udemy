import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rect } from "./Rect";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(10, 15, 20);
console.log(myCircle.getInfo());

let myRect = new Rect(0, 0, 3, 7);
console.log(myRect.getInfo());