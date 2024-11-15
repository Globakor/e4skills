let students = [ 
   // {Name: "Juliet Asamoah", Age:21, Grade: "A" },
   // {Name: "Abigail Yendoh", Age:22, Grade: "C" },
   // {Name: "Rasheeda Mohammed", Age:23, Grade: "B" },
   // {Name: "Albert Akoto Mensah", Age:20, Grade:"B" },

   // next time do not use the capitalization to start a key. (e.g. name and not Name)
   { name: "Juliet Asamoah", age: 21, grade: "A" },
   { name: "Abigail Yendoh", age: 22, grade: "C" },
   { name: "Rasheeda Mohammed", age: 23, grade: "B" },
   { name: "Albert Akoto Mensah", age: 20, grade: "B" },
];
  
console.log(students);

// Adding students to the array
// let student1 =  {Name: "Alice Nyarko", Age:16, Grade: "A" } ;
// let student2 =  { Name: "Bob Edward", Age:23, Grade: "B" } ;
// let student3 =  {Name: "Charlie Arthur", Age:17, Grade: "C" } ;

// adding objects to an array objects, you can put them together and push together
const newStudents = [
   { name: "Alice Nyarko", age: 16, grade: "A" },
   { name: "Bob Edward", age: 23, grade: "B" },
   { name: "Charlie Arthur", age: 17, grade: "C" },
];

// students.push(student1);
// students.push(student2);
// students.push(student3);

// with '...' it's called array destructuring
students.push(...newStudents);

console.log(students);

  
console.log(students);

 // Function to display all students' information
students.forEach((student) => { 
   console.log(students);
} )



     