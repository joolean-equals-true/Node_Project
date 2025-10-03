class  Course{
  constructor(Dept, Course_Number , level ,hours, name, description){
    this.Dept = Dept;
    this.Course_Number = Course_Number;
    this.level = level;
    this.hours = hours;
    this.name = name;
    this.description = description
  }
}

module.exports = Course;