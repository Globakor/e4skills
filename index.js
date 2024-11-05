
     
let department = 'Programming';
typeof(Programming)
console.log(department)
console.log(typeof(department))

//let age = 1;
//age = 2;
//typeof(1);
//console.log(age)

let sum= 200 + 500;
console.log(sum);

let multi= 400 * 5;
console.log(multi)

let div= 100 / 2;
console.log(div)

let name ="Gloria";
console.log(name)


let y = 2000;
console.log(y)

y *= 50
console.log(y);

y += 200
console.log(y);

//  check if age is less than 18, "you are not eligible" and if the age is between 18 and 50 "you are eligible"
// but if age is greater than 50 "you are not eligible"

let age = 19;

if (age < 18) {

console.log("You are underage, so therefore you are not eligible");

} else if (age >= 18 && age <= 50) {
    console.log("You are eligible");

} else {
    console.log("You are above our standard so you are not eligible")
}
    

// switch statement 
 let day = 7;
 switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesdady");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
        default: 
          console.log("Invalid day");
          break;
    }
     
for (let i = 0; i < 5; i++){
    console.log(i);
}

for (let i =0; i < 5; ++i ) {
    console.log(i);

}

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


function addAndlog(a,b) {
    console.log("The result is", a + b)
}
  addAndlog(10,5)

  const addition = function addAndLog(a, b) {
    let result = a + b;
    return result;
  }
  console.log(addition(10, 5))


  // function 2 
  const greeting = () => {
    let message = 'Hello';
    console.log(message);
  }

  greeting(); 

  function calculateArea(width, height) {
    console.log(width * height);
  }

  calculateArea(20, 35)