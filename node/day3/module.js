var User = /** @class */ (function () {
    function User() {
        this.name = "Mahesh";
    }
    User.prototype.getFullName = function () {
        return this.name;
    };
    return User;
}());
var go = new User();
console.log(go.getFullName());
