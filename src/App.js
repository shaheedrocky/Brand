import "./App.css";
import DealsAndOffers from "./Components/DealsAndOffers/DealsAndOffers";
import Header from "./Components/Header/Header";
import HotLink from "./Components/HotLink/HotLink";
import TopBanner from "./Components/TopBanner/TopBanner";
import "bootstrap/dist/css/bootstrap.min.css";

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
      {/* DEALS AND OFFERS START HERE */}
      <DealsAndOffers />
      {/* DEALS AND OFFERS END HERE */}
    </div>
  );
}

export default App;
