import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialBookState = {
  books: [
    { id: uuidv4(), name: "Our Bangladesh", author: "Leonard Joy" },
    { id: uuidv4(), name: "JavaScript", author: "Jason James" },
  ],
};

export const BookSlice = createSlice({
  name: "books",
  initialState: initialBookState,
  reducers: {
    showBooks: (state) => state,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id != id);
    },
    editBook: (state, action) => {
      const { id, newName, newAuthor } = action.payload;
      const isExist = state.books.filter((book) => book.id === id);

      if (isExist) {
        isExist[0].name = newName;
        isExist[0].author = newAuthor;
      }
    },
  },
});

export const { showBooks, addBooks, deleteBook, editBook } = BookSlice.actions;
export default BookSlice.reducer;
