# core-code-upskilling-readme

## **WEEK 1**

### **Ensure Question**

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

```javascript
const string = (word) => {
  const mark = "?";
  return word.endsWith(mark) ? word : word + "?";
};

console.log(string("Yes"));
console.log(string("question?"));
```

### **Reverse Sentence**

Complete the solution so that it reverses all of the words within the string passed in.
Example:

_"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"_

```javascript
const reverseWord = (word) => {
  return word.split(" ").reverse().join(" ");
};

console.log(
  reverseWord("The greatest victory is that which requires no battle")
);
```

### **Smallest Integer In Array**

Given an array of integers your solution should find the smallest integer.

For example:

- _Given [34, 15, 88, 2] your solution will return 2_
- _Given [34, -345, -1, 100] your solution will return -345_
- _You can assume, for the purpose of this kata, that the supplied array will not be empty._

```javascript
const smallestInteger = (arr) => {
  return Math.min(...arr);
};

console.log(smallestInteger([34, 15, 88, 2]));
console.log(smallestInteger([34, -345, -1, 100]));
```

### **Odd Or Even**

Given a list of integers, determine whether the sum of its elements is odd or even.

- Give your answer as a string matching "odd" or "even".
- If the input array is empty consider it as: [0] (array with a zero).

Examples:

- _Input: [0]
  Output: "even"_

- _Input: [0, 1, 4]
  Output: "odd"_

- _Input: [0, -1, -5]
  Output: "even"_

```javascript
const oddOrEven = (arr) => {

  if(!arr.length){
    return "even";
  }

  const sum = arr.reduce((acc, item) => acc + item);
  return sum % 2 ? "odd" : "even";
};

console.log(oddOrEven([0])); //==> even
console.log(oddOrEven([0, 1, 4])); //==> odd
console.log(oddOrEven([0, -1, -5])); //==> even
```

## **WEEK 2**

### **Is Palindrome?**

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

```javascript
const palindrome = (word) => {
  let wordString = String(word).toLocaleLowerCase().trim();
  wordString = wordString.split(/[^.!a-z0-9]+/).join("");
  const wordChange = wordString.split("").reverse().join("");
  return wordString === wordChange ? true : false;
};

console.log(palindrome("Anna")); //==> true
console.log(palindrome("walter")); //==> false
console.log(palindrome(12321)); //==> true
console.log(palindrome(123456)); //==> false
console.log(palindrome("A man, a plan, a canal. Panama")); //==> true
console.log(palindrome("five|_/|four")); //==> false
```

### **Well Of Ideas**

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.

1. If there are one or two good ideas, return 'Publish!'.
2. If there are more + than 2 return 'I smell a series!'.
3. If there are no good ideas, as is often the case, return 'Fail!'.

```javascript
const kataIdea = (arr) => {
  let good = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "good") {
      continue;
    }
    good += 1;
  }

  if (good > 2) {
    return "I smell a series!";
  }

  if (good) {
    return "Publish!";
  }

  return "Fail!";
};

console.log(kataIdea(["bad", "bad", "bad"])); //==>Fail!
console.log(kataIdea(["good", "bad", "bad", "bad", "bad"])); //==>Publish!
console.log(
  kataIdea(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
); //==>I smell a series!
```

### **React Manage Events**

Write a react component that will display the current value of our counter.

The counter should start at 0.
There should be a button to add 1.
There should also be a button to subtract 1.
We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

In your render you should return:

The counter display element with an id of 'counter', containing the counter value.

- _An increment button with an id of 'increment'_
- _A decrement button with an id of 'decrement'_

#### **_SOLUTION_**

`<link>`: https://github.com/ViktorG04/core-code-upskilling-readme/tree/main/challenge-react/src/Components/counter

### **React Santa Wish List**

Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.

The form should be a React component and should contain:

- an input field for the child's name (with id 'name')
- a text area to describe the wish (id: 'wish')
- a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
- the keys in the state to store the corresponding values should be named the same as the element's id
- an onSubmit action calling the function handleSubmit
- a function called handleSubmit, which:
  - calls send (a function that is already provided as part of the injected properties props)
  - passes the current state as a parameter to send
  - calls event.preventDefault

it should be a controlled component (i.e. using onChange to bind input to the component's state)

#### **_SOLUTION_**

`<link>`: https://github.com/ViktorG04/core-code-upskilling-readme/tree/main/challenge-react/src/Components/formSanta

## **WEEK 3**

### **Build Search Filter In React**

React code to build a simple search filter functionality to display a filtered list based on the search query entered by the user.

#### **_SOLUTION_**
`<link>`: https://github.com/ViktorG04/core-code-upskilling-readme/tree/main/challenge-react/src/Components/searchFilter

### **Fetch Random User Data**

React code to fetch from this API random users. You should display the Name, website, email and phone of a random user. Also there should be a Reset button to fetch a new user (For this you need to generate a random number from 1 to 10).

#### **_SOLUTION_**
`<link>`: https://github.com/ViktorG04/core-code-upskilling-readme/tree/main/challenge-react/src/Components/fetchRandomData

### **React Router Blog**

Create a blog with React Router and get info from posts from a json file.

#### **_SOLUTION_**
`<link>`: https://github.com/ViktorG04/core-code-upskilling-readme/tree/main/challenge-react/src/Components/react-router

## **WEEK 4**

### **Two To One**

Take 2 strings s1 and s2 including only letters from 'a' to 'z'. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

```javascript
const longest = (s1, s2) =>{
  const allStrings = [...s1, ...s2];
  const stringsOrder = allStrings.sort();
  const abc = [... new Set(stringsOrder)].join('');

  return abc;
}

console.log(longest("aretheyhere", "yestheyarehere")) // result => "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // result => "abcdefghilnoprstu"
console.log(longest("inmanylanguages", "theresapairoffunctions")) // result => "acefghilmnoprstuy"
```
### **Leap Years**

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

1. years divisible by 4 are leap years
2. but years divisible by 100 are not leap years
3. but years divisible by 400 are leap years

Additional Notes:
Only valid years (positive integers) will be tested, so you don't have to validate them
```javascript
const isLeapYear = (year) => {

    if ( !(year%4) && ((year%100) || !(year%400)) ) {
        return true;
    };
    return false;
};

console.log(isLeapYear(1234)) // => false
console.log(isLeapYear(1984)) // => true
console.log(isLeapYear(2000)) // => true
console.log(isLeapYear(2010)) // => false
console.log(isLeapYear(2013)) // => false
console.log(isLeapYear(1000)) // => false
console.log(isLeapYear(1800)) // => false
console.log(isLeapYear(1900)) // => false 
```

### **Maximum Length Difference**

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

_**Find max(abs(length(x) − length(y)))**_

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

```javascript
const mxdiflg = (a1, a2) =>{
    if (!a1.length || !a2.length) {
        return -1;
    }
    const a1Order = a1.sort((a, b) => a.length - b.length);
    const a2Order = a2.sort((a, b) => a.length - b.length);

    const X = Math.abs(a1Order[0].length - a2Order[a2.length - 1].length)
    const Y = Math.abs(a2Order[0].length - a1Order[a1.length - 1].length)

    return Math.max(X, Y)
};

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"])); //--> 13

console.log(mxdiflg([ 'sscccaa', 'ydddd', 'ttggg', 'vvvvnnnnnnrrrzzzzgg', 'rry' ],
[
  'jjlzzlllxxxxv',
  'gggcsdddwc',
  'jjjlkkkktt',
  'fgggrrrr',
  'wwqqqllyyyyy',
  'sss',
  'ybbbcchhhhiiiwwx'
])); //--> 16
```


### **Base64 Numeric Translator **

Our standard numbering system is base-10, that uses digits 0 through 9. Binary is base-2, using only 1s and 0s. And hexadecimal is base-16, using digits 0 to 9 and A to F. A hexadecimal F has a base-10 value of 15.

Base-64 has 64 individual characters ("digits") which translate to the base-10 values of 0 to 63. These are (in ascending order):

```javascript
const base64toBase10 = (base64) => {
    const base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    const baseSplit = base64.split('');
    return baseSplit.reduce((acc, item) => acc * 64 + base.indexOf(item), 0);
};
console.log(base64toBase10("/")); // -->  63
console.log(base64toBase10("BA")); //-->  64
console.log(base64toBase10("BB")); //-->  65
console.log(base64toBase10("BC")); //-->  66
console.log(base64toBase10("//")) //--> 4095 
console.log(base64toBase10("WIN")) //-->  90637 
```