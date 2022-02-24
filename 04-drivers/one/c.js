"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dustomer = void 0;
var Dustomer = /** @class */ (function () {
    function Dustomer(_first, _last) {
        this._first = _first;
        this._last = _last;
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
exports.Dustomer = Dustomer;
