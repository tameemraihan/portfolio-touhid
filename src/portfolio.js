/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Touhid's Portfolio",
  description:
    "Mechanical Engineering graduate with hands-on experience in product quality, supply chain, and community leadership. Passionate about technology, sustainable innovation, and making a real-world impact.",
  og: {
    title: "Md Touhidul Islam Portfolio",
    type: "website",
    url: "https://www.linkedin.com/in/mdtayefislam/",
  },
};

//Home Page
const greeting = {
  title: "Md Touhidul Islam",
  logo_name: "TouhidulIslam",
  nickname: "touhid",
  subTitle:
    "Mechanical Engineering graduate with hands-on experience in product quality, supply chain, and community leadership. Passionate about technology, sustainable innovation, and making a real-world impact.",
  resumeLink: "/touhid_resume.pdf",
  portfolio_repository: "https://www.linkedin.com/in/mdtayefislam/",
  githubProfile: "https://www.linkedin.com/in/mdtayefislam/",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mdtayefislam/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:md.tayeftameem18@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Engineering & Technical",
      fileName: "FullStackImg",
      skills: [
        "⚡ Applying mechanical engineering principles to product quality and manufacturing processes",
        "⚡ Developing simulations and technical analysis using MATLAB",
        "⚡ Writing efficient database queries with SQL for data management",
        "⚡ Programming in C and C++ for technical problem solving",
        "⚡ Leveraging Python for automation and data analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MATLAB",
          imageSrc: "matlab_logo.png",
          style: {
            height: "50px",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "logos:html-5",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Productivity & Office",
      fileName: "DesignImg",
      skills: [
        "⚡ Creating professional engineering reports and presentations using Microsoft Office Suite",
        "⚡ Managing and analyzing project data with Microsoft Excel",
        "⚡ Organizing schedules, meetings, and administrative operations efficiently",
        "⚡ Coordinating cross-functional team activities and documentation",
      ],
      softwareSkills: [
        {
          skillName: "Microsoft Word",
          fontAwesomeClassname: "simple-icons:microsoftword",
          style: {
            color: "#2B579A",
          },
        },
        {
          skillName: "Microsoft Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "Microsoft PowerPoint",
          fontAwesomeClassname: "simple-icons:microsoftpowerpoint",
          style: {
            color: "#B7472A",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/mdtayefislam/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Technische Hochschule Ingolstadt",
      subtitle: "B.Eng. in Autonomous Vehicle Engineering",
      logo_path: "thi_logo.png",
      alt_name: "THI Ingolstadt",
      duration: "Oct 2023 - Present",
      descriptions: [
        "⚡ Currently pursuing Bachelor of Engineering in Autonomous Vehicle Engineering at THI, Germany.",
        "⚡ Gaining knowledge in vehicle dynamics, control systems, and autonomous driving technologies.",
        "⚡ Developing expertise in modern automotive engineering and intelligent transport systems.",
      ],
      website_link: "https://www.thi.de/",
    },
    {
      title: "VSB - Technical University of Ostrava",
      subtitle: "Bachelor of Engineering - Mechanical Engineering",
      logo_path: "vsb_logo.png",
      alt_name: "VSB Ostrava",
      duration: "Sep 2021 - Jul 2023",
      descriptions: [
        "⚡ Earned Bachelor of Engineering in Mechanical Engineering.",
        "⚡ Studied core subjects including thermodynamics, fluid mechanics, and materials science.",
        "⚡ Gained international academic experience in the Czech Republic.",
      ],
      website_link: "https://www.vsb.cz/en/",
    },
    {
      title: "Cambrian College",
      subtitle: "Diploma in Science",
      logo_path: "cambrian_logo.png",
      alt_name: "Cambrian College",
      duration: "Mar 2019 - Aug 2021",
      descriptions: [
        "⚡ Completed Science diploma with a strong foundation in physics, chemistry, and mathematics.",
        "⚡ Developed analytical and problem-solving skills essential for engineering studies.",
      ],
      website_link: "https://cambrianbd.edu.bd/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Airbus Beyond Supply Chain Specialist",
      subtitle: "Airbus",
      logo_path: "airbus_logo.png",
      alt_name: "Airbus",
      color_code: "#00327d",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Volunteership and Leadership",
  description:
    "I have experience in community leadership, youth empowerment, and social initiatives. I am passionate about creating positive change and supporting women's rights and development.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Team Leader",
          company: "Nari Maitree",
          company_url: "",
          logo_path: "nari_maitree_logo.png",
          duration: "Mar 2018 - Sep 2020",
          location: "Dhaka, Bangladesh",
          description:
            "Led a community team focused on women's empowerment and social development initiatives. Coordinated team activities, managed volunteers, and organized community outreach programs to support women's rights and well-being.",
          color: "#e91e63",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Core Youth Volunteer",
          company: "ActionAid Bangladesh",
          company_url: "https://www.actionaid.org/bangladesh",
          logo_path: "actionaid_logo.png",
          duration: "Feb 2017 - Present",
          location: "Dhaka, Bangladesh",
          description:
            "Working as a youth volunteer with ActionAid Bangladesh. Involved in campaigns for social justice, women's rights, and community development. Participated in leadership training and various development programs for social impact.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects apply mechanical engineering and programming skills to build real-world solutions. I enjoy creating innovative systems that bridge hardware and software.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "Research articles and academic publications are on the way. This section will be updated soon.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "touhid_contact.jpg",
    description:
      "I am available on LinkedIn and via email. Feel free to reach out — I will reply within 24 hours. I am open to opportunities in vehicle engineering, autonomus industry, product quality, and technology-driven projects.",
  },
  blogSection: {
    title: "Projects",
    subtitle:
      "I love building projects that bridge engineering and technology. Connect with me on LinkedIn to learn more.",
    link: "https://www.linkedin.com/in/mdtayefislam/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Maximilianstraße 52, 90429, Nürnberg, Germany",
    locality: "Nürnberg",
    country: "DE",
    region: "Bavaria",
    postalCode: "90429",
    streetAddress: "Maximilianstraße 52",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Nurnberg",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
