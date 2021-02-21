const { json } = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");


const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHead = req.headers["authorization"];
    const token = authHead && authHead.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.SrKey, (err) => {
        if (err) return res.sendStatus(403);
        next();
    });
};