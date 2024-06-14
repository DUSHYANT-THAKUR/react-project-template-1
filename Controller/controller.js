let tbl_emp = require("../Models/model")
module.exports.register = async (req, res) => {
    try {
        let {name,email,password} = req.body;
        let details = {
            name,
            email,
            password
        }
        let result = await tbl_emp.insertMany([details])
      console.log(result)
        return res.status(200).json(
       {
                result: "Inserted Successfully"
            }
        )
    } catch (err) {
        console.log(err);
        return res.status(500).json(
            {
                message: "Internal Server Error",
                err: err
            }
        )
    }
}
module.exports.login = async (req, res) => {
    try {
        let {email,password} = req.body;
        let result = await tbl_emp.find({email:email,password:password})
        console.log(result)
        if(result.length>0) {
            return res.status(200).json(
                {
                    message: "login Successfully"
                }
            )
        } else {
            return res.status(201).json(
                {
                    message : "Wrong Credential"
                }
            )
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json(
            {
                message: "Internal Server error",
                err: err
            }
        )
    }
}