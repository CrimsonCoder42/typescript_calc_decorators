var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.num1 = 0;
        this.num2 = 0;
        this.num1 = num1;
        this.num2 = num2;
    }
    Calculator.prototype.add = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.subtract = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.prototype.divide = function (num1, num2) {
        return num1 / num2;
    };
    __decorate([
        log
    ], Calculator.prototype, "add");
    __decorate([
        log
    ], Calculator.prototype, "subtract");
    __decorate([
        log
    ], Calculator.prototype, "multiply");
    __decorate([
        log
    ], Calculator.prototype, "divide");
    return Calculator;
}());
function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Method ".concat(propertyKey, " called with arguments: ").concat(JSON.stringify(args)));
        var result = originalMethod.apply(this, args);
        console.log("Method ".concat(propertyKey, " returned: ").concat(result));
        return result;
    };
    return descriptor;
}
