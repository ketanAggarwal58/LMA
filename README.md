# Quiz Application

This is a basic Node Backend application which i have created this application holds the total of 8 APIs which have been created by the Ketan Aggarwal.

The LMA folders holds backend_django application code as well but it is not completed due to the lack of time.

In Django application i have used the Django Rest Framework which helps us to cut the boiler plate code.

## Node JS Application

After the Realisation that the time is very low and i have to also create the ReactJS Website as well so i decided to switch the project to NodeJS in between.

The Node Application HOLDS the total of 8 APIs which are listed down below:

1. post - http://localhost:8000/auth/login
2. post - http://localhost:8000/auth/signup
3. post - http://localhost:8000/quiz/new
4. post- http://localhost:8000/quiz/test/<id>
5. Patch - http://localhost:8000/quiz/test/<id>
6. get -http://localhost:8000/quiz/test/<id>
7. get - http://localhost:8000/quiz/test/score/<id>
8. post - http://localhost:8000/quiz/test/score/<id>

In the Creationn of the application i have used to the Relational Database - MySQL DB

the Database is runned on the docker container and then connected with the application.

.env file holds the confrigration of the application server and the configration of the database which helps to connect the DB with the NodeJS Application server.

### Packages Used in the Application Server

1. bcryptjs - for encrypting the Password
2. dotenv -  for the support of the Env file
3. jsonwebtoken - For the Creatation of the JWT Tokens
4. express - to reduce the boiler plate code in NodeJS
5. jwt-decode - to Decode the JWT token
6. MySQL2 - Client library to connect the DB with application server

Note - SQL files holds the query used to create the Databases and the tables in the MySQL database.

## React Application

Due to The shortage of time the Application is not completed and API integration is not done.

the Login ID and Password is given down below:
    Username: "delhi",
    password: "pass123"

to enter into the React application.