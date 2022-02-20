const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
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
        get: datetime => timestamp(datetime)
    },

},
{
    toJSON:{
        getters:true
    },
    id:false
}
);

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;