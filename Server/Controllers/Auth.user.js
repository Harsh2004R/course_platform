const { UserModel } = require("../Models/user.model.js")
const bcrypt = require("bcrypt");
require("dotenv").config()
const jwt = require("jsonwebtoken");
// User Registration
const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // Check if user already exists by email or phone
        const existingUser = await UserModel.findOne({
            $or: [{ email }, { phone }],
        });

        if (existingUser) {
            return res
                .status(400)
                .json({ message: "User with this email or phone already exists" });
        }

        // Hash password and saving the user
        const hashedPassword = await bcrypt.hash(password, 8);
        const newUser = new UserModel({ full_name: name, email: email, password: hashedPassword, contact_no: phone });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};


















// User Login
const loginUser = async (req, res) => {
    try {
        const { identifier, password } = req.body; // 'identifier' can be email or phone

        // Validate input
        if (!identifier || !password) {
            return res.status(400).json({ message: "Please provide email/phone and password" });
        }

        // Search for user by email or phone
        const query = { $or: [{ email: identifier }, { contact_no: identifier }] };
        const user = await UserModel.findOne(query);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};


const usersData = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users); // Send the list of users as a response
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};







module.exports = { registerUser, loginUser, usersData };
