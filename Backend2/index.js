const express = require('express');
const userRoutes = require('./routers/userRouter');
const connectDB = require('./config/db');

const app = express();
const port = 5000;

app.use(express.json());

connectDB();

app.use('/api', userRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
