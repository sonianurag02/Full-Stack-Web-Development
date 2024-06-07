// console.log("Hello World!!")
// console.log("Shraddha")
// let a = 10;
// let b = 5;
// console.log("Sum is:",a+b);

// let pencilPrice = 10;
// let eraserPrice = 5;
// let output = "The total price is : " +  (pencilPrice + eraserPrice) + " Rupees.";
// Template literal
// let output = `The total proce is: ${pencilPrice+eraserPrice} Rupees.`; // backtick (tilde sign)
// console.log(output)

// Arithmetic operators (+, -, *, /, **, %)
// Unary (++, --)
// Assignment (=, +=, -=, *=, /=, %= etc.)
// Comparsion (==, >, >=, <, <=, !=, ===)

// let age = 18;
// console.log(age > 18);

// Conditional statements

// let age = 19;
// if(age >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("can't vote");
// }

// let firstName = "Shraddha";
// if(firstName == "Shraddha"){
//     console.log(`Welcome ${firstName}`);
// }

// let color = "yellow";
// if(color === "red"){
//     console.log(`Stop! light color is ${color}`);
// }
// else if(color === "yellow"){
//     console.log(`Slow Down. light color is ${color}`);
// }
// else if(color === "green"){
//     console.log(`go. light color is ${color}`);
// }
// else{
//     console.log("Can't determine");
// }

// let size = "XL";
// if(size === "XL"){
//     console.log("price is Rs. 250")
// }
// else if(size === "L"){
//     console.log("price is Rs. 200")
// }
// else if(size === "M"){
//     console.log("price is Rs. 100")
// }
// else if(size === "S"){
//     console.log("price is Rs. 50")
// }
// else{
//     console.log("Not available at this size.")
// }

// let marks = 45;
// if(marks >= 33){
//     console.log("Pass");
//     if(marks >= 80){
//         console.log("Grade: O");
//     }
//     else{
//         console.log("Grade: A");
//     }
// }
// else{
//     console.log("Better luck next time!")
// }

// let marks = 85;
// if(marks >= 33 && marks >= 80){
//     console.log("Pass with A+ grade")
// }

// let goodString = "anurag";
// if(goodString[0] === "a" && goodString.length > 3){
//     console.log("Good String.");
// }
// else{
//     console.log("Not a good string");
// }

// let color = "pink";
// switch (color) {
//   case "red":
//     console.log("stop");
//     break;
//   case "yellow":
//     console.log("slow down");
//     break;
//   case "green":
//     console.log("go");
//     break;
//   default:
//     console.log("Broken Light");
// }

// alert("This is a simple alert.");
// console.log("This is a simple message");
// console.error("This is an error message");
// console.warn("This is an warning message");

// let firstName = prompt("Enter your name: ");
// console.log(`First Name: ${firstName}`)

// let firstName = prompt("Enter first name: ");
// let lastName = prompt("Enter last name: ");
// let msg = "Welcome, "+ firstName + " " + lastName + "!"
// console.log(msg);

// let num = 50;
// if (num % 10 == 0) {
//   console.log("Good");
// } else {
//   console.log("Bad");
// }

// let name = prompt("Enter your name: ");
// let age = prompt("Enter your age: ");
// alert(`${name} is ${age} years old.`);

// let Quarter = 1;
// switch (Quarter) {
//   case 1:
//     console.log("Months in Quarter 1: January, February, March");
//     break;
//   case 2:
//     console.log("Months in Quarter 2: April, May, June");
//     break;
//   case 3:
//     console.log("Months in Quarter 3: July, August, September");
//     break;
//   case 4:
//     console.log("Months in Quarter 4: October, November, December");
//     break;
//   default:
//     console.log("You entered wrong quarter umber!");
// }

// let str = "Anurag";
// if((str[0] === 'a' || str[0] === 'A') && (str.length > 5)){
//     console.log("Golden String");
// }
// else{
//     console.log("Not a golden string.");
// }

// let a = 5;
// let b = 10;
// let c = 7;
// if((a > b) && (a > c)){
//     console.log("a is greater");
// }
// else if((b > a) && (b > c)){
//     console.log("b is greater");
// }
// else{
//     console.log("c is greater");
// }

// let num1 = 32;
// let num2 = 47852;
// if(num1 % 10 == num2 % 10){
//     console.log("Both have same last digit.");
// }
// else{
//     console.log("Both have different last digits.");
// }

// let msg = "         Hello          ";
// msg.trim();

// let password = prompt("Set your password");
// let newPass = password.trim();
// console.log(newPass);

// let str = "Random String";
// str.toLowerCase();
// str.toUpperCase();

// let str = "ILoveCoding"
// str.indexOf("Love")

// let msg = "         Hello      ";
// let newMsg = msg.trim();
// console.log("After Trim", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("After upper case", newMsg);
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg)

// let str = "ILoveCoding";
// .slice(starting index, ending index)
// str.slice(1,5);
// str.slice(-1);

// let str = "ILoveCoding";
// str.replace("Love", "Do");

// let str = "Mango";
// str.repeat(3);

// let students = ["anurag", "shraddha", 'sumit'];
// console.log(students);

// let nums = [2,4,6,8];
// let arr = ["hey", 4, 6.7]

// let emptyArray = []

// let fruits = ["apple", "mango", "papaya"];
// fruits[0] = "banana";
// console.log(fruits);

// Array Methods
// Push, pop, unshift, shift
// let cars = ["audi", "bmw", "maruti", "xuv"]
// cars.push("toyota")
// cars.pop()
// cars.unshift("ferrari")
// cars.shift()
// cars.indexOf("bmw");
// cars.includes("xuv") // ot check variable is present in array or not


// let primary = ["red", "yellow", "blue"];
// let secondary = ["orange", "green", "violet"];

// primary.concat(secondary);
// primary.reverse();

// let colors = primary.concat(secondary);
// colors.slice(2,5);

// splice(start, deleteCount, item0...itemN)
// removes/replaces/add elements in place

// colors.splice(0, 1, "yellow")

// colors.sort();

// let start = ['january', 'july', 'march', 'august'];
// start.shift();
// start.splice(1, 0, "june");

// const arr = [1,2,3,4]

// let nums = [[2,4],[3,6],[5,7]]

// let tictactoe = [["X", null, "O"], [null, "X", null], ["O", null, "X"]]

// let arr = [7, 9, 0, -2];
// arr.slice(0, 3);
// arr.slice(1,4);

// str = prompt("Enter a string: ")
// if(str.length == 0){
//     console.log("String is empty");
// }
// else{
//     console.log("String is not empty");
// }

// str = "inIex"
// if(str[2] == str[2].toLowerCase()){
//     console.log("Character is in lowercase.");
// }
// else{
//     console.log("In upper case or wrong character found");
// }

// str = "              Hello!           ";
// str.trim();

// let arr2 = ["hey", "hello"];
// let idx = arr2.indexOf("hello");

// if(idx == -1){
//     console.log("Element not found");
// }
// else{
//     console.log("Element found");
// }


// for(let i = 1; i <= 5; i++){
//     console.log(i);
// } 

// for(let i = 1; i <= 15; i+=2){
//     console.log(i);
// }

// for(let i = 2; i <= 15; i+=2){
//     console.log(i);
// }

// let n = prompt("Enter your number");
// n = parseInt(n);

// for(let i = 1; i <= 10; i++){
//     console.log(n*i);
// }

// for(let i = 1; i <= 3; i++){
//     console.log(`outer loop ${i}`);
//     for(let j = 1; j <= 3; j++){
//         console.log(j);
//     }
// }

// let i = 1;

// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let fav_movie = "Avatar";
// let guess = prompt("Guess my favourite movie: ");

// while((guess != fav_movie) && (guess != "quit")){
//     if(guess == "quit"){
//          console.log("You Quit!!");
//          break;
//     }
//     guess = prompt("Wrong Guess!! Please try again: ");
// }
// if(guess == fav_movie){
//     console.log("Congrats!!")
// }

// let i = 1;
// while(i <= 5){
//     if(i == 3){
//         console.log("We used break at 3");
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// fruits.push("pineapple");

// for(let i = 0; i < fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for(let i = 0; i < heroes.length; i++){
//     console.log(`List #${i}`);
//     for(let j = 0; j < heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "Shraddha"){
//     console.log(char);
// }

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }

// let arr = [1,2,3,4,5,6,2,3]
// let num = 2

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

let num1 = 287152;
let count = 0;
let sum = 0;
while(num1 > 0){
    let rem = num1 % 10;
    sum += rem;
    
}
console.log(count);