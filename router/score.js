const router = requrie("express").Router();
const db = require("../DB");
const decode = requrie("jwt-decode");

router.post('/score/:id', async (req, res) => {

    const token = req.header('auth-token');
    const decode = decode(token);
    
    let sql = `INSERT INTO score(UserID, QuizID, score) VALUES(?, ?, ?);`;
    const score = req.body.score

    try{
        db.con.connect(function(err) {
            if (err) throw err;
            console.log("Database Connected! :)");
            db.con.query(sql, ([decode.id, req.params.id, score]), async (err, rows) => {
                if (err) throw err;
                res.send({"msg":"Score Saved Successfully"});
            })
        })
    }catch(error){
        console.log("Error: "+error);
    }
});


router.get('/score/:id', async (req, res) => {

    const token = req.header('auth-token');
    const decode = decode(token);
    
    let sql = `SELECT * FROM score WHERE USERID = ?;`;
    const score = req.body.score

    try{
        db.con.connect(function(err) {
            if (err) throw err;
            console.log("Database Connected! :)");
            db.con.query(sql, ([decode.id]), async (err, rows) => {
                if (err) throw err;
                res.send({"msg":"Score Saved Successfully"});
            })
        })
    }catch(error){
        console.log("Error: "+error);
    }
});