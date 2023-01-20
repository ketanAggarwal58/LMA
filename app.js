const express = require("express");
const { port } = require('./config');

// by @ketanAggarwal58

const app = express();

// importing Routes;
const signupRoute = require("./router/signup");
const loginRoute = require("./router/signin");
const scoreRoute = require("./router/score");
const questionRoute = require("./router/quizQuestions");
const quizRoute = require("./router/quizeCreatation");


// Middlewars;
app.use(express.json());

// API Routes

app.use('/auth/signup', signupRoute);
app.use('/auth/login', loginRoute);
app.use('/quiz', quizRoute);
app.use('/quiz/test', questionRoute);
app.use('/quiz/test', scoreRoute);


app.get('/', (req, res)=>{
    res.send('Server is Up and Running.....!');
});

app.listen(port, () => {
    console.log('Server Started...!');
});