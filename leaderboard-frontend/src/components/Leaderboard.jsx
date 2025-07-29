export default function Leaderboard({ board }) {
  return (
    <div className="bg-white p-4 rounded-md shadow-xl">
      <h2 className="text-lg font-semibold mb-4 text-center">Leaderboard</h2>
      <div className="max-h-64 overflow-y-auto">
        <table className="table-fixed w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="w-1/12 py-2 text-center border-b">Rank</th>
              <th className="w-7/12 py-2 text-center border-b">Name</th>
              <th className="w-4/12 py-2 text-center border-b">Points</th>
            </tr>
          </thead>
          <tbody>
            {board.map(u => (
              <tr key={u._id} className="hover:bg-gray-50">
                <td className="w-1/12 py-2 text-center">{u.rank}</td>
                <td className="w-7/12 py-2 text-center">{u.name}</td>
                <td className="w-4/12 py-2 text-center">{u.totalPoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
