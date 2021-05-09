# image-repository-client

## This application requires to be connects to the backend API. Here are the steps to do so:
1. Git clone the [API server](https://github.com/mehtaabGill/image-repository-server) and get it running.
2. Git clone this repository and `cd` into the project folder
3. Create a `.env` file in the project's root directory 
4. Enter the following line of text in the file you created. `VUE_APP_BASE_API_URL=<api-url-here>` (Be sure to replace it with the URL of the API we started on step 1)
5. Run `yarn install` to install the required node modules
6. To start the app in development mode, run `yarn serve`

## Other commands

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```