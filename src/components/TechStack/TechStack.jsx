import React from "react";
import style from "./TechStack.module.css";
import skillImage from "../../assets/data/skillImage";

const TechStack = () => {
  const exclude = ["NextJsCircle", "Saas", "Typescript"];
  return (
    <div className={style.techStack} id="techStack">
      {/* Left div */}
      <div className={style.description}>
        <h2>
          <span>M</span>e and <br />
          My Tech Stack
        </h2>
        {/* <h2>My Tech Stack</h2> */}
        <p>
          I am a seasoned Systems Engineer with <b>2.5 years</b> of hands-on
          experience, currently leveraging my skills to drive innovation and
          excellence in the tech industry. Proficient in a versatile tech stack,
          I specialize in <b>HTML, CSS</b>, and <b>JavaScript</b>, bringing
          dynamic and responsive web solutions to life. My expertise extends to
          advanced front-end frameworks, including <b>React.js</b> and 
          <b> Redux</b>, allowing me to craft interactive and scalable user
          interfaces.
        </p>
        <p>
          In addition to my front-end prowess, I am adept at server-side
          development using Express.js, ensuring robust and efficient back-end
          solutions. My toolkit also includes Tailwind CSS and Bootstrap,
          enabling me to create sleek, modern designs with efficiency and
          precision.
        </p>
        <p>
          Having navigated complex projects during my tenure as a Systems
          Engineer at Infosys, I bring a wealth of problem-solving skills and a
          commitment to delivering high-quality solutions.
        </p>
      </div>
      {/* Right Div */}
      <div className={style.skills}>
        <img
          className={style.skillBlob}
          loading="lazy"
          src="https://res.cloudinary.com/di1qrcflg/image/upload/v1704002443/blob_vector_zq3nmk.png"
          alt="blob"
        />
        {Object.keys(skillImage).map(
          (key) =>
            !exclude.includes(key) && (
              <img
                className={style.skillImg}
                loading="lazy"
                key={key}
                src={skillImage[key]}
                alt={key}
              />
            )
        )}
      </div>
    </div>
  );
};

export default TechStack;
