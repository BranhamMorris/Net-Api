const {Schema, model, Types} = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Type.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MM DD, YYYY [at] hh:mm')
        }
    },
    {
        toJSON: {
            getters: true
        }
    });
    
    const thoughtsSchema = newSchema(
        {
            thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280 
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (createdAtVal) => moment(createdAtVal).format('MM DD, YYYY [at] hh:mm')
            },
            username: {
                type: String,
                required: true 
            },
            reactions: 
                [reactionSchema]
            },
            {
                toJSON: {
                    virtuals: true,
                    getters: true
                },
                id: false
            })
    
            thoughtsSchema.virtual('reactionCount').get(function() {
                return this.reactions.length;
            });
    
            const thoughts = model('thoughts', thoughtsSchema);
    
            module.exports = thoughts;