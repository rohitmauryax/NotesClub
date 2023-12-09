const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://NotesClub:Maurya2277@cluster0.wmzihpp.mongodb.net/NotesClub?retryWrites=true&w=majority";

const Mongodb = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB", err);
  }
};

module.exports = Mongodb;
