# TicTacToe-Backend

This is a **NodeJs** project serving as backend for the tictactoe multiplayer game project. 

## Made with NodeJs, express, socketio and MongoDB
Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install the required dependencies in the `package.json` file.
Clone the project on your device and initialise npm using `npm init` in cmd.
Install the dependencies using the `npm i` command.
Use `npm start` to start the project.

## Working
1. Connect to your mongoDb cluster using your own credentials and replace it with the ones present in the `index.js` script.
2. In the `socket_client.dart` folder of the [flutter tictactoe project](https://github.com/Maveric-k07/tictactoe-flutter-frontend) change the address to your deployed url or use your local IP address during development.
3. Run the flutter app to connect to the socket server and enjoy developing! Check the [README.md]() of the flutter frontend project to get started.

## About the project

Since this is a multiplayer game that requires real-time communication between 2 different devices running the game at the same time, I decided to 
go with **Web Sockets** instead of traditional HTTP as HTTP comes with a lot of overhead.

The **express** framework from [npm express](https://www.npmjs.com/package/express) is used to quickly set up the server and manage the socket messaging and actions.

**socket.io** provides a very efficient way to establish socket connectivity and the trigger functions to be performed using socket methods.

**MongoDb** is used as the primary database for the system as it provides the [mongoose package](https://www.npmjs.com/package/mongoose) that makes it very convienent to 
create schemas and mongoose models for the database.


## Credits
[Akhileshwar Gurram](https://github.com/Maveric-k07)
