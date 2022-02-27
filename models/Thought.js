const { Schema, model } = require('mongoose');
const timestamp = require('../utils/index');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        require: "This is required",
        minlength: 1,
        maxlength: 280,
    },
    createAt: {
        type: Date,
        default: Date.now,
        get: datetime => timestamp(datetime),
    },
    username: {
        type: String,
        require: 'Username is required',
    },
    reactions: [reactionSchema]
    
},
{
    toJSON:{
        getters:true
    },
    id:false
}
);
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
})


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;