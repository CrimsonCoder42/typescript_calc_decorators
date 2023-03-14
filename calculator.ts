// Define a class called Calculator with a constructor that initializes two private properties, num1 and num2, to 0.

class Calculator {
    private num1: number = 0;
    private num2: number = 0;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    @log
    add(num1: number, num2: number) {
        return num1 + num2;
    }

    @log
    subtract(num1: number, num2: number) {
        return num1 - num2;
    }

    @log
    multiply(num1: number, num2: number) {
        return num1 * num2;
    }

    @log
    divide(num1: number, num2: number) {
        return num1 / num2;
    }
}

function log(target: any, key: string, descriptor: any) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    const result = original.apply(this, args);
    console.log(`The result of ${key} is ${result}`);
    return result;
  };
  return descriptor;
}