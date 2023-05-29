const { thought, user } = require('../models');

module.exports = {
    async getThought(req, res) {
        try {
            const thought = await Thought.find();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });  

            if(!thought) {
              return res.status(404).json({ message: 'no thought with this ID' });
         }
            res.json(thought);
        } catch (err) {
           this.res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({_id: req.params.thoughtId});

             if (!thought) {
                res.status(404).json({message: 'no thought with this ID'};)
             }
             await User.deleteMany({_id: { $in: thought.user} });
             res.json({message: 'thought and user deleted'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {_id: req.params.thoughtId},
                {$set: req.body},
                {runValidators: true, new: true}
            );
            if(!thought) {
                res.status(404).json({message:'no thought with this ID'});
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    } 
};