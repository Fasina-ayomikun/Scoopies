import mongoose from "mongoose";
import { models, model } from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your full name"],
  },

  email: {
    type: String,
    unique: true,
    required: [true, "Please provide an email"],
  },
  password: {
    type: String,
  },

  loggedInWithPassword: {
    type: Boolean,
    required: [true, "Please provide the login method"],
  },
  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "admin"],
    },
  },
});

const User = models?.User || model("User", UserSchema);
export default User;
