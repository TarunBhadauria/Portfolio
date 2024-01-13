import ProjectImage from "./projectImage";
import skillImage from "./skillImage";

const projectData = [
  {
    image: ProjectImage.Project1.main,
    moreImages: ProjectImage.Project1.others,
    techStackImages: [
      skillImage.HTML,
      skillImage.CSS,
      skillImage.Javascript,
      skillImage.Express,
      skillImage.Tailwind,
      skillImage.React,
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Express",
      "Tailwind",
      "Redux",
    ],
    name: "StudyNotion",
    description:
      "StudyNotion, a cutting-edge education technology platform, seamlessly blends innovation and user-friendly design to empower learners.",
    readMore:
      "StudyNotion, a cutting-edge education technology platform, seamlessly blends innovation and user-friendly design to empower learners. Built on the robust foundation of React.js, our website harnesses the collective expertise of HTML, CSS, JavaScript, and the efficiency of Tailwind CSS. Navigate an immersive learning experience with StudyNotion, where intuitive interfaces and responsive design converge to elevate your educational journey. Unleash the power of technology in education, tailored for today's dynamic learners, all within the sleek and engaging environment of StudyNotion.",
    githubLink: "https://github.com/TarunBhadauria/StudyNotion_Prod",
    liveLink: "https://study-notion-prod.vercel.app/",
    youtubeLink: "",
    points: [
      "Create dynamic and interactive UIs with React.js, achieving a 20% faster page load time. Implement components, state management (including Redux), and routing for a 15% boost in user engagement.",
      "Implemented comprehensive authentication and authorization mechanisms, utilizing JWT (JSON Web Token) for secure and efficient authorization processes.",
      "Develop a comprehensive, fully responsive, and dynamically interactive user interface by leveraging the power of Tailwind CSS. ",
    ],
    multiImages: [],
  },
  {
    image: ProjectImage.Project2.main,
    moreImages: ProjectImage.Project2.others,
    techStackImages: [
      skillImage.HTML,
      skillImage.CSS,
      skillImage.Javascript,
      skillImage.NodeJs,
      skillImage.React,
      skillImage.Redux,
    ],
    techStack: ["HTML", "CSS", "JavaScript","Node js", "Reactjs", "Redux"],
    name: "Westpac",
    description:
      "Westpac, a cornerstone of the Sydney financial landscape, stands as a beacon of stability and innovation in the banking domain.",
    readMore:
      "Westpac, a cornerstone of the Sydney financial landscape, stands as a beacon of stability and innovation in the banking domain. With a rich legacy and a commitment to excellence, Westpac has been a trusted partner for individuals and businesses alike. Rooted in Sydney, this leading bank combines traditional values with cutting-edge financial solutions, offering a seamless banking experience.",
    githubLink: "",
    liveLink: "https://www.westpac.com.au/",
    youtubeLink: "",
    points: [
      "Introduced lazy loading, resulting in a 40% reduction in load time and significantly enhancing the overall website performance by 300ms.",
      "Identify and address production-related bugs to reach a 27% reduction in error occurrences, establishing a stable and 98.9% error-free online banking platform for enhanced reliability and user satisfaction.",
      "Enhance the user interface of the income page, implementing optimization strategies to attain a 20% increase in intuitiveness and deliver a seamless experience for Westpac’s clients, thereby improving overall user satisfaction metrics.",
    ],
    multiImages: [],
  },
  {
    image: ProjectImage.Project3.main,
    moreImages: ProjectImage.Project3.others,
    techStackImages: [
      skillImage.HTML,
      skillImage.CSS,
      skillImage.Javascript,
      skillImage.Bootstrap,
      skillImage.Redux,
      skillImage.React,
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    name: "UBS",
    description:
      "UBS, a leading force in the banking domain, stands at the forefront of financial excellence.",
    readMore:
      "UBS, a leading force in the banking domain, stands at the forefront of financial excellence. With a rich legacy of expertise and a commitment to innovation, UBS offers a comprehensive suite of banking solutions. Our unwavering dedication to precision and client satisfaction has made us a trusted partner for individuals, businesses, and institutions worldwide. Discover the pinnacle of financial services with UBS, where tradition meets cutting-edge technology to create a seamless and secure banking experience tailored to your needs.",
    githubLink: "",
    liveLink: "https://www.ubs.com/global/en/investment-bank.html",
    youtubeLink: "",
    points: [
      "Collaborated with backend developers to implement advanced login features, incorporating a multi-factor authentication system and enhancing password security, resulting in a 30% reduction in unauthorized access attempts and ensuring a more secure authentication process.",
      "Ensured the updated UI is 20% more responsive, delivering a consistent and optimized experience across a diverse range of devices for improved user satisfaction and engagement.",
      "Integrated token-based authorization, bolstering the security of user sessions with a 25% increase in access control efficiency, thereby ensuring a robust and secure environment for handling sensitive data and transactions.",
    ],
    multiImages: [],
  },
];

export default projectData;
