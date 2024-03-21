import "./style.css";

const Cards = ({ filterbtn, setFilterbtn, cards, setCards }) => {

  const handleClick = (filter, filterName) => {
    let tmpCardList; // Temporary list to storage the cards.

    // Check if the clicked button belong to lang. tools or position.
    if (filterName == "languages" || filterName == "tools") {
      // filter the cards to display.
      tmpCardList = cards.filter((elem) => {
        return elem[filterName].includes(filter);
      });
    } else {
      // filter the cards to display.
      tmpCardList = cards.filter((elem) => {
        return elem[filterName] == filter;
      });
    }

    // Set the cards to be displayed based on the button pressed.
    setCards(tmpCardList);

    // Logic to create the button on the top filter div.
    if (filterbtn.length == 0) {
      // if it doesn't have any button, create the first.
      setFilterbtn([...filterbtn, { filter: filter, filterName: filterName }]);
    } else {
      // Check if the button is already on the container.
      let alreadyAdded = false;
      filterbtn.map((elem) => {
        if (elem.filter == filter) {
          alreadyAdded = true;
        }
      });
      // If the button has not been added, then add it to the container.
      if (!alreadyAdded) {
        setFilterbtn([
          ...filterbtn,
          { filter: filter, filterName: filterName },
        ]);
      }
    }
  };

  return (
    <>
    {/* Card format */}
      {cards.map((job) => (
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
                  <button key={tool} className="tech tools">
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
