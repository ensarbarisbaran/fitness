const AuthSchema = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const user = await AuthSchema.findOne(email)
        if (user) {
            return res.status(500).json({ msg: "böyle bir kullanıcı zaten var" })
        }
        if (password.length < 6) {
            return res.status(500).json({ msg: "şifreniz 6 haneden küçük olmamalı" })
        }
        const passwordHash = await bcrypt.hash(password, 12);

        if (!isEmail(email)) {
            return res.status(500).json({ msg: "email formatı dışında giriş yaptınız." })
        }
        const newUser = await AuthSchema.create({ username, email, passwordHash })



    } catch (error) {

    }
}

const login = async (req, res) => {
    try {

    } catch (error) {

    }
}


function isEmail(emailAdress) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailAdress.match(regex))
        return true;
    else
        return false;
}

module.exports = { register, login };