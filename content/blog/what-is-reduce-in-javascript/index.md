---
title: What is reduce() in JavaScript? And, how it can be useful?
date: '2020-05-11T21:46:37.121Z'
category: 'Guides'
tags: ['JavaScript', 'Web Development']
description: 'ES6 introduced many awesome features in JavaScript and made it possible for developers to do cool things which were not so easy before. One such cool feature is the reduce() method. Let’s see what it is and how it can be really useful.'
featuredImage: './reduce-javascript.jpg'
---

ES6 introduced many awesome features in JavaScript and made it possible for developers to do cool things which were not so easy before. One such cool feature is the `reduce()` method. Let’s see what it is and how it can be really useful.

![JavaScript Reduce Method](./reduce-javascript.jpg)

> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

The above how **MDN** describes `reduce()`. You can find more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce).

In simple words, `reduce()` is an array method available to us, which we can use to perform certain tasks or calculations on each element in our array and return a single value at the end. It can be used to do so many things but, most of the people use it to add up all the elements in an array, like this:

```javascript
let array = [1, 2, 3, 4, 5];

let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// sum is 15
```

Note: I am using the ES6 arrow function here. You may write something like this if you like to use good old functions:

```javascript
let array = [1, 2, 3, 4, 5];

let sum = array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

// sum is 15
```

But it can do so much more, not just adding numbers in an array. But first, let’s understand what it is. It has four main parts in the above example.

1. [Callback Function](#callback-function)
2. [Accumulator](#accumulator)
3. [Current Value](#current-value)
4. [Initial Value (Optional)](#initial-value)

## Callback Function

It is the function we are passing inside our `reduce()` method in our above example. This will be invoked as many times as the length of the array, but with one exception which we will take a look later in this article.

## Accumulator

It is passed into our callback function as the first argument, and it “accumulates” the return value after every invocation of our callback function.

## Current Value

It refers to the current element which is being processed during every invocation of our callback function.

## Initial Value

This is an optional value we pass after our callback function (We are passing “0” as the initial value in our above example). If an initial value is supplied, the callback’s first parameter will be equal to this.

> **NOTE:** Remember? One exception in number of the invocation of our callback I was talking about? If no initial value is supplied to our `reduce()` method, the value of the accumulator will be the first element and current value will be the second element in our array, and our callback will skip the first element in our array, and start from the second element.

---

Now, let’s take a look at some really good use cases by looking at below examples:

### Example 1 :- Counting instances of values in an object

Let’s say we have an array, and we want to count the occurance of each element. We can easily do that using `reduce()`.

```javascript
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});

console.log(countedNames);

// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

**Note:** Here we are passing an _Object {}_ as our “initial value” to our `reduce()` method, which is being set as the initial value of our “accumulator” i.e. **allNames** in our above example. Then we are just checking if the current element in our array that is being processed exists in our **allNames** array. If it exists, then incrementing by one, if not then we are setting its count to 1.

### Example 2 :- Remove duplicate items in array

I really like this one, because this is what I use `reduce()` for, most of the time. Let’s say we have an array, containing duplicate elements. We can very easily remove duplicates from our array, like this:

```javascript
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(myOrderedArray);

// ["a", "b", "c", "e", "d"]
```

And, here we are passing and empty _Array []_ as our “initial value”, because we want the end return value to be an Array.

So, that is it. You can see how `reduce()` can really help achieving more with less code. I would strongly suggest going through [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) for more examples and detailed explanation of `reduce()`.

Thank you so much for reading!
