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