import "./App.css";
import Header from "./Components/Header/Header";
import HotLink from "./Components/HotLink/HotLink";
import TopBanner from "./Components/TopBanner/TopBanner";

function App() {
  return (
    <div className="App">
      {/* ======= HEADER START HERE ======= */}
      <Header />
      {/* ======= HEADER END HERE ======= */}
      {/* ===== HOT LINKS START HERE ===== */}
      <HotLink />
      {/* ===== HOT LINKS END HERE ===== */}
      {/* TOP BANNER START HERE */}
      <TopBanner />
      {/* TOP BANNER END HERE */}
    </div>
  );
}

export default App;
