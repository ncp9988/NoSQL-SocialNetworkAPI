const { Schema } = require('mongoose');
const timestamp = require('../utils/index');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        require: true,
        maxLength: 280
    },
    username: {
        type: String,
        require: true
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

// const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;