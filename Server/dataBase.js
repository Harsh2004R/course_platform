const mongoose = require("mongoose");
require("dotenv").config()
const URL = process.env.DATA_BASE_URL;
const connection = mongoose.connect(URL)
module.exports={connection}