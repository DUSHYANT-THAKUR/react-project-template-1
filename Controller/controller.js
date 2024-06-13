let tbl_emp = require("../Models/model")
module.exports.register = async (req, res) => {
    try {
        let {id,email,password} = req.body;
        let details = {
            id,
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