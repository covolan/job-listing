import Cards from "./Cards";
import fData from "../data.json";
import Filter from "./Filter";
import { useState } from "react";

function App() {

  const [filterbtn, setFilterbtn] = useState([]);

  return (
    <>
      <main>
        <Filter filterbtn={filterbtn} setFilterbtn={setFilterbtn} />
        <Cards filterbtn={filterbtn} setFilterbtn={setFilterbtn} />
      </main>
      <footer>
      <p className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://www.frontendmentor.io/profile/covolan" target="_blank">Covolan</a>.
      </p>
    </footer>
    </>
  );
}

export default App;
