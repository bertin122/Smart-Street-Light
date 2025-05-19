import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EntryPage from "./components/EntryPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashboardLayout from "./layouts/DashboardLayout";
import UsersManagement from "./components/UsersManagement";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/users" element={<UsersManagement />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}
export default App;
