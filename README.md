# express-routing

## Router function and Nested Routing

Created Repo with .gitignore and README.md  
Ran  
npm init -y  
npm i express  
npm i nodemon --save-dev

Added nodemon as dev script in package.json

### Created routes folder

created index.js

- routes using Router  
  /  
  /about  
  /user/:id  
  imported /users routes

created users.js

- routes  
  /users  
  /:id

Exported each router

Created index.js in root directory

- imported express
- imported routes (routes/index + routes/users)

### tested each route

![/](<Screenshot 2024-06-05 222311.png>)  
![/about](<Screenshot 2024-06-05 222323.png>)
![/user/:id](<Screenshot 2024-06-05 222607.png>)
![/users](<Screenshot 2024-06-05 222628.png>)
![/users/:id](<Screenshot 2024-06-05 222638.png>)
