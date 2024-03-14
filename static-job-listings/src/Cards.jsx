import React from "react";
import Data from "../data.json";
import "./style.css";

const Cards = () => {
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
            <button className="tech level">{job.level}</button>
            {job.languages.map((lang) => (
              <button key={lang} className="tech">{lang}</button>
            ))}
            {job.tools
              ? job.tools.map((tool) => (
                  <button key={tool} className="tech tools">{tool}</button>
                ))
              : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
