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
    required: true,
    select: false
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
      status: {
        type: String
      },
      date: {
        type: Date
      },
      friend: {
        type: ObjectId,
        ref: "users"
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
