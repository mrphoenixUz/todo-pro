import { useState } from "react";
import { toast } from "react-toastify";

const AddTodo = ({ onAdd }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleAdd = () => {
    if (!todoTitle.trim()) {
      toast.info("Todo title cannot be empty!", {
        position: "top-center",
      });
      return;
    }
    onAdd(todoTitle);
    setTodoTitle("");
  };

  return (
    <form typeof="submit" className="flex items-center gap-2" onSubmit={(e) => {e.preventDefault()} }>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
        className="flex-grow shadow-sm p-2 border after:border-none rounded-md w-fit"
        placeholder="Enter your todo..."
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
