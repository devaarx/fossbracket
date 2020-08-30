---
title: How to compile SCSS file using Gulp?
date: '2020-08-30T17:25:12.121Z'
category: 'Guides'
tags: ['SCSS', 'JavaScript', 'Web Development']
featuredImage: './gulp.jpg'
---

You may want to use SCSS in your website, but you need to compile it to regular CSS because browsers do not understand SCSS. Sure, there are online tools, and IDE extensions to help you compile SCSS files, but in this article we will be using [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start) which is a great automation tool and it is really easy to use.

Before we start, make sure you have `node` installed on your computer, and you are able to use `npm`. If you have not installed `node`, please follow [this link](https://nodejs.org/en/download/) and install stable version of `node` on your computer. Once you've done that, let's get started!

```bash
# install gulp-cli globally
$ npm install --global gulp-cli

# create a package.json file
$ npm init -y

# add gulp, gulp-sass and node-sass as devDependencies
$ npm install gulp gulp-sass node-sass --save-dev
```

First of all we installed `gulp-cli` globally by running `npm install --global gulp-cli` . Next, we created a `package.json` file by running `npm init -y`. Then, we installed all the packages as our `devDependencies` we need to compile our SCSS files. Our `package.json` file should look something like this:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-sass": "^4.1.0",
    "node-sass": "^4.14.1"
  }
}
```

### Create `gulpfile.js`

In our project's root directory, let's create a file named `gulpfile.js`. It is a JavaScript file, which will run automatically when we use `gulp` command to execute all our Gulp tasks.

### Compose `gulp` tasks

Gulp provides two powerful composition methods, `series()` and `parallel()`

- `parallel()` executes all the tasks at the same time and at maximum concurrency
- `series()` executes our tasks in order

For our use case we will use `series()` composition method. Now, let's write our task for SCSS compilation!

```javascript
'use strict';

const { series, src, dest }  =  require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

function compileScss() {
  return src('./src/scss/*.scss')
    .pipe().on('error', sass.logError))
    .pipe(dest('./dist/css'));
}

exports.default = series(compileScss);
```

Here, we are importing `series, src, dest` methods from `gulp`, `scss` which is coming from `gulp-sass`. Then, we are creating a function named `compileScss` which returns a task. Inside of that function, we are saying gulp to source/use **all the SCSS files inside `./src/scss/` directory**, we will create our SCSS file in a second. Then, we are using the `.pipe()` method to append further instructions in our task. For any compilation error, we are logging that error, and finally, we are saving/exporting the compiled file into `./dist/css` directory which will be created automatically. And lastly, we are exporting our `compileScss` function using `series()` method.

Okay, now let's create one SCSS file `main.scss` inside `src/scss` directory. We can create as many SCSS files as we want here.

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }
    }
  }
}
```

One we have our first SCSS file, we will now compile it to regular CSS file. Go to your terminal and change directory to your current project's directory, and run `gulp`. You should see outputs something like this in your terminal.

```bash
Using gulpfile ~/scss-gulp/gulpfile.js
Starting 'default'...
Starting 'compileScss'...
Finished 'compileScss' after 20 ms
Finished 'default' after 23 ms
```

And you should see a compiled file `main.css` in your `./dist/css` directory. In your HTML file link this compiled CSS file instead of your SCSS file.

```html
<link rel="stylesheet" href="./dist/css/master.css" />
```

We can also pass several options inside our `compileScss` function. For example, we can compress our CSS output file passing a options object like this:

```javascript
function compileScss() {
  return src('./src/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('./dist/css'));
}
```

Please take a look [here](https://github.com/sass/node-sass#options) to see all the possible options you can pass. For more details on using Gulp, follow their official documentation [here](https://gulpjs.com/docs/en/getting-started/quick-start).

Hope you liked this article! Thank you so much for reading 🙌. Let me in the comments below, if you have any questions, I'd be glad to hear 😃.
