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

## Design Notes on Number Guessing Game

### Components

1.  ```<GuessingStatusParagraph />``` shows user the status of the guess in relation to the random number. 
2.  ```<NumberGuessingForm />``` allows user to submit his guess.
3.  ```<App />``` top level component, required for _create-react-app_, incorporates the two above components plus some _React elements_ most notably a ```<button>``` which causes a new game to begin.

### State

```this.state.guess``` I can see how beginners like myself would have too much state. 
I originally had _guess_ and _guessCount_ as state but realized the only thing that should cause a re-render by user interaction is _guess_.  _guessCount_ is not part of the user interaction but a by product of it. 
```<App />``` was the nearest ancestor component to both  ```<GuessingStatusParagraph />``` and ```<NumberGuessingForm />```, so this is where I kept the state and generated any props that needed to be pushed down to those two components.

### Design Decisions

I thought this was a straight forward design, but then I realized the state of the design had to be controlled by a form submit not input change on an input element.
So I had to make the input element receiving the user input an uncontrolled element.  I did not want a re-render to occur each time the user typed in a new digit.
I also had to use refs to reset the input value of the input element for an invalid entry or new game request.

Though the project was simple, I focused my efforts on my design decisions, particularly my component selection and state choices (as per instruction from my son).
My design effort along with working through the testing library caused the project to go a lot longer than anticipated.  I am not discouraged as this experience will pay off in future designs.

### Testing

This was interesting experience and one which led to a significant increase in time spent on the project.  In the React tutorial I did, the _testing-library_  was used.  However, I did not take the time to fully understand the library.
This became apparent when I started to write my own tests from scratch.  Thus, I had to spend time digging into the library to gain a better understanding of its philosophy towards testing and how to use it.
I love testing so this was a delightful endeavor.  The main thing I learned to appreciate about _testing-library_ is that it is a simple wrapper around your components.
This wrapper allows the user to render the component and see if the resulting DOM fragment matches your expectations.  I used _Enzyme_ a long time ago and that library allowed for probing the component internals.
In retrospect, I agree with the _testing-library_ philosophy, it seems cleaner and certainly simpler.  _Enzyme_ gave the developer a lot more options, which could possibly lead to some poor testing practices?
Going forward, one concern I have is how to test logic in a component, especially if there is a lot of it.

My biggest decision for testing the application was whether to run a full game.  My only other option was to break out ```<GuessingStatusParagraph />``` and ```<NumberGuessingForm />``` separately and test them together.
I did not like this because I had to simulate state change by using some glue logic to pass props down to each component.  I had all of this in the application itself.
It turned out testing the application to game completion was not that hard, so I want with it.  Maybe for more complex components one has to break them out and use props to simulate state.
Also, because I used classes I was not able to break out the logic used in the top level component, unless I copied the logic and tested it separately in Jest. 



