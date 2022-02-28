"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rect_1 = require("./Rect");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(10, 15, 20);
var myRect = new Rect_1.Rect(0, 0, 3, 7);
//declare an array of shapes
var theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRect);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
}
