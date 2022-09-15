const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userCoachSchema = mongoose.Schema({
    nameCoach: {
        type: String,
        required: true,
        minlength: [3, "First Name must be more than 3 characters"],
        maxlength: [99, "Dude, chill out"]
    },
    emailAddressCoach:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    passwordCoach: {
        type: String,
        required: true,
        minlength: [6, "Your password is too weak... send it on some hill sessions a come back with more characters"]
    }
},
{
    timestamps: true
});

userAthleteSchema.methods.verifyPassword = function(password) {
    console.log("password from User: " + password);
    console.log("password from Database: " + this.password)
    return bcrypt.compareSync(password, this.password);
}


const UserCoach = mongoose.model("UserCoach", userCoachSchema);

module.exports = UserCoach;