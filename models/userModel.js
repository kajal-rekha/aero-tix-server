const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
            required: true
        }
    },
    { timestamps: true }
);

// signup method
UserSchema.statics.signup = async function (username, email, password) {
    if (!username || !email || !password) {
        throw new Error("All fields must be filled");
    }

    if (!validator.isEmail(email)) {
        throw new Error("Invalid email");
    }

    if (!validator.isStrongPassword(password)) {
        throw new Error(
            "Password is not strong enough (must contain 8+ chars, uppercase, lowercase, number and symbol)"
        );
    }

    const existingUser = await this.findOne({ email });
    if (existingUser) {
        throw new Error("Email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);

    const user = await this.create({
        username,
        email,
        password: hashPass
    });

    return user;
};

// login method
UserSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw new Error("All fields must be filled");
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw new Error("Incorrect email or password");
    }

    console.log(`User found: ${user}`);

    const match = await bcrypt.compare(password, user.password);
    console.log(`Password from request: ${password}`);
    console.log(`Hashed Password from database: ${user.password}`);
    console.log(`Password comparison result: ${match}`);

    if (!match) {
        throw new Error("Incorrect email or password");
        console.log(`Password mismatch for user: ${user.email}`);
    }

    console.log(`Password match for user: ${user.email}`);

    return user;
};

module.exports = mongoose.model("User", UserSchema);
