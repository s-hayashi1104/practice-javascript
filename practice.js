1
function multiplyByTen(num) {
  return num * 10;
}
2
function subtractFive(num) {
  return num - 5;
}
3
function areSameLength(str1, str2) {
  return str1.length === str2.length;
}
4
function areEqual(x, y) {
  return x === y;
}
5
function lessThanNinety(num) {
  return num < 90;
}
6
function greaterThanFifty(num) {
  return num > 50;
}
7
function add(x, y) {
  return x + y;
}
8
function subtract(x, y) {
  return x-y;
}
9
function divide(x, y) {
  return x / y ;
}
10
function multiply(x, y) {
  return x * y;
}
11
function getRemainder(x, y) {
  return x % y ;
}
12
function isEven(num) {
  return num % 2 === 0;
}
13
function isOdd(num) {
  return num % 2 !== 0;
}
14
function square(num) {
  return num * num;
}
15
function cube(num) {
  return Math.pow(num, 3);
}
16
function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}
17
function roundNumber(num) {
  return Math.round(num);
}
18
function addExclamationPoint(str) {
  return `${str}!`;
}
19
function combineNames(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
20
function getGreeting(name) {
  return `Hello ${name}!`;
}
21
function computeRectangleArea(length, width) {
  return length * width;
}
22
function computeTriangleArea(base, height) {
  return (base * height) / 2;
}
23
function computeCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));
}
24
function computeRectangularPrismVolume(length, width, height) {
  // return the volume of the 3D rectangular prism given the length, width, and height
  return length * width * height;
}
25
//Return a string of all the even numbers between 0 and num inclusive.
function stringOfEvens(num) {
  const array = []; 
  for (let i = 0; i <= num; i++ ){
    if(i % 2 === 0){
      array.push(i);
    } 
  }
  return array.join('');
}
26
//Sum all of the odd numbers together between 1 and num inclusive.
//Assume num is a positive integer.
function sumOfOdds(num) {
  let arr = [];
  for( let i = 0;i <= num; i++){
    if(i % 2 === 1){
      arr.push(i);
    }
  }
  return arr.reduce((acc, curr)=> acc + curr);
}
27
//Return the factorial of num.
//The factorial of a number is the product of each number between 1 and n.
function nFactorial (num) {
  if(num <= 1) return 1;
  return num * nFactorial(num-1);
}
28
//Return true if num is prime, otherwise return false.
function isPrime(num) {
  if(num === 0 || num === 1){
    return false;
  }
  let x = Math.sqrt(num);
  for(i = 2; i <= x; i++){
    if(num % i === 0 ){
      return false;
    }
  }
  return true;
}
29
//Return true if num is an integer.
function isInteger(num) {
  return num === Math.floor(num);
}
30
function isInRange(num) {
  return 20 < num && num < 50;
}
31
function isTenOrFive(num) {
  return num === 10 || num === 5;
}
32
function greeting(language) {
  switch(language){
    case 'German':
      return 'Guten Tag!'
    case 'Mandarin Chinese':
      return 'Ni Hao!'
    case 'Spanish':
      return 'Hola!'
    default:
      return 'Hello!'
  }
}
33
function getLargest(x, y) {
  return x < y ? y : x ;
}
34
//numbers is an array of integers.  Find and return the largest integer.
function largestNumber(numbers) {
  return Math.max.apply(null, numbers);
}
35
//testScores is an array.  Iterate over testScores and compute and return the average.
function averageTestScore(testScores) {
  return testScores.reduce((a, c)=> a + c, 0) / testScores.length;
}
36
//numbers is an array of integers.  Add all of the integers together and return the sum.
function addNumbers(numbers){
  return numbers.reduce((acc, curr)=>acc + curr, 0);
}
37
function contains(arr, item) {
  return arr.indexOf( item ) >= 0;
}
38
function wordsToSentence(words) {
  //join(x) 配列をxで結合して文字列へ
  //split(x) 文字列をxで結合して配列へ
  // return words.join(',').split(',').join(' ');
  return words.join(' ');
}
39
function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}
40
function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}
41
/*arr is an array of integers.  Increment each integer in the array and return the same array.*/
function incrementByOne(arr) {
  return arr.map(i => i + 1);
}
42
function getArrayLength(arr) {
  return arr.length;
}
43
function returnLast(arr) {
  return arr[arr.length-1];
}
44
function returnFirst(arr) {
  return arr[0];
}
45
/*Create a new object with a property called name.
Set name to the value of the name argument.
Add a method to the object called meow.
When the meow method is invoked, the object you returned should return the string '<cat name> meowed!'
'<cat name>' should be the value of the name property on the object.
Return the object you created.*/
function makeCat(name) {
  const cat = {};
  cat.name = name;
  cat.meow = function(){
    return  cat.name + " meowed!";
  };
  return cat;
}
46
/*Add the value of the property argument as a key on the object argument.
The value of the new property should be set to null.
Return object after adding the new property.*/
function addProperty(object, property) {
  object[property]=null;
  return object;
}
47
/*method is a string that contains the name of a method on the object
Invoke this method using bracket notation.
Nothing needs to be returned.*/
function invokeMethod(object, method) {
  object[method]();
}
48
function createObject() {
  　const my = {};
  　my.name = 'shibahas.has';
  　my.age = 24;
  　my.hobbies = ['reading', 'math', 'agriculture'];
  　return my;
 }
49
/*Replace the value of the existing password on the user object with the value of newPassword.
Return the user object.*/ 
function updatePassword(user, newPassword) {
  user.password = newPassword;
  return user;
}
50
function addFriend(user, newFriend) {
  user.friends.push(newFriend);
  return user;
}
51
function setUsersToPremium(users) {
  users.forEach(function(i){
    i.isPremium = true;
  });
  return users;
}
52
function sumUserPostLikes(user) {
  let sum = 0;
  user.posts.forEach(function(i){
    sum += i.likes;
  });
  return sum;
}
53
function invokeCallback(cb) {
  cb();
}
54
//Sum up all of the integers in the numbers array.
//Instead of returning the sum invoke cb and pass in the sum there.
function sumArray(numbers, cb) {
  // try to use the array reduce method to find the sum
  let sum = numbers.reduce((acc, curr) => (acc + curr),0);
  cb(sum);
}
55
/*For each element in the "arr" array, call the cb function, passing in that element.  

Note: cb stands for "callback".

Hint: you will be invoking cb multiple times (once for each value in the array).

Do not use the built-in forEach method for this.  Use a regular for loop.*/
function forEach(arr, cb) {
  for (i=0; i < arr.length ; i++){
    cb(arr[i]);
  }
}
56
//Iterate over each value in arr, invoke cb with each value, then place the result into a new array.
//Return the new array.
function map(arr, cb) {
  return arr.map(i => cb(i),0);
}
