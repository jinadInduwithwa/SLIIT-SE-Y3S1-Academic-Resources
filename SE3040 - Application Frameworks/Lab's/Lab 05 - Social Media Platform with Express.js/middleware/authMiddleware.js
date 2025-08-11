import jwt from 'jsonwebtoken'

const JWT_SECRET = 'secret';

export function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
    }) 
}