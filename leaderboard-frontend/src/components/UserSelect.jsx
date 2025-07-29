export default function UserSelect({ users, selected, onChange }) {
  return (
    <div className="mb-4">
      <select
        value={selected}
        onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {users.map(u => (
          <option key={u._id} value={u._id}>
            {u.name} ({u.totalPoints} pts)
          </option>
        ))}
      </select>
    </div>
  );
}