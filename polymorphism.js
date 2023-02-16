class Person {
    constructor(name = 'no name', lastname = 'no last name', age = 'no age'){ //Overloading
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    getData() {
        return `Full name: ${this.name} ${this.lastname}, Age: ${this.age}`;
    }

    showData() {
        return this.getData();
    }
}

class Employee extends Person {
    constructor(name, lastname, age, position){
        super(name, lastname, age);
        this.position = position;
    }

    getData() {
        return `${super.getData()}, Position: ${this.position}`
    }
}

const personOne = new Person('Alejandra', 'Romero', 25);

const employeeOne = new Employee('Astrid', 'Carvajal', 28, 'Product Owner');

console.log(personOne.showData());
console.log(employeeOne.showData());



//Subtype Polymorphism
function getFullName(person) {
    console.log(`${person.name} ${person.lastname}`);
}
getFullName(personOne);
getFullName(employeeOne);



//Parametric Polymorphism
class List {
    constructor(){
        this.items = [];
    }
    
    stack(some = 0) { //Overloading
        this.items.push(some);
    }
}

const listOne = new List();
listOne.stack('hello world');

const listTwo = new List();
listTwo.stack(15);

console.log(listOne);
console.log(listTwo);