import "./style.css";

const Cards = ({ filterbtn, setFilterbtn, cards, setCards }) => {

  const handleClick = (filter, filterName) => {
    let tmpCardList;

    if (filterName == "languages" || filterName == "tools") {
      tmpCardList = cards.filter((elem) => {
        return elem[filterName].includes(filter);
      });
    } else {
      tmpCardList = cards.filter((elem) => {
        return elem[filterName] == filter;
      });
    }

    setCards(tmpCardList);

    console.log(filterbtn);

    if (filterbtn.length == 0) {
      setFilterbtn([...filterbtn, { filter: filter, filterName: filterName }]);
    } else {
      let alreadyAdded = false;
      filterbtn.map((elem) => {
        if (elem.filter == filter) {
          alreadyAdded = true;
        }
      });
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
