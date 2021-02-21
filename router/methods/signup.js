module.exports = (req, res) => {
    const bcrypt = require("bcryptjs");

    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const gender = req.body.gender;
    const userId = req.body.userId;
    const pass  = req.body.password;
    const hassPass = bcrypt.hashSync(pass,10);
    console.log(hassPass);
    // console.log(knex);
    knex.select().from("type2Login").where("userId",userId)
        .then(rows=>{
            console.log(rows.length);
            if(rows.length ===0){
                knex("type2Login").insert({firstName:firstName,lastName:secondName,gender:gender,userId:userId,password:hassPass})
                    .then(()=> console.log("data inserted"))
                    .catch((err)=> res.json(err))
            }else{
                res.send("userId already exist")
            }
        }
        ).catch(err=> res.json(err))
}
