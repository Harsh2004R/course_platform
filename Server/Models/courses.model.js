const mongoose = require("mongoose");
const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: String,
            required: true
        },
        eligibility: {
            type: String,
            required: true
        },
        course_duration: {
            type: String,
            required: true
        },
        opportunities: [
            {
                type: String
            }
        ],
        detailedDescription: {
            lpa: {
                type: String,
                required: true
            },
            tech_images: [
                {
                    type: String
                }
            ],
            reviews: [
                {
                    comments: {
                        type: String
                    }
                },
                {
                    reviewers_images: [
                        {
                            type: String
                        }
                    ]
                },
            ],
            companie_images: [
                {
                    type: String
                }
            ],
            role: {
                type: String,
                required: true
            }

            // Schema can be changed any time........


        }
    },
    { timestamps: true }
);
const CourseModel = mongoose.model("course", courseSchema);
module.exports = { CourseModel }
