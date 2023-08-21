const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      // add unique and trimmed,
    },
    email: {
      type: String,
      required: true,
      // add unique and match valid email address,
    },
    thoughts: {
      // add array of _id values referencing the Thought model
    },
    friends: {
      // add array of _id values referencing the User model (self reference)
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
 