import "./style.css";

const Cards = ({ filters, setFilters }) => {
  const handleClick = (filter, filterName) => {
    let tmpCardList;
    let tmpFilteredCardsList;
    let tmpCurrentFilters;
    let alreadyPressed = false;

    if (filters.currentFilters.length != 0) {
      filters.currentFilters.map((elem) => {
        if (elem.filter == filter) {
          alreadyPressed = true;
          return;
        }
      });
    }

    if (!alreadyPressed) {
      if (filterName == "languages" || filterName == "tools") {
        tmpCardList = filters.displayedCards.filter((elem) => {
          return elem[filterName].includes(filter);
        });
        tmpFilteredCardsList = filters.displayedCards.filter((elem) => {
          return !elem[filterName].includes(filter);
        });
      } else {
        tmpCardList = filters.displayedCards.filter((elem) => {
          return elem[filterName] == filter;
        });
        tmpFilteredCardsList = filters.displayedCards.filter((elem) => {
          return elem[filterName] != filter;
        });
      }

      if (filters.currentFilters.length == 0) {
        tmpCurrentFilters = [{ filter: filter, filterName: filterName }];
      } else {
        let alreadyAdded = false;
        filters.currentFilters.map((elem) => {
          if (elem.filter == filter) {
            alreadyAdded = true;
          }
        });
        if (!alreadyAdded) {
          tmpCurrentFilters = [
            ...filters.currentFilters,
            { filter: filter, filterName: filterName },
          ];
        }
      }

      tmpFilteredCardsList = [
        ...filters.occultedCards,
        ...tmpFilteredCardsList,
      ];

      if (tmpCurrentFilters) {
        setFilters({
          ...filters,
          displayedCards: tmpCardList,
          occultedCards: tmpFilteredCardsList,
          currentFilters: tmpCurrentFilters,
        });
      } else {
        setFilters({
          ...filters,
          displayedCards: tmpCardList,
          occultedCards: tmpFilteredCardsList,
        });
      }
    }
  };

  return (
    <>
      {/* Card format */}
      {filters.displayedCards.map((job) => (
        <div className="card" id={job.id} key={job.id}>
          <img className="logo" src={job.logo} alt={job.company + "Logo"} />
          <div className="card__info">
            <h1 className="card__title">
              {" "}
              {job.company}
              {job.new ? <span className="new">New!</span> : null}
              {job.featured ? <span className="featured">Featured</span> : null}
            </h1>
            <h2 className="occupation">{job.position}</h2>
            <div className="job__info">
              <ul className="info">
                <li>{job.postedAt}</li>
                <li>{job.contract}</li>
                <li>{job.location}</li>
              </ul>
            </div>
          </div>
          <div className="card__tech">
            <button
              onClick={() => handleClick(job.level, "level")}
              className="tech level"
            >
              {job.level}
            </button>
            {job.languages.map((lang) => (
              <button
                onClick={() => handleClick(lang, "languages")}
                key={lang}
                className="tech languages"
              >
                {lang}
              </button>
            ))}
            {job.tools
              ? job.tools.map((tool) => (
                  <button
                    key={tool}
                    onClick={() => handleClick(tool, "tools")}
                    className="tech tools"
                  >
                    {tool}
                  </button>
                ))
              : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
