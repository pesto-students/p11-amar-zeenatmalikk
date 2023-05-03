class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Nationality: ${this.nationality}`;
  }
}
class Student extends Person {
    constructor(name, age, gender, nationality, studentId) {
      super(name, age, gender, nationality);
      this.studentId = studentId;
    }
  
    study(subject) {
      return `${this.name} is studying ${subject}.`;
    }
  }
  

// instances of Person
const person1 = new Person("John Doe", 25, "Male", "American");
const person2 = new Person("Jane Smith", 30, "Female", "British");
//Call the introduce method on each instance and print the returned string
console.log(person1.introduce());
console.log(person2.introduce());
//instances of students
const student1 = new Student("John Doe", 25, "Male", "American", "12345");
const student2 = new Student("Jane Smith", 30, "Female", "British", "67890");
const student3 = new Student('Jeh mughal', 25, 'Male', 'American', '12345');
console.log(student3.study('Mathematics'));
console.log(student1.introduce());

