function College(name) {
    let teachers = [];
    this.name = name;

    this.getTeachers = function() {
        return teachers;
    }

    this.addTeacher = function(teacher) {
        teachers.push(teacher);
    }
}

const collegeOne = new College('UIS');

collegeOne.addTeacher({name: 'Carlos'});

console.log(collegeOne.getTeachers());



//Another way
/* class College{
    constructor(name) {
        this.name = name;
    }

    #teachers = [];

    getTeachers() {
        return this.#teachers;
    }

    addTeacher(teacher) {
        this.#teachers.push(teacher);
    }
}

const collegeOne = new College('UPTC');

collegeOne.addTeacher({name: 'Freddy'});

console.log(collegeOne.getTeachers()); */