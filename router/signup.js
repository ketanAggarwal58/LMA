const router = require("express").Router();
const bcrypt = require("bcryptjs");
const db = require("../DB");

// @api: http://localhost:port/auth/signup
// @type Post api

router.post('/signup', async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.UserPassword, salt);

    const firstname = req.body.UserFirstName;
    const lastName = req.body.UserLastName;
    const email = req.body.UserEmail;
    const phoneNo = req.body.UserPhoneNo;
    const countryCode = req.body.UserCountryCode;
    const pass = hashPassword;
    
    let sql = `INSERT INTO users (UserFirstName, UserLastName, UserPhoneNo, UserEmail, UserPassword, UserCountryCode) VALUES (?, ?, ?, ?, ?, ?);`; 

    try{
            db.con.connect(function(err) {
                if (err) throw err;
                console.log("Database Connected! :)");
                db.con_wholesaler.query(sql, ([firstname, lastName, phoneNo, email, pass, '+'+countryCode]), (err, rows) => {
                    if (err) throw err;
                    console.log("Row inserted with id = "+ rows.insertId); 
                    res.json({"msg": "Sign up Sucessfull"});
                });
            });
        }catch(e){
            console.log("error: "+e);
        }
});

module.exports = router;