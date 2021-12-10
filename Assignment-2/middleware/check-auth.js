import User from '../model/register.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const checkauth = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		console.log('this is token', token);

		const varifyToken = jwt.verify(token, process.env.TOKEN_KEY);
		if (varifyToken) {
			next();
		} else {
			res.status(401).json({ message: 'invalid auth' });
		}
	} catch (err) {
		res.status(401).json({ message: 'invalid auth' });
	}
};

export default checkauth;
