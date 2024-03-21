import React from "react";

const Filter = ({ filterbtn, setFilterbtn, cards, setCards, dataValue }) => {
  const handleClickbtn = (filter, filterName) => {
    // Filtrar os dados do filterbtn a partir do clique e setar os cards.
  };

  return (
    <div className="filter__div">
      <div className="filters">
        {/* Filter buttons display */}
        {filterbtn.map((elem) => (
          <button key={elem.filter} className="filter">
            {elem.filter}
          </button>
        ))}
      </div>
      <button className="clear">Clear</button>
    </div>
  );
};

export default Filter;
