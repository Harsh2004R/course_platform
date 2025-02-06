const { CourseModel } = require("../Models/courses.model.js");

const addCourse = async (req, res) => {
    try {
        const { name } = req.body;

        // Checking if course already exists
        const existingCourse = await CourseModel.findOne({ name });

        if (existingCourse) {
            return res.status(400).json({ message: "Course already exists" });
        }
        const newCourse = new CourseModel(req.body);
        await newCourse.save();
        res.status(201).json({ message: "Course added successfully", course: newCourse.name });
    } catch (error) {
        res.status(500).json({ message: "Error adding course", error: error.message });
    }
}




const getCourse = async (req, res) => {
    try {
        const { id } = req.params; // Geting ID from URL params...,
        const course = await CourseModel.findById(id);

        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving course", error: error.message });
    }
};




module.exports = {
    addCourse, getCourse
}