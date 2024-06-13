let route = require("express").Router();
let apiController = require('../Controller/controller')

route.post("/register",apiController.register)
route.post("/login",apiController.login)

module.exports = route;