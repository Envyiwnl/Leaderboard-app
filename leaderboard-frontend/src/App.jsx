import { useState, useEffect } from "react";
import api from "./api";
import AddUserForm from "./components/AddUserForm";
import ClaimButton from "./components/ClaimButton";
import Leaderboard from "./components/Leaderboard";
import UserSelect from "./components/UserSelect";
import RewardModal from "./components/RewardModal";
import History from "./components/History";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [modalPoints, setModalPoints] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const [history, setHistory] = useState([]);

  const selectedUserName = users.find(u => u._id === selectedUserId)?.name || '';

  useEffect(() => {
    fetchData();
    if (selectedUserId) fetchHistory(selectedUserId);
  }, [selectedUserId]);

  const fetchData = async () => {
    try {
      const [usersRes, boardRes] = await Promise.all([
        api.get("/users"),
        api.get("/leaderboard"),
      ]);

      setUsers(usersRes.data);
      setLeaderboard(boardRes.data);

      if (!selectedUserId && usersRes.data.length > 0) {
        setSelectedUserId(usersRes.data[0]._id);
      }
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  const fetchHistory = async (userId) => {
    try {
      const res = await api.get(`/history/${userId}`);
      setHistory(res.data);
    } catch (err) {
      console.error("Error loading history:", err);
      setHistory([]);
    }
  };

  const handleAddUser = async (name) => {
    try {
      await api.post("/users", { name });
      fetchData();
    } catch (err) {
      console.error("Error adding user:", err);
    }
  };

  const handleClaim = async () => {
    if (!selectedUserId) return;
    setClaiming(true);
    try {
      const { data } = await api.post(`/claim/${selectedUserId}`);
      setModalPoints(data.points);
      setModalOpen(true);
      await fetchData();
      await fetchHistory(selectedUserId);
    } catch (err) {
      console.error("Error claiming points:", err);
    } finally {
      setClaiming(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 bg-background-700">
      <RewardModal
        points={modalPoints}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="max-w-md mx-auto bg-yellow-50 shadow-xl rounded-lg p-6">
        <h1 className="text-center text-2xl font-bold mb-4 font-nunito">Leaderboard</h1>

        <AddUserForm onAdd={handleAddUser} />

        <UserSelect
          users={users}
          selected={selectedUserId}
          onChange={setSelectedUserId}
        />

        <ClaimButton onClick={handleClaim} loading={claiming} />

        <Leaderboard board={leaderboard} />

        <History records={history} userName={selectedUserName}/>
      </div>
    </div>
  );
}

export default App;
