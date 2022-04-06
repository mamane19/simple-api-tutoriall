import Router from "express";

import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.js";

const router = Router();

router.get("/all", getBooks);
router.get("/:id", getBookById);
router.post("/create", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
