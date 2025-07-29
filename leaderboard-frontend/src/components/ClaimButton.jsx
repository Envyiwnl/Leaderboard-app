export default function ClaimButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`w-full mb-4 px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400
        ${loading
          ? 'bg-yellow-300 cursor-not-allowed'
          : 'bg-yellow-500 hover:bg-yellow-600'}`}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <span className="animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-white mr-2" />
          Claiming...
        </span>
      ) : (
        'Claim Points'
      )}
    </button>
  );
}