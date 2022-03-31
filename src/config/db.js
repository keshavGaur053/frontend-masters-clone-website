const mongoose = require("mongoose");


module.exports = () => {
    return mongoose.connect(
      "mongodb+srv://keshav:keshav@cluster0.ryt59.mongodb.net/frontendmasters?retryWrites=true&w=majority"
    );
  };