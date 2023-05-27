const {Schema, model} = require('mongoose');


const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true 
        },
        email: {
            type: String,
            required:true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: {

        },
        friends: {

        }

        }); 

        usersSchema.virtual('friendCount').get(function() {
            return this.friends.length;
        })

        const users = model('users', 'usersSchema');
        
        module.exports = users;
  