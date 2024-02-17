import { writeFileSync } from 'fs';
import { connect, Schema, model } from 'mongoose';

// Connect to MongoDB
connect('mongodb+srv://sajeethan1902:sajeethan@sliot.pgr6zuf.mongodb.net/SLIoT', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define schema for the data
const dataSchema = new Schema({
  // Define schema fields
  slot: String,
  status: Boolean
});

// Define model for the parkSlot collection
const ParkSlot = model('ParkSlot', dataSchema, 'parkSlot');

// Function to fetch data from MongoDB and update JSON file
const updateJsonFile = async () => {
  try {
    // Fetch data from MongoDB
    const fetchedData = await ParkSlot.find();

    // Write data to JSON file
    writeFileSync('Parking_slots.json', JSON.stringify(fetchedData));

    console.log('JSON file updated successfully');
  } catch (error) {
    console.error('Error updating JSON file:', error);
  }
};

// Run the function initially
updateJsonFile();

// Schedule the function to run periodically (e.g., every hour)
// You can adjust the cron schedule as needed
setInterval(updateJsonFile, 5*1000); // Every hour
