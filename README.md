# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






---------------------------------------------------------------------------------------------------------------------------------------------------------------------
React Project

Name : TVmaze

What functionality do you have to build?

Click the link

Innovate on UI & build same functionality

What APIs are used for this project?
The whole documentation of APIs you will find 👇
Here
Use this docs to get details of API…

To make it easy for you, here are 3 apis that you will be using to search shows by show name & also by actor name

For search by shows:
Use This

Ex: https://api.tvmaze.com/search/shows?q=friends
Here instead of friends if u write any other show name details of that show will be fetched.

Ex: https://api.tvmaze.com/search/shows?q=girls
This will fetch all the details of show girls

For search by actor:

Step1. Get details of actor user has typed

https://api.tvmaze.com/search/people?q=akon

Ex:
https://api.tvmaze.com/search/people?q=akon
Here instead of akon, if you write any other actor name, details of all the actors with names similar to akon will be fetched.

Step 2. Get all the popular shows of the actor by actorId fetched in step 1

https://api.tvmaze.com/people/actorId/castcredits?embed=show

Ex:
https://api.tvmaze.com/people/121783/castcredits?embed=show

This api will fetch all the shows of an actor with id 121783….check step 1 api it gives u all the actors with their ids too. Use any one actor id here in step 2 to fetch his shows.

Note: Innovate on design. You can take inspiration from Netflix or hotstar or amazon prime.

Some help to find designs…