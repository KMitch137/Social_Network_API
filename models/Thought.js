const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      // add limit of 1 - 280 char
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // use a getter method to format the timestamp on query
    },
    userName: {
      // make sure its the user that created this thought
      type: String,
      required: true,
    },
    reactions: {
      // add array of nested documents created with the reactionSchema
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reaction count').get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
