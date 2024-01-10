import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./BookSlice";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BookView = () => {
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
    toast.success("Successfully Deleted");
  };

  return (
    <div className="flex justify-center items-center">
      <Toaster></Toaster>
      <div className="overflow-x-auto w-2/3">
        <table className="table table-lg">
          {/* head */}
          <thead>
            <tr>
              <th className="text-lg">Name</th>
              <th className="text-lg">Author</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book) => {
                const { id, name, author } = book;
                return (
                  <tr key={id}>
                    <td className="text-lg">{name}</td>
                    <td className="text-lg">{author}</td>
                    <td>
                      <Link to={"/edit-book"} state={{ id, name, author }}>
                        <button className="btn btn-outline btn-warning">
                          Edit
                        </button>
                      </Link>{" "}
                      <button
                        className="btn btn-outline btn-error"
                        onClick={() => handleDelete(book.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookView;
