var Customer = /** @class */ (function () {
    //constructors
    function Customer(theFirst, theLast) {
        this.firstname = theFirst;
        this.lastname = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstname;
    };
    Customer.prototype.getLastName = function () {
        return this.lastname;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstname = theFirst;
    };
    Customer.prototype.setLastName = function (theLast) {
        this.lastname = theLast;
    };
    return Customer;
}());
var myCustomer = new Customer("Tim", "Brady");
console.log(myCustomer.getFirstName());
console.log(myCustomer.getLastName());
