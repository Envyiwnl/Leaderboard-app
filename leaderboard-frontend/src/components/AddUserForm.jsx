import { useState } from "react";

export default function AddUserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [touched, setTouched] = useState(false);

  // checking input field via state
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setTouched(true);
      return;
    }
    onAdd(name.trim());
    setName("");
    setTouched(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="Add user..."
          className="flex-grow px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-montserrat"
        />
        <button
          type="submit"
          disabled={!name.trim()}
          className={`px-4 py-2 font-medium rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-500
            ${
              name.trim()
                ? "bg-green-600 text-white hover:bg-green-700" // keeping the button green if content inside the input field
                : "bg-gray-300 text-gray-500 cursor-not-allowed" // keeping the button gray if no content inside the input field
            }`}
        >
          Add
        </button>
      </div>
      {touched && !name.trim() && (
        <p className="mt-2 text-sm text-red-600 text-center">
          Please enter a name.
        </p>
      )}
    </form>
  );
}
