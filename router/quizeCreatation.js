const router = requrie("express").Router();
const db = require("../DB");
const decode = requrie("jwt-decode");

router.post('/new', async (req, res) => {

    const token = req.header('auth-token');
    const decode = decode(token);
    
    let sql = `INSERT INTO quiz(QuizID, QuizName, CreatorEmail) VALUES(?, ?, ?);`;
    const quizID = req.body.QuizID
    const quizName = req.body.quizName

    try{
        db.con.connect(function(err) {
            if (err) throw err;
            console.log("Database Connected! :)");
            db.con.query(sql, ([quizID, quizName, decode.email]), async (err, rows) => {
                if (err) throw err;
                res.send({"msg":"Quiz Created Successfully!"});
            })
        })
    }catch(error){
        console.log("Error: "+error);
    }
});