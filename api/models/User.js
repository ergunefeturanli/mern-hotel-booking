const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!(value.length > 3)) {
        throw new Error("Password's length must be greater than 3");
      }
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password cannot contain 'password'");
      }
    },
  },
  isAdmin: {
    type: Boolean,
    default: true,
  },
  tokens: [{
    token: {
        type: String
    }
}],
});

//Hide Password From Response
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};


UserSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username })

  if (!user) {
      throw new Error('Unable to login')
  }

  const isMatch = await password === user.password

  if (!isMatch) {
      throw new Error('Unable to login')
  }

  return user
}


const User = mongoose.model("User", UserSchema);
module.exports = User
