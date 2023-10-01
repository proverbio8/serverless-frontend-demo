# Tag Validator using Serverless

This project uses React.js, React Hooks, Redux, Redux Sagas, Axios, Material UI

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Docker

To run as a production build in Docker please

- Run `docker build -t tag-frontend .`
- Run `docker run -p 80:80 tag-frontend`

## TODO

- Setup Github pipelines
- Setup AWS resources with Pulumi
- Add more unit tests
