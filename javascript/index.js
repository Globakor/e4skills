
     
// let department = 'Programming';
// typeof(Programming)
// console.log(department)
// console.log(typeof(department))

// //let age = 1;
//age = 2;
//typeof(1);
//console.log(age)

// let sum= 200 + 500;
// console.log(sum);

// let multi= 400 * 5;
// console.log(multi)

// let div= 100 / 2;
// console.log(div)

// let name ="Gloria";
// console.log(name)


// let y = 2000;
// console.log(y)

// y *= 50
// console.log(y);

// y += 200
// console.log(y);

// //  check if age is less than 18, "you are not eligible" and if the age is between 18 and 50 "you are eligible"
// but if age is greater than 50 "you are not eligible"

// let age = 19;

// if (age < 18) {

// console.log("You are underage, so therefore you are not eligible");

// } else if (age >= 18 && age <= 50) {
//     console.log("You are eligible");

// } else {
//     console.log("You are above our standard so you are not eligible")
// }
    

// // switch statement 
//  let day = 7;
//  switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesdady");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
   // case 5:
    //     console.log("Friday");
    //     break;
    // case 6:
    //     console.log("Saturday");
    //     break;
    // case 7:
    //     console.log("Sunday");
    //     break;
    //     default: 
    //       console.log("Invalid day");
          
    // }
     
// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// for (let i =0; i < 5; ++i ) {
//     console.log(i);

// }

//let i = 0;
//while(i < 5) {
//    console.log(i);
//}

// Functions
// function greet() {
//     for (let i = 0; i < 5; ++i)
//     console.log("Hello! World");
// }
// greet();

// write a function that performs an addition with the parameter a, b and logs the result.
// your argument are 10,5


// function addAndlog(a,b) {
//     console.log("The result is", a + b)
// }
//   addAndlog(10,5)

//   const addition = function addAndLog(a, b) {
//     let result = a + b;
//     return result;
//   }
//   console.log(addition(10, 5))


//   // function 2 
// //   const greeting = () => {
// //     let message = 'Hello';
// //     console.log(message);
// //   }

// //   greeting(); 

 function calculateArea(width, height) {
   console.log(width * height);
 }

 calculateArea(20, 35) 

// Assignment 
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
    { title: "1984", author: "George Orwell", yearPublished: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 }
  ];

  function addBook(newBook) {
    books.push(newBook);
  }
  
// Adding new books
addBook({ title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 });
addBook({ title: "Moby Dick", author: "Herman Melville", yearPublished: 1851 });

 console.log(books);



// Arrays 
// let students = ["Christy", "Gloria", "Lois", "Prince", "Sly"];
// console.log(students [students.length - 1]);

//let courses = new Array("maths", "english", "science", "social studies");
//console.log(courses);



// let password = document.getElementById('confirmPassword');
// console.log(password);

// const list = document.getElementsByClassName('form-group');
// console.log(list );

// const button = document.querySelector('button');
// console.log('button');

//change text 'Login' to 'signin'

// button.innerText = 'Sign';

// const title = document.querySelector('h2');
// title.innerHTML = "<strong>Let's get started</strong>";
// console.log(title);

// const div = document.getElementById('div-1');
// console.log(div);

// const Gloria = document.getElementsByClassName('form-group');
// console.log(Gloria);