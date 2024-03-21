import React from "react";

const Filter = ({ filters, setFilters }) => {
  const handleClick = (filter, filterName) => {
    let tmpCardList;
    let tmpFilteredCardsList;
    let tmpCurrentFilters;
    let tmpCFList = [];

    tmpCurrentFilters = filters.currentFilters.filter((elem) => {
      return elem.filter != filter;
    });

    tmpCurrentFilters.forEach((elem) => {
      tmpCFList.push(elem.filter);
    });

    if (filterName == "languages" || filterName == "tools") {
      tmpCardList = filters.occultedCards.filter((elem) => {
        // console.log(
        //   elem[filterName],
        //   tmpCFList,
        //   !elem[filterName].filter((el) => tmpCFList.includes(el)).length
        // );
        return !elem[filterName].filter((el) => tmpCFList.includes(el)).length;
      });

      tmpFilteredCardsList = filters.occultedCards.filter((elem) => {
        return elem[filterName].filter((el) => tmpCFList.includes(el)).length;
      });
    } else {
      tmpCardList = filters.occultedCards.filter((elem) => {
        return tmpCFList.includes(elem.filter);
      });
      tmpFilteredCardsList = filters.occultedCards.filter((elem) => {
        return tmpCFList.includes(elem.filter);
      });
    }

    tmpCardList = [...filters.displayedCards, ...tmpCardList];
    // tmpCardList.sort((a, b) => {
    //   return a.id - b.id;
    // })

    setFilters({
      ...filters,
      displayedCards: tmpCardList,
      occultedCards: tmpFilteredCardsList,
      currentFilters: tmpCurrentFilters,
    });
  };

  return (
    <div className="filter__div">
      <div className="filters">
        {filters.currentFilters.map((elem) => {
          return (
            <button
              onClick={() => handleClick(elem.filter, elem.filterName)}
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
