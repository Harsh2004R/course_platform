const express = require("express");
const { addCourse, getCourse } = require("../Controllers/Courses.js");
const CourseRouter = express.Router();
CourseRouter.use(express.json());










CourseRouter.post("/add/courses", addCourse);
CourseRouter.get("/get/courses/:id", getCourse);

module.exports = { CourseRouter };




