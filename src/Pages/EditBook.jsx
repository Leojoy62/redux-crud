import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "../Features/Books/BookSlice";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.id);
  const [newName, setNewName] = useState(location.state.name);
  const [newAuthor, setNewAuthor] = useState(location.state.author);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEditBook = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, newName, newAuthor }));
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h2>Edit Book</h2>
      <input
        type="text"
        placeholder="Name"
        value={newName}
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => setNewName(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="Author"
        value={newAuthor}
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => setNewAuthor(e.target.value)}
      />{" "}
      <br />
      <br />
      <button className="btn btn-success" onClick={handleEditBook}>
        Edit Book
      </button>
    </div>
  );
};

export default EditBook;
