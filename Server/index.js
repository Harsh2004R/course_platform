const express = require("express");
const { connection } = require("./dataBase.js")
require("dotenv").config()
const cors = require('cors');
const { UserRouter } = require("./Routes/user.Router.js");
const { CourseRouter } = require("./Routes/courses.Router.js");
const app = express();
app.use(express.json());


// Enable CORS for all routes
app.use(cors());
app.get("/", (req, res) => {
    res.status(200).json({ msg: "hello" })
})




app.use("/user", UserRouter);
app.use("/api", CourseRouter);












const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    try {
        console.log(`server is live at port :-${PORT}`)
        await connection;
        console.log("connected to mongoDB")
    } catch (error) {
        console.log(`somthing went wrong with mongo connection -------------------------------------${error}`)
    }
})

