export default function RewardModal({ points, open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm mx-4">
        <h2 className="text-2xl font-bold mb-2">🎉 Congratulations!</h2>
        <p className="text-lg mb-6">
          You have been awarded <span className="font-semibold text-yellow-600">{points}</span> points.
        </p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
        >
          OK
        </button>
      </div>
    </div>
  );
}