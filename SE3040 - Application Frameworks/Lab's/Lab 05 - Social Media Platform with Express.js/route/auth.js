import express from 'express'
import jwt from 'jsonwebtoken'


const router = express.Router();

const user = {
     id: 1,
    username: 'admin',
    password: '1234'
};


const JWT_SECRET = 'secret';

router.post("/", async(req, res) => {
    const { username, password } = req.body;

    if(username === user.username && password === user.password){
        const payload = {id:user.id, username:user.username};
        const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
        res.json({token});
    }else{
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

export default router;