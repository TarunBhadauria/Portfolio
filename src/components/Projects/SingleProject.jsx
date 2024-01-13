import React, { useState } from "react";
import style from "./Project.module.css";
import { FaGithub, FaLink } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import useRemoveBodyScrolling from "../../hooks/useRemoveBodyScrolling";

const SingleProject = ({ index, data }) => {
  const [showModal, setShowModal] = useState(false);

  useRemoveBodyScrolling(showModal);

  return (
    <div
      className={`${index & 1 ? style.projectLeft : style.projectRight} ${
        style.singleProject
      }`}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div
        className={`${index & 1 ? style.numberLeft : style.numberRight} ${
          style.number
        }`}
      >
        0{index + 1}
      </div>
      <div
        className={`${index & 1 ? style.cardLeft : style.cardRight} ${
          style.card
        }`}
      >
        <div className={style.skills}>
          {data.techStackImages.map((tech, index) => (
            <img loading="lazy" src={tech} alt="" key={index} />
          ))}
        </div>

        <h2 className={style.heading}>{data.name}</h2>

        <p className={style.description}>{data.description}</p>
        <div className={style.buttons}>
          <button onClick={() => setShowModal(true)}>Read More</button>
          <a href={data.githubLink} className={style.icon} target="_blank" rel="noopener noreferrer">
            <FaGithub  />
          </a>
          <a href={data.liveLink} className={style.icon} target="_blank" rel="noopener noreferrer">
            <FaLink />
          </a>
        </div>
      </div>
      {showModal && (
        <ProjectModal data={data} setShow={setShowModal} show={showModal} />
      )}
    </div>
  );
};

export default SingleProject;
