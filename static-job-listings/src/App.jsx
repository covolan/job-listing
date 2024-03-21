import Cards from "./Cards";
import Filter from "./Filter";
import Data from "../data.json";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [filterbtn, setFilterbtn] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [cards, setCards] = useState(Data);
  const [filters, setFilters] = useState({
    displayedCards: Data,
    occultedCards: [],
    currentFilters: [],
  });


  return (
    <>
      <main>
        {/* Filter Bar on the top of the website */}
        <Filter
          filters={filters}
          setFilters={setFilters}
        />

        {/* The job cards */}
        <Cards
          filters={filters}
          setFilters={setFilters}
        />
      </main>
      {/* Footer information */}
      <Footer />
    </>
  );
}

export default App;
