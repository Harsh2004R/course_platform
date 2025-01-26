// const mongoose = require("mongoose");
// const UserSchema = mongoose.Schema({
//     full_name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     contact_no: { type: Number, required: true },
//     profile_picture: { type: String },
//     course: [],
    
    
// })

// const UserModel = mongoose.model("user", UserSchema);
// module.exports = { UserModel } 


//  Production level user collection updated before...
const mongoose = require("mongoose");

// Define the schema
const UserSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters long"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Ensures no duplicate emails
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [4, "Password must be at least 4 characters long"],
    },
    contact_no: {
      type: Number,
      required: [true, "Contact number is required"],
      unique: true,
      match: [/^\d{10}$/, "Contact number must be a 10-digit number"],
    },
    profile_picture: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6Pf2w2WEjOMMLauB41tFNcCC72_U_j3lvw&s", // Default profile picture URL
    },
    course: [
      {
        type: String,
        trim: true,
      },
    ],
    role: {
      type: String,
      enum: ["user", "admin"], // Restricts roles to specific values
      default: "user", // Default role
    },
    isActive: {
      type: Boolean,
      default: true, // User is active by default
    },
  },
  {
    timestamps: true,
  }
);

// Add an index to improve query performance for frequently searched fields
UserSchema.index({ email: 1, contact_no: 1 });

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
