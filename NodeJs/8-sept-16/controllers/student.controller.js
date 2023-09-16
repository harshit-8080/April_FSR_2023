const students = require("../models/students.model");

const getAllStudents = (req, res) => {
  return res.json({ message: students });
};

const deletAStudents = (req, res) => {
  return res.json({ message: "Deleted a Students Successfully" });
};

module.exports = {
  getAllStudents,
  deletAStudents,
};
