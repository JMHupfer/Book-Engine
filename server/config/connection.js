const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://jmhupfer:Germanboy_321@cluster2.fjeqjsy.mongodb.net/books_DB?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
