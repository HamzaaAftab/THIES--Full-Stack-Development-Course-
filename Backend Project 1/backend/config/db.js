const mongoose = require('mongoose');

// Function to establish MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // This is necessary to handle new MongoDB connection string parsers
      useUnifiedTopology: true, // For handling MongoDB's new topology engine
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
