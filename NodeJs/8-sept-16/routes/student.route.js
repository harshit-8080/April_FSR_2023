/*
    1.  Prepare a Router
    2.  Method
    3.  api endpoints
*/

const { getAllStudents } = require("../controllers/student.controller");
const students = require("../models/students.model");

const express = require("express");

const studentRouter = express.Router();

studentRouter.get("/students", getAllStudents);

module.exports = studentRouter;
