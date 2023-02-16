class Person {
    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, lastname, age, courses) {
        super(name, lastname, age);
        this.courses = courses;
    }
}

const personOne = new Person('Pedro', 'Fernandez', 27);
console.log(personOne);

const studentOne = new Student('Maria', 'Ramirez', 29, ['Calculus', 'Statistics', 'Physics', 'Algebra']);
console.log(studentOne);