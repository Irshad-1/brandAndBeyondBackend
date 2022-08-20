const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: { type: Number },
        gender: {
            type: String,
            enum: ["male", "female"],
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
