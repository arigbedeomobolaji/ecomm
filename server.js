// configure the environment variables
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';
import orderRouter from './router/orderRouter.js';
import keys from './config/keys.js';

console.log(process.env.NODE_ENV);
const app = express();
const port = process.env.PORT || keys.PORT;
const dbURL = keys.MONGO_URI;
console.log(dbURL);

// app setting middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connnection
mongoose.connect(dbURL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

// web app backend router handlers
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paystack', (req, res) => {
	res.send(keys.PAYSTACK_CLIENTID || 'paystack_test');
});

app.get('/', (req, res) => {
	res.send("Welcome Let's code");
});

// error handling middleware
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.listen(port, () => console.log(`serve at http://localhost:${port}`));
