import Cards from "./Cards";
import Filter from "./Filter";
import Data from "../data.json";
import { useState } from "react";
import Footer from "./Footer";

function App() {
  const [filters, setFilters] = useState({
    displayedCards: Data,
    occultedCards: [],
    currentFilters: [],
  });

  const filterCards = (state, filter, filterName) => {
    let tmpCardList;
    let tmpFilteredCardsList;
    let tmpCurrentFilters;

    console.log(state.currentFilters);

    if (state.currentFilters.length != 0) {
      state.currentFilters.map((elem) => {
        if (elem.filter == filter) {
          return [
            state.currentFilters,
            state.displayedCards,
            state.occultedCards,
          ];
        }
      });
    }

    if (filterName == "languages" || filterName == "tools") {
      tmpCardList = state.displayedCards.filter((elem) => {
        return elem[filterName].includes(filter);
      });
      tmpFilteredCardsList = filters.displayedCards.filter((elem) => {
        return !elem[filterName].includes(filter);
      });
    } else {
      tmpCardList = state.displayedCards.filter((elem) => {
        return elem[filterName] == filter;
      });
      tmpFilteredCardsList = state.displayedCards.filter((elem) => {
        return elem[filterName] != filter;
      });
    }

    if (state.currentFilters.length == 0) {
      tmpCurrentFilters = [{ filter: filter, filterName: filterName }];
    } else {
      let alreadyAdded = false;
      state.currentFilters.map((elem) => {
        if (elem.filter == filter) {
          alreadyAdded = true;
        }
      });
      if (!alreadyAdded) {
        tmpCurrentFilters = [
          ...state.currentFilters,
          { filter: filter, filterName: filterName },
        ];
      }
    }

    tmpFilteredCardsList = [...state.occultedCards, ...tmpFilteredCardsList];

    return [tmpCurrentFilters, tmpCardList, tmpFilteredCardsList];
  };

  const updateState = (
    tmpCurrentFilters,
    tmpCardList,
    tmpFilteredCardsList
  ) => {
    if (tmpCurrentFilters) {
      setFilters(() => ({
        ...filters,
        displayedCards: tmpCardList,
        occultedCards: tmpFilteredCardsList,
        currentFilters: tmpCurrentFilters,
      }));
    } else {
      setFilters(() => ({
        ...filters,
        displayedCards: tmpCardList,
        occultedCards: tmpFilteredCardsList,
      }));
    }
  };

  return (
    <>
      <main>
        {/* Filter Bar on the top of the website */}
        <Filter
          filters={filters}
          filterCards={filterCards}
          updateState={updateState}
          Data={Data}
        />

        {/* The job cards */}
        <Cards
          filters={filters}
          filterCards={filterCards}
          updateState={updateState}
        />
      </main>
      {/* Footer information */}
      <Footer />
    </>
  );
}

export default App;
