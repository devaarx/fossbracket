---
title: How to use SCSS modules in React?
date: '2020-08-21T10:50:11.121Z'
category: 'Guides'
tags: ['React', 'SCSS', 'Web Development']
featuredImage: './featuredImage.jpeg'
---

Using SCSS/LESS in your React App makes writing CSS really easy and fun 🤟. In this article, we will take a look how you can integrate SCSS in your React project and how to use SCSS modules to make sure, your styles are scoped and you don't have global scope issues.

### Pre-requisites

- Make sure you have Node JS installed on your machine. You can check if it is installed by running `node --version` from your command line. If you have not installed yet, you can follow the installation process [here](https://nodejs.org/en/download/). It should have came with NPM (Node Package Manager), you can check by running `npm --version`.
- You should have created a React project through Create React App. If you haven't already created, you can create your project by running `npx create-react-app my-awesome-app`, replace "my-awesome-app" with your project name.

### Install `node-sass`

Next step is to install/add `node-sass` package in your project which will help us compile your `.scss/.less` files to regular `.css` files, so our browser can read it.

To install `node-sass` open up your command line and type `npm install -D node-sass` or if you are prefer using Yarn, type `yarn add -D node-sass` instead. If you want to use Yarn and have not installed it, please install by running `sudo npm install yarn -g`.

### Start using SCSS modules

Before we start writing SCSS, make sure your project running successfully. To start our React app, run `npm start` or `yarn start`.

Start by creating a folder inside your `src/` folder and place all your `.scss` modules inside your `.src/styles` folder. Let's create one file called `App.modules.scss`. Make sure you have `module.scss` at the end of your all SCSS modules. Let's write some SCSS:

```css
.app {
  &_heading {
    font-size: 2rem;
    margin: 0 0 2rem;
    color: coral;
  }
  &_paragraph {
    font-size: 1.2rem;
    color: cornflowerblue;
  }
}
```

Then, import your SCSS modules in your component where you want to use those styles, and use our amazing styles like this:

```jsx
import React from 'react';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <h2 className={styles.app_heading}>Hello Heading</h2>
    </div>
  );
}

export default App;
```

That's it! You have successfully integrated SCSS modules in your project. But you might be asking why SCSS modules in the first place. Take a look at the DOM of our React App:

![SCSS module class naming in DOM](module-dom.png)

You can see here, our classes are referring to the component where it is loaded. So, our `App.module.scss` styles are only applied in our `App.js` component where it is loaded, nowhere else. This is a huge advantage because in regular CSS, you have to have unique class names for every component because of the global CSS overriding issues we often face.

Thank you so much for reading! Please let me know if you are already using SCSS modules and have any tips, so it will help others. Also let me know your thought on this! 🙌
