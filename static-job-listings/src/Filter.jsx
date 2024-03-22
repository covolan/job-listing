import React from "react";

const Filter = ({ filters, filterCards, updateState, Data }) => {
  const removeFilter = (filter, filterName) => {
    let tmpCurrentFilters = filters.currentFilters.filter(
      (elem) => elem.filter != filter
    );
    let tmpCardList = Data;
    let tmpFilteredCardsList = [];
    console.log(tmpCardList);
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
    console.log(tmpState);
    updateState(
      tmpCurrentFilters,
      tmpState.displayedCards,
      tmpState.occultedCards
    );
  };

  return (
    <div className="filter__div">
      <div className="filters">
        {/* {console.log(filters, filters.currentFilters)} */}
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
      {/* {console.log(filters)} */}
      <button className="clear">Clear</button>
    </div>
  );
};

export default Filter;
