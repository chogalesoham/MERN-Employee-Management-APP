const Router = require("express").Router();
const { CreateEmployee } = require("../controllers/employee-controllers");

Router.post("/", CreateEmployee);

module.exports = Router;
