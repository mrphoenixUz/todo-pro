import { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit, onComplete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleSave = () => {
    if (!editedTitle.trim()) return;
    onEdit(todo.id, editedTitle);
    setIsModalOpen(false);
  };

  return (
    <div
      className={`flex justify-between items-center p-3 border-b ${
        todo.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      <span
        className={`flex-grow break-words ${
          todo.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-yellow-500 hover:text-yellow-600"
        >
          ✏️
        </button>
        <button
          onClick={onComplete}
          className="text-green-500 hover:text-green-600"
        >
          ✅
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-600"
        >
          ❌
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white shadow-lg p-4 rounded-md w-96">
            <h3 className="mb-3 font-bold text-lg">Edit Todo</h3>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="p-2 border rounded-md w-full"
              autoFocus
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
