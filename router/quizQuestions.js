const router = requrie("express").Router();
const db = require("../DB");
const decode = requrie("jwt-decode");

router.post('/:id', async (req, res) => {

    const token = req.header('auth-token');
    const decode = decode(token);
    
    let sql = `INSERT INTO quiz(QuizQuestion, QuizAnswer1, QuizAnswer2, QuizAnswer3, QuizAnswer4, CorrectAnswer, QuizID) VALUES(?, ?, ?, ?, ?, ?, ?);`;
    const quizQuestion = req.body.QuizQuestion
    const quizAnswer1 = req.body.quizAnswer1
    const quizAnswer2 = req.body.quizAnswer2
    const quizAnswer3 = req.body.quizAnswer3
    const quizAnswer4 = req.body.quizAnswer4
    const correctAnswer = req.body.correctAnswer

    try{
        db.con.connect(function(err) {
            if (err) throw err;
            console.log("Database Connected! :)");
            db.con.query(sql, ([quizQuestion, quizAnswer1, quizAnswer2, quizAnswer3, quizAnswer4, correctAnswer, req.params.id]), async (err, rows) => {
                if (err) throw err;
                res.json({"msg":"Quiz Question Created Successfully!"});
            })
        })
    }catch(error){
        console.log("Error: "+error);
    }
});

router.patch('/:id', async (req, res) => {

    const token = req.header('auth-token');
    const decode = decode(token);
    
    let sql = `UPDATE quiz SET QuizQuestion = ?, QuizAnswer1 = ?, QuizAnswer2 = ?, QuizAnswer3 = ?, QuizAnswer4 = ?, CorrectAnswer =?, WHERE QuizID = ?;`;
    const quizQuestion = req.body.QuizQuestion
    const quizAnswer1 = req.body.quizAnswer1
    const quizAnswer2 = req.body.quizAnswer2
    const quizAnswer3 = req.body.quizAnswer3
    const quizAnswer4 = req.body.quizAnswer4
    const correctAnswer = req.body.correctAnswer

    try{
        db.con.connect(function(err) {
            if (err) throw err;
            console.log("Database Connected! :)");
            db.con.query(sql, ([quizQuestion, quizAnswer1, quizAnswer2, quizAnswer3, quizAnswer4, correctAnswer, req.params.id]), async (err, rows) => {
                if (err) throw err;
                res.json({"msg":"Quiz Question Updated Successfully!"});
            })
        })
    }catch(error){
        console.log("Error: "+error);
    }
});

router.get('/:id', async (req, res) => {

    const token = req.header('auth-token');
    const decode = decode(token);
    
    let sql = `SELECT * FROM quizQuestions Where QuizID = ?`;
    

    try{
        db.con.connect(function(err) {
            if (err) throw err;
            console.log("Database Connected! :)");
            db.con.query(sql, ([req.params.id]), async (err, rows) => {
                if (err) throw err;
                res.json(rows);
            })
        })
    }catch(error){
        console.log("Error: "+error);
    }
});