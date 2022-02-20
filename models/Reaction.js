const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    reactionId: {
        // Use Mongoose's ObjectId data type
        //Default value is set to a new ObjectId
    },
    reactionBody: {
        type: String,
        require: 'This is required',
        maxLength: 280
    },
    username: {
        type: String,
        require: 'Username is require'
    },
    createAt: {
        type: Date,
        default: Date.now,
        //Use a getter method to format the timestamp on query
    },

});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;