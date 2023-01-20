const db = require("../DB");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const { tokens } = require('../config');
const router = require("express").Router();

// @api: http://localhost:port/auth/login
// @type Post Api

router.post('/login', async (req, res) => {

    const UserEmail = req.body.UserEmail;
    const UserPassword = req.body.UserPassword;

    let sql = `SELECT * FROM users WHERE UserEmail = ?;`;
    var user;

    try{
        // database connection 
        db.con.connect(function(err) {
            if (err) throw err;
            console.log("Database Connected! :)");
            db.con.query(sql, ([UserEmail]), async (err, rows) => {
                if (err) throw err;
                // console.log("Row inserted with id = "+ rows.insertId); 
                user = rows;

                // password verfication
                const validPass = await bcrypt.compare(UserPassword, user[0].UserPassword);
                if(!validPass) return res.status(400).send('Invalid Password try again');

                try{
                    const token = jwt.sign({ 
                        id: user[0].UserID,
                        email: user[0].UserEmail, 
                        exp: Math.floor(Date.now() / 1000) + (60*1), 
                    }, 
                    tokens);
                    res.header('auth-token', token).status(201).json({'access-token': token});
                }catch(error){
                    console.log(error);
                }
            }); 
        });

    }catch(exception){
        console.log("error: "+exception);
    }
});