var Bustomer = /** @class */ (function () {
    function Bustomer() {
    }
    Object.defineProperty(Bustomer.prototype, "firstName", {
        get: function () {
            return this._first;
        },
        set: function (value) {
            this._first = value;
        },
        enumerable: false,
        configurable: true
    });
    return Bustomer;
}());
