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