export default function History({ records, userName }) {
  const recs = Array.isArray(records) ? records : [];

  if (recs.length === 0) {
    return (
      <div className="mt-6 bg-white p-4 rounded-md shadow text-center text-gray-500 shadow-xl">
        {userName && (
          <div className="mb-2 text-yellow-600 font-semibold">
            History for {userName}
          </div>
        )}
        No claim history yet.
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white p-4 rounded-md shadow">
      {userName && <h2 className="text-lg font-semibold mb-2">History</h2>}

      <ul className="space-y-2 max-h-48 overflow-y-auto">
        {recs.map((r) => {
          const dt = new Date(r.claimedAt);
          const dateStr = dt.toLocaleDateString();
          const timeStr = dt.toLocaleTimeString();
          return (
            <li
              key={r._id}
              className="flex items-center justify-between border-b last:border-none pb-2"
            >
              <div className="text-sm text-gray-700">
                <span className="font-medium">{dateStr}</span>{" "}
                <span>{timeStr}</span>
              </div>

              <div className="text-sm text-yellow-600 font-medium">
                {userName} was rewarded
              </div>

              <div className="text-sm text-yellow-600 font-semibold">
                +{r.points} pts
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
