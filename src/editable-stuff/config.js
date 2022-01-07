// Navigation Bar SECTION
const navBar = {
    show: true,
  };
  
  // Main Body SECTION
  const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Shivam",
    middleName: "",
    lastName: "Pandey",
    message: " Passionate about changing the world with technology. ",
    icons: [
      {
        image: "fa-github",
        url: "https://github.com/ShivCodeP",
      },
      {
        image: "fa-facebook",
        url: "https://www.facebook.com/shivamadityapandey",
      },
      {
        image: "fa-instagram",
        url: "https://www.instagram.com/pandey___shiv/",
      },
      {
        image: "fa-linkedin",
        url: "www.linkedin.com/in/shivamadityapandey/",
      },
      {
        image: "fa-twitter",
        url: "https://twitter.com/ShivamAdityaPa2/",
      },
    ],
  };
  
  // About Section
  
  const about = {
    show: true,
    heading: "About Me",
    imageLink: "/pandey___shiv",
    imageSize: 375,
    message:
      "I'm a software engineer who is passionate about making contributing to open-source more approachable, creating efficient application to solve people problem, and building community to solve tech related doubt and solve programming problems. Some technologies I enjoy working with include NodeJs, Express as Backend , MongoDB as a NoSQL Database and ReactJs, Javascript, HTML, CSS, Tailwindcss, SCSS as Frontend.",
    resume: "https://drive.google.com/file/d/1xa0pbPaJj280pmd2emp7IUUZcIMgZVbV/view?usp=sharing",
  };
  
  // PROJECTS SECTION

  const repos = {
    show: true,
    heading: "Recent Projects",
    gitHubUsername: "ShivCodeP",
    reposLength: 4,
    specificRepos: [],
  };
  
  // Leadership SECTION
  const leadership = {
    show: false,
    heading: "Leadership",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [
      { 
        img: require("../editable-stuff/shivam.png"), 
        label: "First slide label", 
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
      },
      { 
        img: require("../editable-stuff/hashirshoaeb.png"), 
        label: "Second slide label", 
        paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
      },
    ],
    imageSize: {
      width:"615",
      height:"450"
    }
  };
  
  // SKILLS SECTION
  const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
      { name: "Python", value: 90 },
      { name: "MongoDB", value: 75 },
      { name: "Data Structures", value: 85 },
      { name: "Node Js", value: 70 },
      { name: "JavaScript", value: 90 },
      { name: "React", value: 70 },
      { name: "HTML/CSS", value: 80 },
      { name: "Express Js", value: 80 },
    ],
    softSkills: [
      { name: "Goal-Oriented", value: 80 },
      { name: "Collaboration", value: 90 },
      { name: "Positivity", value: 75 },
      { name: "Adaptability", value: 85 },
      { name: "Problem Solving", value: 75 },
      { name: "Empathy", value: 90 },
      { name: "Time Management", value: 80 },
      { name: "Creativity", value: 90 },
    ],
  };
  
  // GET IN TOUCH SECTION
  const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
      "I'm currently looking for full-time Software Engineering or Web Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "pshivam762@gmail@gmail.com",
  };
  
  const experiences = {
    show: false,
    heading: "Experiences",
    data: [
      {
        role: 'Software Engineer',// Here Add Company Name
        companylogo: require('../assets/img/dell.png'),
        date: 'June 2018 – Present',
      },
      {
        role: 'Front-End Developer',
        companylogo: require('../assets/img/boeing.png'),
        date: 'May 2017 – May 2018',
      },
    ]
  }
  
  
  export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
  