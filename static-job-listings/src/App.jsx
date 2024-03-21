import Cards from "./Cards";
import Filter from "./Filter";
import Data from "../data.json";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [filterbtn, setFilterbtn] = useState([]);
  const [cards, setCards] = useState(Data);
  const [dataValue, setDataValue] = useState(Data);

  return (
    <>
      <main>
        {/* Filter Bar on the top of the website */}
        <Filter
          dataValue={dataValue}
          cards={cards}
          setCards={setCards}
          filterbtn={filterbtn}
          setFilterbtn={setFilterbtn}
        />

        {/* The job cards */}
        <Cards
          cards={cards}
          setCards={setCards}
          filterbtn={filterbtn}
          setFilterbtn={setFilterbtn}
        />
      </main>
      {/* Footer information */}
      <Footer />
    </>
  );
}

export default App;
