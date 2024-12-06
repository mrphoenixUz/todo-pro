import { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit, onComplete }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditSave = () => {
    if (!editedTitle.trim()) return;
    onEdit(todo.id, editedTitle);
    setIsEditModalOpen(false);
  };

  return (
    <div
      className={`flex justify-between items-center p-3 border-b ${todo.completed ? "bg-green-100" : "bg-white"
        }`}
    >
      <span
        className={`flex-grow break-words ${todo.completed ? "line-through text-gray-500" : ""
          }`}
      >
        {todo.title}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => setIsEditModalOpen(true)}
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
          onClick={() => setIsDeleteModalOpen(true)}
          className="text-red-500 hover:text-red-600"
        >
          ❌
        </button>
      </div>

      {/* Edit Modal Start */}
      {isEditModalOpen && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditSave();
          }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
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
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                // onClick={handleEditSave}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
      {/* Edit Modal End */}

      {/* Delete Confirmation Modal Start */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white shadow-lg p-4 rounded-md w-96">
            <h3 className="mb-4 font-bold text-lg">Are you sure?</h3>
            <p className="mb-4 text-gray-600">
              Do you really want to delete this task?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-md text-white"
              >
                No
              </button>
              <button
                onClick={onDelete}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal End */}
    </div>
  );
};

export default TodoItem;
