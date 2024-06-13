let route = require("express").Router();
let apiController = require('../Controller/controller')

route.post("/register",apiController.register)

module.exports = route;