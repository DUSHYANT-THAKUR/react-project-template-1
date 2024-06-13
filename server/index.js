let express = require('express')
let app = express();
let cors = require('cors')

let routes = require("./router/route")
let port = 8080;

app.use(cors({origin:["http://localhost:3000","http://localhost:3001"]}))
app.use(express.urlencoded());
app.use(express.json())
app.use(routes)

app.listen(port,()=>{
    console.log('running on port '+port)
})
