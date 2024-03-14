import Cards from "./Cards";
import fData from "../data.json";
import Filter from "./Filter";

function App() {

  return (
    <>
      <main>
        <Filter />
        <Cards />
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
