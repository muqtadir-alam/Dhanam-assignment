import * as mailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
export const GreetMail = async props => {
	const { full_name, email } = props;

	try {
		var transporter = mailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.MAIL_USERNAME,
				pass: process.env.MAIL_PASSWORD,
			},
		});

		var mailOptions = {
			from: process.env.MAIL_USERNAME,
			to: email,
			subject: 'System generated mail Node js',
			html: `<h1 style='color:green;'>Welcome ${full_name}</h1>
			  <h6>Thank you so much for joining  as one of our newest members. It's a pleasure to welcome you to our group! </h6>`,
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});

		const mailResponse = {
			message: 'mail sent succefully to your register email Id',
		};
		return mailResponse;
	} catch (err) {
		const mailError = {
			message: 'Problem sending to email to your Register emial Id',
			Error: err,
		};
		console.log(err);
		return mailError;
	}
};
