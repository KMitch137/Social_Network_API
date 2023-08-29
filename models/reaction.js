const { Schema } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => {
        return new Types.ObjectId
      }
    },
    reactionBody: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    }
  },
  {
    id: false,
  }
);


module.exports = reactionSchema;