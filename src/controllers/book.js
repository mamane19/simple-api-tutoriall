import BookModel from "../models/book.js";

// get a book by id
const getBookById = async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      res.status(404).send({ success: false, message: "book not found" });
    }
    res.status(200).send({ success: true, data: book });
  } catch (e) {
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

// get all books
const getBooks = async (req, res) => {
  try {
    const books = await BookModel.find({});
    if (!books) {
      res.status(404).send({ success: false, message: "books not found" });
    }
    res.status(200).send({ success: true, data: books });
  } catch (e) {
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

// create a book
const createBook = async (req, res) => {
  try {
    const book = await BookModel.create(req.body);
    // add a check layer if the book already exists
    res.status(201).send({ success: true, data: book });
  } catch (error) {
    console.log(error);
  }
};

// update a book
const updateBook = async (req, res) => {
  try {
    let book = await BookModel.findById(req.params.id);
    if (!book) {
      res.status(404).send({
        success: false,
        message: "hey this book of this id does not exist in the db",
      });
    }
    book = await BookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send({ success: true, data: book });
  } catch (e) {
    res.status(500).send({ success: false, message: "internal server error" });
  }
};

// delete a book
const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await BookModel.findById(bookId);
    if (!book) {
      res.status(404).send({
        success: false,
        message: "hey this book of this id does not exist in the db",
      });
    }
    await BookModel.findByIdAndDelete(bookId);
    res.status(200).send({ success: true, data: { message: "book deleted" } });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, message: "something went wrong..." });
  }
};

export { getBookById, getBooks, createBook, updateBook, deleteBook };
