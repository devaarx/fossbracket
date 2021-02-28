---
title: What is map() in JavaScript? And, why it is widely used in React.js?
date: '2021-02-28T12:15:37.121Z'
category: 'Guides'
tags: ['JavaScript', 'Web Development', 'React']
featuredImage: './map-javascript.jpg'
---

The Array.map() is a very useful method available to JavaScript Arrays which creates a new array from the original array on which it is called upon. It is widely used in React.js, and in this article we will learn why.

![JavaScript Map Method](./map-javascript.jpg)

- [How `Array.map()` works?](#how-arraymap-works)
- [The Callback Function in `map()`](#the-callback-function-in-map)
- [Using `map()` in an Array of Objects](#using-map-in-an-array-of-objects)
- [Why is it widely used in React?](#why-is-it-widely-used-in-react)

## How `Array.map()` works?

The `map()` method while called on an array, **creates a new array from the original array** populated with the returned value of the provided callback function on every element of that array.

In simple terms, `map()` takes a callback function as the argument, and creates a new array; and we have to provide a callback function which is called for every element in the original array. For example:

```javascript
const array1 = [1, 1, 2, 3, 5, 8];

const map1 = array1.map(function (num, index, array) {
  return num + num;
});

console.log(map1); // expected output: Array [2, 2, 4, 6, 10, 16]
```

In the above example, we are calling `.map()` on _array1_, passing a callback function which takes _3 arguments_, and the callback function returns the sum of the element in the array. Finally, the `map()` method returns an array, and we are saving that returned array in a variable called _map1_.

## The Callback Function in `map()`

You have to pass a function as an argument in the `map()` method (callback function) which is processed on every element on the array. The callback function takes 3 arguments:

1.  `currentValue` - The current element being processed in the array.
2.  `index` (Optional) - The index of the current element being processed in the array.
3.  `array` (Optional) - The array `map` was called upon.

> **Note** : The callback function is called for every element of the array like a _loop_, but you should not use `map()` for loop, because it returns a new array; instead use `forEach()`.

**Important**: The callback function should return something, otherwise the new array will be an array of `undefined` values. Consider the below example:

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map without returning
const map1 = array1.map(function (item) {
  item * item;
});

// pass a function to map returning the modified value
const map2 = array1.map(function (item) {
  return item * item;
});

console.log(map1); // expected output: Array [undefined, undefined, undefined, undefined]
console.log(map2); // expected output: Array [1, 16, 81, 256]
```

You can also use an **arrow function** which returns implicitly. It is more concise and easy to read.

```javascript
const array1 = [1, 4, 9, 16];

// pass a function to map without returning
const map1 = array1.map((item) => item * item);

console.log(map1); // expected output: Array [1, 16, 81, 256]
```

## Using `map()` in an Array of Objects

You can also use `map()` method on an array having objects as the array elements. Consider the below example:

```javascript
let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];

let formattedArray = kvArray.map((obj) => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});
// formattedArray is now [{1: 10}, {2: 20}, {3: 30}],
```

As you can see, `map()` is very powerful method used to modify an array into the exact array you want.

> **Note :** In the above example, _kvArray_ is **not modified** after using `map()` method on it. It remains exactly the same as before.

## Why is it widely used in React?

As the `map()` method creates a new array from the original array, it is a very popular way in React to render elements from an array of data.

**Example**: Below we are rendering a list of numbers from an array

```jsx
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => {
        return (
          <li key={number.toString()}>{number}</li>
        )
      }
    </ul>
  );
}

const numbersArray = [1, 2, 3, 4, 5];

ReactDOM.render(
  <NumberList numbers={numbersArray} />,
  document.getElementById('root')
);

/* This will render something like this:
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>
*/
```

In the above example, we are _mapping_ through our array of numbers (numbersArray) and returning JSX, i.e `<li></li>` component for each element in the numbersArray. So, it is widely used in React.js or other JavaScript frameworks.

I hope you liked this article on `map()` method for Array in JavaScript. If you have any questions or suggestions, please do comment below. Thanks for reading.
