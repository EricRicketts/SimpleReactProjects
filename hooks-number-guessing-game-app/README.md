# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Project Specific Notes

## General Comments On Project Initialization

There is no question, at least in my mind, that using React Functional Components along with Hooks to tap into the Component Life Cycle is ultimately a cleaner way to use React than a class based solution.

However, there is one aspect of using Functional Components and Hooks that can be problematic and that is running initialization code.  This is done very easily in the class based solution by simply putting all the necessary code in the constructor.  Such initialization encompasses not only state (which can easily be done with hooks), 
but the developer might need to initialize some local variables which are not state related.  This becomes a problem with Functional Components and Hooks because a React Functional Component, just like any Javascript function always runs.  With a class based solution, the constructor runs one time, making initialization of 
non-stateful properties very easy.

## My Particular Problem

In my case, the only state variable I needed was `guess`.  This was the minimum viable state required for the application, as the only time I want a render to occur is when the user guesses a new number.  However, I needed a random number for the user to guess against and a count variable initialized to zero and incremented to track 
the number of user guesses.  Neither of those variables should be stateful.  However, if I initialize them in the body of the functional component they will be reinitialized on every render.  The solution is to inject an initialized value into the functional component and let the function update it.  Unfortunately, this means those
two variables must be scoped outside the functional component potentially setting up a collision with variables named identically in the same or higher scope.  This was my initial solution, I simply initialized `count` and `randomNumber` outside of the functional component.  Within the component I updated `count` everytime the user 
guessed and left `randomNumber` untouched.  Since those two variables were globally scoped I could reinitialize them for a new game and when the application was started again, the entire code ran again, thereby initializing them once more.  I did this to just get my application tested and working knowing I would return to the issue 
of their scope.

After the application became a minimum viable product I looked for ways to make my initialization process more robust and reduce the collision exposure of `coutn` and `randomNumber`.  My son suggested making use of _Context_ in React, I looked at this saw the main reason for using _Context_ is to provide data to a potentially
different number of components without passing data down through the component hierarchy.  Also, given how _Context_ works I would have to create a wrapper component to pass the data to my own component.

What I needed was to initialize the two variables in another scope, but bring that scope into my own component, so I can access them for read and write.  I found _ES6 Modules_ to be a workable solution.  I was originally thinking of an _IIFE (Immediately Invoked Function Expression)_ to do this, as an _IIFE_ creates its own scope,
but after doing some research on _ES6 Modules_ I found they do the same thing.  Importing ES6 variables renders them read only, so I could not update them in the component.  However, I could import functions which increment and initialize `count` and initialize `randomNumber`.  Those functions could be called within the component
and update the imported variables because the ES6 modules __create a closure__ around those variables.  Though it is possible the increment and reset functions could be used by mistake by another developer, such an occurrence is far less likely than making the variables global which I had done in the past. 
