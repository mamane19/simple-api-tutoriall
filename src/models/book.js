import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    require: true,
  },
  year: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  author: {
    type: String,
    require: false,
  },
});

const BookModel = mongoose.model("BookModel", bookSchema);

export default BookModel;
