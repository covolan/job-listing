import React from "react";
import Data from "../data.json";
import "./style.css";

const Cards = () => {
  const clickfunc = (e) => {
    const filters = document.querySelector(".filters");
    const eventButton = document.createElement("button");
    const card = document.querySelectorAll(".card");
    const filterDiv = document.querySelector(".filter__div");
    const clearBtn = document.querySelector(".clear");

    eventButton.innerText = e.currentTarget.innerText;
    eventButton.classList.add("filter");
    eventButton.id = e.currentTarget.innerText;
    const filtersTracker = [];

    let res = [];

    Data.forEach((data) => {
      if (
        data[e.currentTarget.classList[1]].includes(e.currentTarget.innerText)
      ) {
        res.push(data.id);
      }
    });

    card.forEach((c) => {
      if (!res.includes(parseInt(c.id))) {
        c.classList.add("hidden");
      }
    });

    if (!filtersTracker.includes(eventButton.id)) {
      filters.append(eventButton);
      filterDiv.classList.remove("not__show");
      filtersTracker.push(eventButton.id);
      eventButton.addEventListener("click", (event) => {
        let perRes = res.slice(0, res.length);
        card.forEach((c) => {
          if (!perRes.includes(parseInt(c.id))) {
            c.classList.remove("hidden");
          }
        });
        filtersTracker.splice(filtersTracker.indexOf(event.target.id), 1);
        if (filtersTracker.length == 0) {
          filterDiv.classList.add("not__show");
        }
        eventButton.remove();
      });
    }

    clearBtn.addEventListener("click", (event) => {
      card.forEach((c) => {
        c.classList.remove("hidden");
      });
      filterDiv.classList.add("not__show");
      filtersTracker.length = 0;
      filters.innerHTML = "";
    });
  };

  return (
    <>
      {Data.map((job) => (
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
            <button onClick={(e) => clickfunc(e)} className="tech level">
              {job.level}
            </button>
            {job.languages.map((lang) => (
              <button
                onClick={(e) => clickfunc(e)}
                key={lang}
                className="tech languages"
              >
                {lang}
              </button>
            ))}
            {job.tools
              ? job.tools.map((tool) => (
                  <button
                    onClick={(e) => clickfunc(e)}
                    key={tool}
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
