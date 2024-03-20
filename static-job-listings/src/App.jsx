import Cards from "./Cards";
import Filter from "./Filter";
import Data from "../data.json";
import { useState } from "react";

function App() {
  const [filterbtn, setFilterbtn] = useState([]);
  const [cards, setCards] = useState(Data);
  const [dataValue, setDataValue] = useState(Data);

  return (
    <>
      <main>
        <Filter
          dataValue={dataValue}
          cards={cards}
          setCards={setCards}
          filterbtn={filterbtn}
          setFilterbtn={setFilterbtn}
        />
        <Cards
          cards={cards}
          setCards={setCards}
          filterbtn={filterbtn}
          setFilterbtn={setFilterbtn}
        />
      </main>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.frontendmentor.io/profile/covolan"
            target="_blank"
          >
            Covolan
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
