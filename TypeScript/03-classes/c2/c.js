var Customer = /** @class */ (function () {
    //constructors
    function Customer(theFirst, theLast) {
        this._first = theFirst;
        this._last = theLast;
    }
    Object.defineProperty(Customer.prototype, "firstname", {
        get: function () {
            return this._first;
        },
        set: function (value) {
            this._first = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastname", {
        get: function () {
            return this._last;
        },
        set: function (value) {
            this._last = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Tim", "Brady");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
