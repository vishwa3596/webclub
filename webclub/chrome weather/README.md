I would like to share few details about my project:-

Tools and Frameworks i have used in this project- I have used Reactjs in the frontend of the project and i have used basic css for styling. The api I have used is same as provided in the resouces section of the project.

Challenges and learning form this project:- For the first Time I have created Chrome extension and I had faced a lot of issue in enabling the extension because of CSP error. The Content below is from (https://developer.chrome.com/extensions/contentSecurityPolicy). In order to mitigate a large class of potential cross-site scripting issues, Chrome's extension system has incorporated the general concept of Content Security Policy (CSP) . This introduces some fairly strict policies that will make extensions more secure by default, and provides you with the ability to create and enforce rules governing the types of content that can be loaded and executed by your extensions and applications. After a lot of googling i found a post of react developer how to build the project with switching off the INLINE SCRIPTS. which finally healped me in creating the extension.

How the project works:- After downloading the code open terminal in project folder and run the command -> npm install then to build the project run the command -> npm run build

After building the project open chrome://extensions and load the package -> 1) go to the project folder and select the Build Folder WHEN YOU ENABLE THE EXTENSION WHENEVER YOU OPEN THE NEW TAB THE APP WILL LOAD AND IT WILL ASK YOUR LOCATION AND PROJECT THE WEATHER FOR THE FOLLOWING 5 DAYS.TO SWITCH OFF THE EXTENSION AGAIN GO TO chrome://extensions AND TURN IT OF AND NOW THE NEW TAB WILL OPEN WITHOUT THE APP.

this project might have a errors.

this is 2nd of 3 project i have submitted in the web club task. THANK YOU


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
