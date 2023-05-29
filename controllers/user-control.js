const {ObjectId} = require('mongoose').Types;
const {User, Thought} = require('../models');

module.exports = {
    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            res.json(userObj);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.studentId});

            if (!user) {
                return res.status(404).json({message: 'no user with this Id'});
            }
            res.json(user);
            } catch (err) {
            this.res.status(500).json(err);
        }
    },
    async createUser(req,res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({_id: req.params.userId});

            if (!user) {
                return res.status(404).json({message: 'no user with this ID'});
            }
            res.json({ message: 'user successfully deleted' });
            } catch (err) {
             console.log(err);
            res.status(500).json(err);
         }
     },
     async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            if(!user) {
                res.status(404).json({message:'no user with this ID'});
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }   
 };