const dotenv = require("dotenv");

dotenv.config();

// @details Holds all the vital information from the application.
// @type Configration file

module.exports = {
    port: process.env.PORT,
    host: process.env.HOST,
    user: process.env.USERS,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    tokens: process.env.TOKEN_SECRET,
    forgetToken: process.env.FORGET_SECRET,
}