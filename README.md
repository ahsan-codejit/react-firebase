# react-firebase
Sample Project of React, Bootstrap, Firebase, Firestore


## Available Scripts

Go to your prefered directory on terminal, then follow the following commands

```
git clone git@github.com:ahsan-codejit/react-firebase.git
cd react-firebase
npm install
```

Add firebase.js config file in src/configs dir with content in following format:

```
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    ......
    appId: ""
}

export default firebaseConfig;
```


In the project directory, to start the app, you can run:

### `npm start`

## Tow Test the App

- Run backend app following it's instructions on readme.md , it will run on 3001 port.
- Then run frontend app following above instructions, it will run on 3000 port.