import React from "react";

const Filter = ({ filterbtn, setFilterbtn }) => {
  
  
  return (
    <div className="filter__div">
      <div className="filters">
        {filterbtn.map((item) => (
          <button key={item} className="filter">
            {item}
          </button>
        ))}
      </div>
      <button className="clear">Clear</button>
    </div>
  );
};

export default Filter;
