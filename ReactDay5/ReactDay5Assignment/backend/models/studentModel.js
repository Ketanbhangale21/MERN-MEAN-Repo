const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ExpressApi");

var Schema = mongoose.Schema;

var studentSchema = new Schema(
  {
    stdid: Number,
    name: String,
    email: String,
    contact: Number,
    ftmarks: Number,
    stmarks: Number,
    remark: String,
  },
  { versionKey: false }
);

var StudentModel = mongoose.model("student", studentSchema, "student");

module.exports = StudentModel;
