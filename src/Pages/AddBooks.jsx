import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBooks } from "../Features/Books/BookSlice";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddBook = () => {
    const book = { id: uuidv4(), name, author };
    dispatch(addBooks(book));

    navigate("/", { replace: true });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold my-5">Add Book</h2>
      <input
        type="text"
        placeholder="Name"
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="Author"
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => setAuthor(e.target.value)}
      />{" "}
      <br />
      <br />
      <button className="btn btn-success" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
};

export default AddBooks;
