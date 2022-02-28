"use strict";
var Dustomer = /** @class */ (function () {
    //constructors
    function Dustomer(theFirst, theLast) {
        this._first = theFirst;
        this._last = theLast;
    }
    Object.defineProperty(Dustomer.prototype, "firstname", {
        get: function () {
            return this._first;
        },
        set: function (value) {
            this._first = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dustomer.prototype, "lastname", {
        get: function () {
            return this._last;
        },
        set: function (value) {
            this._last = value;
        },
        enumerable: false,
        configurable: true
    });
    return Dustomer;
}());
var myDustomer = new Dustomer("Tim", "Brady");
console.log(myDustomer.firstname);
console.log(myDustomer.lastname);
