import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForYou from "./pages/for-you/index";
import Following from "./pages/following/index";
import Popular from "./pages/popular/index";
import Layout from "./layout";
import StatisticsPage from "./components/statisticsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/for-you" element={<ForYou />} />
          <Route path="/following" element={<Following />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/home" element={<div>Home</div>} />
          <Route path="/notification" element={<div>notification</div>} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/write" element={<div>write</div>} />
          <Route path="/favorites" element={<div>favorites</div>} />
          <Route path="/subscibers" element={<div>subscibers</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
