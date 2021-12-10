import User from '../model/register.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

export const userLogin = async (req, res) => {
	// Our register logic starts here
	// const userData = await User.find({ email: req.body.email });
	try {
		User.find({ email: req.body.email })
			.exec()
			.then(user => {
				if (user.length < 1) {
					return res.status(401).json({ message: 'user not exist' });
				}
				bcrypt.compare(req.body.password, user[0].password, (err, result) => {
					if (!result) {
						return res.status(401).json({ message: ' enter valid password' });
					}
					if (result) {
						const token = jwt.sign(
							{ user_id: user._id, email: user.email },
							process.env.TOKEN_KEY,
							{
								expiresIn: '2h',
							}
						);

						res.status(201).json({ userData: user, auth: token });
						// console.log('this is auth userdata', user);
					}
				});
			})
			.catch(err => {
				res.status(500).json({ error: err });
			});
	} catch (err) {
		console.log(err);
	}
};
