import Project1 from "../images/projects/Project1/StudyNotion.jpeg";
import image11 from "../images/projects/Project1/Studynotion3.jpeg";
import image12 from "../images/projects/Project1/Studynotion4.jpeg";
import image13 from "../images/projects/Project1/Studynotion5.jpeg";
import image14 from "../images/projects/Project1/StudyNotion2.jpeg";

import Project2 from "../images/projects/Project2/Westpac2.jpeg";
import image21 from "../images/projects/Project2/Westpac.jpeg";

import Project3 from "../images/projects/Project3/Ubs.jpeg";
import image31 from "../images/projects/Project3/ubs2.jpeg";


const ProjectImage = {
  Project1: {
    main: Project1,
    others: [image11, image12, image13, image14],
  },
  Project2: {
    main: Project2,
    others: [image21],
  },
  Project3: {
    main: Project3,
    others: [image31],
  },
};

export default ProjectImage;
