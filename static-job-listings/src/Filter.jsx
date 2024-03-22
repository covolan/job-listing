import React from "react";

const Filter = ({ filters, filterCards, updateState, Data }) => {
  const removeFilter = (filter) => {
    let tmpCurrentFilters = filters.currentFilters.filter(
      (elem) => elem.filter != filter
    );
    let tmpCardList = Data;
    let tmpFilteredCardsList = [];
    let tmpState = {
      currentFilters: [],
      displayedCards: tmpCardList,
      occultedCards: tmpFilteredCardsList,
    };
    console.log(tmpState, tmpCurrentFilters);
    if (tmpCurrentFilters.length != 0) {
      tmpCurrentFilters.forEach((el) => {
        let tmpVal = filterCards(tmpState, el.filter, el.filterName);
        tmpState = {
          currentFilters: tmpVal[0],
          displayedCards: tmpVal[1],
          occultedCards: tmpVal[2],
        };
      });
    }
    updateState(
      tmpCurrentFilters,
      tmpState.displayedCards,
      tmpState.occultedCards
    );
  };

  const clearFilter = () => {
    let tmpCardList = Data;
    let tmpFilteredCardsList = [];
    let tmpState = {
      currentFilters: [],
      displayedCards: tmpCardList,
      occultedCards: tmpFilteredCardsList,
    };
    updateState(
      tmpState.currentFilters,
      tmpState.displayedCards,
      tmpState.occultedCards
    );
  };

  return (
    <div className={
      "filter__div " + (filters.currentFilters.length == 0 ? "not__show" : "")
    }>
      <div className="filters">
        {filters.currentFilters.map((elem) => {
          return (
            <button
              onClick={() => removeFilter(elem.filter, elem.filterName)}
              key={elem.filter}
              className="filter"
            >
              {elem.filter}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => clearFilter()}
        className="clear"
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
