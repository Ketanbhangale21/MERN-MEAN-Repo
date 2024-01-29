const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ExpressApi");

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    emailid: String,
    password: String,
  },
  { versionKey: false }
);

var UserModel = mongoose.model("users", userSchema, "users");
module.exports = UserModel;
