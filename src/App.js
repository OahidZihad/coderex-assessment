import { Routes, Route } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import UserProfile from "./Pages/UserProfile/UserProfile";
import './App.css';

function App() {
  return (
    <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:userId" element={<UserProfile />} />
    </Routes>
  );
}

export default App;