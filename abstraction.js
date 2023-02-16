class Employee {
    constructor(name, lastname, id){
        this.name = name;
        this.lastname = lastname;
        this.id = id;
    }

    salary() {}
}

class PermanentEmployee extends Employee {
    constructor(name, lastname, id, daysWorked,dailyWage){
        super(name, lastname, id);
        this.daysWorked = daysWorked;
        this.dailyWage = dailyWage;
    }

    salary() {
        return `${this.daysWorked * this.dailyWage} usd`;
    }
}

class HourlyEmployee extends Employee {
    constructor(name, lastname, id, hoursWorked, hourlyWage){
        super(name, lastname, id);
        this.hoursWorked = hoursWorked;
        this.hourlyWage = hourlyWage;
    }

    salary() {
        return `${this.hoursWorked * this.hourlyWage} usd`
    }
}

const permanentEmployeeOne = new PermanentEmployee('John', 'Martinez', '1095928628', 30, 150);
console.log(permanentEmployeeOne);
console.log(permanentEmployeeOne.salary());

const hourlyEmployeeOne = new HourlyEmployee('Karol', 'Castro', '1098752623', 8, 20);
console.log(hourlyEmployeeOne);
console.log(hourlyEmployeeOne.salary());