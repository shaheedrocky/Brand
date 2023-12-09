import "./App.css";
import Header from "./Components/Header/Header";
import HotLink from "./Components/HotLink/HotLink";

function App() {
  return (
    <div className="App">
      {/* ======= HEADER START HERE ======= */}
      <Header />
      {/* ======= HEADER END HERE ======= */}
      {/* ===== HOT LINKS START HERE ===== */}
      <HotLink />
      {/* ===== HOT LINKS END HERE ===== */}
    </div>
  );
}

export default App;
