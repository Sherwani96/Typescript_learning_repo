// type assertions

const greeting: unknown = 'hello';
// type assertion
const greet = greeting as string;
const n = greet + 2;
console.log(n) // it prints hello2


// below simply we use types assertion and can access type methods simultaneously
const new_val = (greeting as number).toString();

interface Employee {
    positon(): string;
}

class Manager implements Employee {
    positon(): string {
        return 'Manager';
    };
    sayHello(): void {
        console.log('hello');
    }
}

const ali: Employee = new Manager();
ali.sayHello();
//  in the above if we refer ali or variable to type Employee it will only give us the positon method
ali.positon();
// we can only access this method above
