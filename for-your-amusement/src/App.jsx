import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import ReactionVelocityCheck from "./pages/ReactionVelocityCheck";
import LotteryMachine from "./pages/LotteryMachine";
import RockPaperScissors from "./pages/rockPaperScissors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/reactionvelocitycheck" element={<ReactionVelocityCheck/>} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="/lotterymachine" element={<LotteryMachine/>} />
      </Routes>
    </Router>
  );
}
export default App;
