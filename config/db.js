const mongoose = require('mongoose');

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI,
        {
            useUnifiedTopology: true
        });

    console.log(`Mongo db Connected: ${conn.connection.host}`);
}

module.exports = connectDB;