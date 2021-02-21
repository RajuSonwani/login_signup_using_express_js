module.exports = (req,res)=>{
    const jwt = require("jsonwebtoken");
    const bcrypt = require("bcryptjs");
    
    const userId = req.body.userId;
    const password = req.body.password;
    knex.select().from("type2Login").where("userId",userId)
        .then(rows=>{
            // console.log(rows);
            if(rows.length!==0){
                // console.log(rows[1].password);
                const checkPass = bcrypt.compareSync(password,rows[0].password);
                console.log(checkPass);
                if(checkPass) {
                    
                    const token=jwt.sign({Id:userId},process.env.SrKey,{expiresIn:"6m"});
                    return res.json({welcome:userId,token:token})
                };
                return res.send("Invalid password.!");
            };
            return res.send("SignUp first..!");
        })
}