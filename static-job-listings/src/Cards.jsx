import "./style.css";

const Cards = ({ filters, updateState, filterCards }) => {
  const handleClick = (filter, filterName) => {
    let tmpState = filterCards(filters, filter, filterName);
    console.log(tmpState);
    updateState(tmpState[0], tmpState[1], tmpState[2]);
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
