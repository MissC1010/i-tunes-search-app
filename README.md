# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deployed application

https://i-tunes-search-app-vert.vercel.app/

## Available Scripts

In the client directory, you can run:

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

### Security

I have taken significant steps to enhance the security of my application by integrating the Helmet JavaScript library. Helmet provides essential middleware functions that fortify the security measures of my Node.js or Express.js project. With Helmet, I have configured crucial HTTP headers such as Content Security Policy, Strict-Transport-Security, X-Frame-Options, and X-XSS-Protection to protect against common vulnerabilities like cross-site scripting (XSS) and clickjacking attacks. Additionally, I have implemented CORS policies to restrict unauthorized access to my application's resources and prevent cross-site request forgery (CSRF) risks. Furthermore, Helmet's additional safeguards against MIME sniffing and other potential attacks provide an extra layer of protection. By incorporating Helmet into my project, I have diligently applied security best practices, ensuring a robust security posture and a safer user experience for my application.

### API Endpoint

The application exposes a single endpoint (There is no API key for the itunes api which is used):

/search [GET]
This endpoint retrieves data from the iTunes Search API based on the specified search term and entity.
It utilizes the Axios library to make a secure GET request to the iTunes Search API.
The response data is extracted, and the results are sent back to the client in JSON format.
