const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/pep");
        console.log("Database Connected");
    } catch (err) {
        console.log("Database not connected", err);
        process.exit(1);
    }
};

module.exports = connectDB;
