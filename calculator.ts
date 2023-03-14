// Define a Calculator class with two private properties, https://www.typescriptlang.org/docs/handbook/classes.html
class Calculator {
    private num1: number = 0;
    private num2: number = 0;

    // Constructor that initializes num1 and num2 https://www.typescriptlang.org/docs/handbook/2/classes.html
    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // https://medium.com/geekculture/how-to-create-a-custom-typescript-decorator-c4a1998e1b5e#:~:text=TypeScript%20decorators%20are%20a%20feature,element%20is%20accessed%20or%20modified.
    @log
    add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // https://medium.com/geekculture/how-to-create-a-custom-typescript-decorator-c4a1998e1b5e#:~:text=TypeScript%20decorators%20are%20a%20feature,element%20is%20accessed%20or%20modified.
    @log
    subtract(num1: number, num2: number): number {
        return num1 - num2;
    }

    // https://medium.com/geekculture/how-to-create-a-custom-typescript-decorator-c4a1998e1b5e#:~:text=TypeScript%20decorators%20are%20a%20feature,element%20is%20accessed%20or%20modified.
    @log
    multiply(num1: number, num2: number): number {
        return num1 * num2;
    }

    // https://medium.com/geekculture/how-to-create-a-custom-typescript-decorator-c4a1998e1b5e#:~:text=TypeScript%20decorators%20are%20a%20feature,element%20is%20accessed%20or%20modified.
    @log
    divide(num1: number, num2: number): number {
        return num1 / num2;
    }
}

// log decorator https://developapa.com/method-time-log/ <-- very good example
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Method ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyKey} returned: ${result}`);
        return result;
    };

    return descriptor;
}