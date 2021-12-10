import User from '../model/register.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { GreetMail } from './mail-controller.js';
import dotenv from 'dotenv';
dotenv.config();

export const userRegister = async (req, res) => {
	try {
		const { full_name, email, password } = req.body;

		if (!(email && password && full_name)) {
			res.status(400).send({ error: 'All input is required' });
		}

		const oldUser = await User.findOne({ email });

		if (oldUser) {
			return res
				.status(409)
				.send({ error: 'User Already Exist. Please Login' });
		}

		let encryptedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			full_name,

			email: email.toLowerCase(),
			password: encryptedPassword,
		});

		const token = jwt.sign(
			{ user_id: user._id, email },
			process.env.TOKEN_KEY,
			{
				expiresIn: '2h',
			}
		);

		user.token = token;
		if (user) {
			var mailResponse = await GreetMail(req.body);
		}

		res.status(201).json([user, mailResponse]);
	} catch (err) {
		console.log(err);
		res
			.status(500)
			.json({ message: 'Registeration fail try again', Error: err });
	}
};
