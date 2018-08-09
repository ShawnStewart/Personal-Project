const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  friends: [
    {
      friend: this,
      status: {
        type: String
      },
      date: {
        type: Date
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
