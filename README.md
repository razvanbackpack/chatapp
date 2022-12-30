# Chatapp

Chatapp is a personal project. It is a chat application, with server and client, made in Node.

Made using this tutorial:  
https://www.youtube.com/watch?v=jD7FnbI76Hg

# Running it

## Requirements:
 - npm
 - MySQL
 - ngrok (optional, for opening server to internet while developing)
## Running the Client
```
cd client
npm install
npm run dev
```
Change ```http://localhost:3000``` to whatever adress your server is running on ```/client/public/js/main.js:19```
## Running the Server
```
cd server
npm install
npm run dev
```
Change the ```MySQL``` connection credentials from ```/server/utils/mysql.js:12```

# Screenshots

### "Login" screen  

![Login screen](https://i.imgur.com/ANNNtJb.png)

### Chat view  

![Chat view](https://i.imgur.com/C9AFJZ4.png)

