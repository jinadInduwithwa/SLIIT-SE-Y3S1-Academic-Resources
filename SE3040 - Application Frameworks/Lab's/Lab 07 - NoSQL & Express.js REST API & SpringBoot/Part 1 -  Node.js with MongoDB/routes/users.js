import express from 'express';
import User from '../models/user.js'

const router = express.Router();

// POST route to create a new user
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        res.status(201).send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    } 
});

// GET route to fetch all users
router.get('/', async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET route to fetch a single user by id
router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send("user not found");
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// PATCH route to update a user by id
router.patch('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});
        if (!updatedUser) {
            res.status(404).send("user not found");
        }
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

// DELETE route to delete a user by id\
router.delete('/:id', async(req, res) => {
    try {
        const deleledUser = await User.findByIdAndDelete(req.params.id);
        if (!deleledUser) {
            res.status(404).send("user not found");
        }
        res.status(200).send({ message: 'user deleted successfully ', name: deleledUser.name});
    } catch (error) {
        res.status(500).send(error);
    }
})

export default router;