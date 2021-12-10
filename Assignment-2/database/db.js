import mongoose from 'mongoose';

const Connection = async (username, password) => {
	const URL = `mongodb://${username}:${password}@blogsite-shard-00-00.acdg6.mongodb.net:27017,blogsite-shard-00-01.acdg6.mongodb.net:27017,blogsite-shard-00-02.acdg6.mongodb.net:27017/PROJECT?ssl=true&replicaSet=atlas-l18lws-shard-0&authSource=admin&retryWrites=true&w=majority`;

	try {
		await mongoose.connect(URL, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useFindAndModify: false,
		});
		console.log('Database connected successfully');
	} catch (error) {
		console.log('Error while connecting to the database ', error);
	}
};

export default Connection;
