# core-code-upskilling-readme

## **WEEK 1**

### **Ensure Question**

 Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string. 

```javascript
const string = (word) =>{
    const mark = '?';
    return (word.endsWith(mark)) ? word : word+'?';
};

console.log(string("Yes"));
console.log(string('question?'));
```
### **Reverse Sentence** 

Complete the solution so that it reverses all of the words within the string passed in.
Example:

*"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"*


```javascript
const reverseWord = (word) =>{
    return word.split(' ').reverse().join(' ');
};

console.log(reverseWord("The greatest victory is that which requires no battle"));
```

### **Smallest Integer In Array**

Given an array of integers your solution should find the smallest integer.

For example:
+ *Given [34, 15, 88, 2] your solution will return 2*
+ *Given [34, -345, -1, 100] your solution will return -345*
+ *You can assume, for the purpose of this kata, that the supplied array will not be empty.*

```javascript
const smallestInteger = (arr) =>{
    return Math.min(...arr);
};

console.log(smallestInteger([34, 15, 88, 2]));
console.log(smallestInteger([34, -345, -1, 100]));
```

### **Odd Or Even** 

Given a list of integers, determine whether the sum of its elements is odd or even.
+ Give your answer as a string matching "odd" or "even".
+ If the input array is empty consider it as: [0] (array with a zero).

Examples:
+ *Input: [0] 
Output: "even"*

+ *Input: [0, 1, 4]
Output: "odd"*

+ *Input: [0, -1, -5]
Output: "even"*

```javascript
const oddOrEven = (arr) =>{
    const sum = arr.reduce((acc, item) => acc+item)
    return sum%2 ? 'odd' : 'even';
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
    wordString = wordString.split(/[^a-z0-9]+/).join('');
    const wordChange = wordString.split('').reverse().join('');
    return wordString === wordChange ? true : false;
};

console.log(palindrome("Anna")) //==> true
console.log(palindrome("walter")) //==> false
console.log(palindrome(12321))   //==> true
console.log(palindrome(123456))  //==> false
console.log(palindrome("A man, a plan, a canal. Panama")); //==> true
console.log(palindrome("five|\_/|four")); //==> false
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
        if (arr[i] !== 'good') {
            continue;
        };
        good += 1;
    };

    if (good > 2) {
        return 'I smell a series!';
    };

    if (good) {
        return 'Publish!';
    };

    return 'Fail!';
};

console.log(kataIdea(['bad', 'bad', 'bad'])); //==>Fail!
console.log(kataIdea(['good', 'bad', 'bad', 'bad', 'bad'])); //==>Publish!
console.log(kataIdea(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); //==>I smell a series!
```

### **React Manage Events**
Write a react component that will display the current value of our counter.

The counter should start at 0.
There should be a button to add 1.
There should also be a button to subtract 1.
We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

In your render you should return:

The counter display element with an id of 'counter', containing the counter value.
+ *An increment button with an id of 'increment'*
+ *A decrement button with an id of 'decrement'*

#### ***SOLUTION***
`<link>`: https://github.com/ViktorG04/core-code-upskilling-readme/challenge-react/src/Components/counter

### **React Santa Wish List**

Santa wants to simplify his life and offer children the possiblity to enter their wishlist via an online form.

The form should be a React component and should contain:

- an input field for the child's name (with id 'name')
- a text area to describe the wish (id: 'wish')
- a drop-down indicating the priority of the wish, from 1 to 5 - default is 1 (id: 'priority')
- the keys in the state to store the corresponding values should be named the same as the element's id
- an onSubmit action calling the function handleSubmit
- a function called handleSubmit, which:
    + calls send (a function that is already provided as part of the injected properties props)
    + passes the current state as a parameter to send
    + calls event.preventDefault

it should be a controlled component (i.e. using onChange to bind input to the component's state)

#### ***SOLUTION***
`<link>`: https://github.com/ViktorG04/core-code-upskilling-readme/challenge-react/src/Components/formSanta
