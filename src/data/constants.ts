
export type ProjectMember = {
  name: string;
  img: string;
  linkedin: string;
  github: string;
};

export type Project = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  webapp?: string;
  member?: ProjectMember[];
};

export type Visual = {
slug: string;
title: string;
shortDescription: string;
longDescription: string;
iconName: string; // Will map to Lucide icon
image: string;
hint: string;
component?: 'CustomerSalesChart' | 'PratilipiMarketAnalysisChart' | 'WattpadAnalysisChart' | 'AirbnbAnalysisChart' | 'NetflixDashboard';
tools: string[];
achievements: string[];
};


export const Bio = {
name: "Ashutosh Pant",
roles: ["Full Stack Developer", "Data Analyst", "BI Analyst", "Programmer"],
description:
  "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
github: "https://github.com/ORE0000",
resume:
  "https://drive.google.com/file/d/1c-9FrU_7_jQetJElbvPNRDY8z7ZZpgyl/view?usp=sharing",
linkedin: "https://www.linkedin.com/in/ashutosh-pant1/",
twitter: "https://x.com/ASHUTOSHPANT19",
insta: "https://www.instagram.com/oreeoo._______/",
facebook: "https://www.facebook.com/Ashutoshpant.007",
skills: [
  {
    title: "Data & Analytics",
    skills: [
      {
        name: "Excel",
        image:
          "https://img.icons8.com/?size=100&id=117561&format=png&color=000000",
      },
      {
        name: "Google Sheets",
        image:
          "https://img.icons8.com/?size=100&id=30461&format=png&color=000000",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Numpy",
        image:
          "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000",
      },
      {
        name: "Tableau",
        image:
          "https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000",
      },
      {
        name: "Power BI",
        image:
          "https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Tailwindcss",
        image:
          "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "AWS",
        image:
          "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png",
      },
      {
        name: "Google Cloud",
        image:
          "https://static-00.iconduck.com/assets.00/google-cloud-platform-logo-icon-2048x1824-pg4wzspq.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Kubernetes",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Kubernetes_%28container_engine%29.png",
      },
      {
        name: "Prometheus",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Prometheus_software_logo.svg/1200px-Prometheus_software_logo.svg.png",
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Tenserflow",
        image:
          "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",
      },
      {
        name: "Keras",
        image:
          "https://miro.medium.com/v2/resize:fit:600/1*DKu_54iqz6C-p6ndo7rO3g.png",
      },
      {
        name: "Jupyter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png",
      },
      {
        name: "Google Colab",
        image:
          "https://img.icons8.com/?size=100&id=lOqoeP2Zy02f&format=png&color=000000",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Linux",
        image:
          "https://img.icons8.com/?size=100&id=17842&format=png&color=000000",
      },
      {
        name: "Ubuntu",
        image:
          "https://img.icons8.com/?size=100&id=63208&format=png&color=000000",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "C++",
        image:
          "https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000",
      },
    ],
  },
],
experience: [
  {
    id: 0,
    img: "https://img.icons8.com/?size=100&id=110187&format=png&color=000000",
    role: "Data Analyst",
    company: "Data Analysis Projects",
    date: "April 2024 - Present",
    desc: "Spearheaded a series of end-to-end data analysis projects, transforming complex datasets into actionable business insights. Key projects include developing a Netflix content dashboard, conducting in-depth market analysis for Pratilipi and Airbnb, and analyzing user engagement trends on Wattpad. Designed and built interactive dashboards using Tableau and Power BI to visualize sales performance, customer segmentation, and market trends, consistently delivering data-driven recommendations.",
    skills: [
      "Tableau",
      "Power BI",
      "Python (Pandas, NumPy)",
      "SQL",
      "Data Visualization",
      "Market Research",
      "Data Scraping",
      "Excel",
    ],
  },
  {
    id: 1,
    img: "https://img.icons8.com/?size=100&id=txoP0q0H3NEb&format=png&color=000000",
    role: "SkyScope Developer",
    company: "SkyScope",
    date: "2024 - Present",
    desc: "Developed a weather application using ReactJS, TypeScript, TanStack Query, and ShadCN UI. Integrated third-party APIs for real-time weather updates and enhanced user experience with intuitive UI/UX design.",
    skills: [
      "ReactJS",
      "TypeScript",
      "TanStack Query",
      "ShadCN UI",
      "Vite",
      "API Integration",
    ],
  },
  {
    id: 2,
    img: "https://img.icons8.com/?size=100&id=38OIZPoPpQ3Q&format=png&color=000000",
    role: "HOSS Ecosystem Developer",
    company: "Hotel Om Shiv Shankar",
    date: "Nov 2024 - March 2025",
    desc: "Developed two core applications for the Hotel Om Shiv Shankar ecosystem: a modern, internal management system (React, Vite, Express) for handling bookings and financial reporting, and a public-facing booking website (PHP, MySQL, AJAX) for guest reservations. Together, these platforms provide a complete, end-to-end solution for both hotel administration and customer experience.",
    skills: ["React", "Express", "PHP", "MySQL", "AJAX", "JavaScript", "TailwindCSS"],
  },
  {
    id: 3,
    img: "https://custpostimages.s3.ap-south-1.amazonaws.com/18220/1712583450322.png",
    role: "Full-Stack Web Development Internship",
    company: "INTERNSHIP | YHILLS -Learning Beyond Expectation",
    date: "Feb 2024 - Jun 2024",
    desc: "Enhanced website functionality and user experience by collaborating with senior developers to design and implement new features using MongoDB, Express.js, ReactJS, and Node.js (MERN stack). Coordinated content management systems (CMS) and participated in comprehensive testing using various tools and frameworks, ensuring high-quality code and functionality.",
    skills: ["MongoDB", "Express.js", "ReactJS", "Node.js"],
  },
  {
    id: 4,
    img: "https://yt3.googleusercontent.com/foVCTywFAyUZG05GpiGEAJhgOv7UFcgm-ymCTAxXg85tMvc506VvSUo4xsbsAavj1DrTbaqTW10=s900-c-k-c0x00ffffff-no-rj",
    role: "Core Java Trainee",
    company: "Internshala Trainings",
    date: "Feb 2024 - Aug 2023",
    desc: "Completed training in Core Java at Internshala Trainings, covering modules on Java fundamentals, Object-Oriented Programming, and Java application development.Gained a solid understanding of core Java concepts and application development, preparing for advanced software development roles.",
    skills: [
      "Java",
      "Object-Oriented Programming (OOP)",
      "Java Application Development",
    ],
  },
],
education: [
  {
    id: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaFV33HLb9Tyn_VZhvmuMnJuIPEXBgCwqNeWuhK3T839VePPV4KbGaA5eD8be3JxoJcg&usqp=CAU",
    school: "Uttaranchal University, Dehradun",
    date: " 2022 - Jul 2024",
    grade: "8.33 CGPA",
    desc: "I recently graduated with a Master of Computer Applications (MCA) from Uttaranchal University, Dehradun. I have a CGPA of 8.33. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Master of Computer Applications  - MCA",
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/1/10/Sri_Dev_Suman_Uttarakhand_University_Logo.png",
    school: "Sri Dev Suman Uttarakhand University,Uttarkashi",
    date: "May 2019 -  2022",
    desc: "I hold a Bachelor of Science (BSc) in Physics, Chemistry, and Mathematics from Sri Dev Suman Uttarakhand University, Uttarkashi. Throughout my degree, I developed a strong foundation in mathematical modeling, scientific analysis, and problem-solving, which has enhanced my analytical thinking. My coursework covered key topics in classical mechanics, organic and inorganic chemistry, linear algebra, calculus, and statistical methods. This academic background has sharpened my logical reasoning and data interpretation skills, which I effectively apply in technical problem-solving and data analysis.",
    degree: "Bachelor of Science - BSc",
  },
  {
    id: 2,
    img: "https://www.rishiramshikshansansthan.in/wp-content/uploads/2021/04/cropped-logo-1.png",
    school: "Rishiram Shikshan Sansthan Sr. Secondary School, Joshiyara",
    date: "May 2017 - May 2019",
    desc: "I completed my class 12 high school education at Rishiram Shikshan Sansthan Sr. Secondary School, Joshiyara, where I studied Science with Computer Science.",
    degree: "CBSE(XII), Science with Computer",
  },
  {
    id: 3,
    img: "https://yt3.googleusercontent.com/ytc/AIdro_maaSqaAkEqTtyTQ9RjGf0BSZDwiMkBJDZlhLk2XLVyEg=s900-c-k-c0x00ffffff-no-rj",
    school: "HIM Christian Academy School, Matli",
    date: "May 2017",
    desc: "I completed my class 10 education at HIM Christian Academy School, Matli, where I studied Science with Computer Application.",
    degree: "ICSC(X), Science with Computer",
  },
],
projects: [
  {
    id: 20,
    title: "Netflix Content Analysis Dashboard",
    date: "July 1, 2024",
    description: "A comprehensive dashboard analyzing the Netflix content library, inspired by a Tableau visualization.",
    image: "https://drive.google.com/uc?export=view&id=111QcD9N0e8aP_tQaBSHQi5Qs1Qbc3Ge-",
    tags: ['Recharts', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    category: "data analyst",
    github: "https://github.com/ORE0000",
    webapp: "/visuals/netflix-dashboard",
  },
  {
    id: 21,
    title: "Pratilipi Market Analysis",
    date: "June 2025",
    description: "An end-to-end market research and strategic analysis of Pratilipi, a digital storytelling platform, covering monetary growth, product features, user demographics, revenue models, market positioning, and more.",
    image: "https://drive.google.com/uc?export=view&id=1r5oIG8jl19lyamVydVrRovErixnF7ogp",
    tags: ['Excel', 'Power BI', 'Market Research', 'Financial Analysis', 'Competitor Benchmarking'],
    category: "data analyst",
    github: "https://github.com/ORE0000",
    webapp: "/visuals/pratilipi-market-analysis",
  },
  {
    id: 22,
    title: "Wattpad Author & Story Analysis",
    date: "Completed",
    description: "An in-depth analysis of Wattpad authors and stories to uncover trends in content, engagement, and author success, involving data scraping, analysis, and visualization.",
    image: "https://placehold.co/600x400.png",
    tags: ['Python', 'Jupyter Notebook', 'Excel', 'Data Scraping', 'Pandas'],
    category: "data analyst",
    github: "https://github.com/ORE0000",
    webapp: "/visuals/wattpad-author-analysis",
  },
  {
    id: 23,
    title: "Airbnb Market Analysis",
    date: "May 2025",
    description: "Conducted an in-depth analysis of Airbnb listings, utilizing SQL for data extraction and Python for cleaning. Designed an interactive Tableau dashboard to visualize key metrics like price distribution, occupancy rates, and host activity, enhancing data-driven decision-making.",
    image: "https://drive.google.com/uc?export=view&id=1WYoQuUwfk6CytPQws3Oi3uE-BQe4iaI5",
    tags: ['Tableau', 'SQL', 'Excel', 'Python', 'Pandas', 'NumPy'],
    category: "data analyst",
    github: "https://github.com/ORE0000",
    webapp: "/visuals/airbnb-market-analysis",
  },
  {
    id: 24,
    title: "Power BI Sales Dashboard",
    date: "July 2025",
    description: "An interactive dashboard analyzing quarterly sales performance across multiple regions and product categories.",
    image: "https://placehold.co/800x600.png",
    tags: ['Power BI', 'SQL', 'Python', 'Matplotlib', 'Seaborn'],
    category: "data analyst",
    github: "https://github.com/ORE0000",
    webapp: "/visuals/power-bi-sales-dashboard",
  },
  {
    id: 25,
    title: "Tableau Customer Segmentation",
    date: "June 2025",
    description: "A storyboard illustrating customer segmentation based on purchasing behavior, demographics, and lifetime value.",
    image: "https://placehold.co/800x600.png",
    tags: ['Tableau', 'Excel', 'Data Cleansing', 'Data Segmentation'],
    category: "data analyst",
    github: "https://github.com/ORE0000",
    webapp: "/visuals/tableau-customer-segmentation",
  },
  {
    id: 26,
    title: "Python Market Trend Analysis",
    date: "May 2025",
    description: "Visualizations created with Matplotlib and Seaborn to identify and forecast market trends from historical data.",
    image: "https://placehold.co/800x600.png",
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: "data analyst",
    github: "https://github.com/ORE0000",
    webapp: "/visuals/python-market-trend-analysis",
  },
  {
    id: 19,
    title: "HOSS - Hotel Management System",
    date: "2024",
    description: "A full-featured hotel management system built for Hotel Om Shiv Shankar, offering booking operations, financial insights, and multi-property support—all wrapped in a sleek and modern UI.",
    image: "https://drive.google.com/uc?export=view&id=1FNpSJFrJjhUPuXNTWVQTmEagYWVyCHmy",
    tags: ["React", "TypeScript", "Vite", "Express", "TailwindCSS", "Framer Motion"],
    category: "web app",
    github: "https://github.com/ORE0000",
    webapp: "https://hotelomshivshankar.com/",
  },
  {
    id: 4,
    title: "Hotel Booking Website – Hotel Om Shiv Shankar",
    date: "2023",
    description: "A full-featured hotel booking website built using PHP, MySQL, AJAX, and HTML/CSS/JavaScript for a seamless experience across users and administrators. Designed for Hotel Om Shiv Shankar, it includes features like real-time availability, profile management, secure bookings, and admin control panels.",
    image: "https://drive.google.com/uc?export=view&id=1UB6P3D7VUaRll_sTmzu0aT0C5R_e4bzE",
    tags: ["PHP", "MySQL", "AJAX", "HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web app",
    github: "https://github.com/ORE0000/HOSS",
    webapp: "https://hotelomshivshankar.com/",
  },
  {
    id: 11,
    title: "MY-first-Portfolio",
    date: "July 2024 - August 2024",
    description:
      "A personal portfolio website showcasing my work, skills, and accomplishments. Built with modern web technologies to create an interactive and responsive user experience.",
    image:
      "https://raw.githubusercontent.com/ORE0000/MY-first-Portfolio/main/src/assets/MyPortfolio.png",
    tags: ["Next.js", "Three.js", "Framer Motion","Tailwind CSS"],
    category: "web app",
    github: "https://github.com/ORE0000/MY-first-Portfolio.git",
    webapp: "https://ashutoshpant-myportfolio.netlify.app/",
  },
  {
    id: 9,
    title: "Gemini Clone",
    date: "2024",
    description:
      "A clone of Google's Gemini AI interface, recreating the user experience and functionality of the popular AI chatbot platform.",
    image: "https://raw.githubusercontent.com/aneeshlalwani/google-gemini-clone/refs/heads/main/src/assets/output_img.png",
    tags: ["React", "API Integration", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/ORE0000/gemini-clone.git",
    webapp: "https://gemini-clone-demo.netlify.app/",
  },
  {
    id: 1,
    title: "SkyScope",
    date: "October 2024 - Present",
    description:
      "A weather application that provides real-time weather updates, forecasts, and atmospheric conditions. Features an intuitive interface for accessing weather data.",
    image:
      "https://raw.githubusercontent.com/ORE0000/SkyScope/main/public/SkyScope.png",
    tags: ["ReactJS", "TypeScript", "TanStack Query", "ShadCN UI", "Vite"],
    category: "web app",
    github: "https://github.com/ORE0000/SkyScope.git",
    webapp: "https://myskyscope.netlify.app/",
  },
  {
    id: 2,
    title: "Brain Tumor Detection",
    date: "Jan 2023 - Mar 2023",
    description:
      "Preprocessed and augmented the dataset to improve model accuracy, trained the model, created API using model and Python, and used React web app for the project's front end. Achievements: Achieved an accuracy of 99.2% to accurately detect brain tumors from medical images.",
    image:
      "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/rishavchanda/Brain-Tumor-Detection",
    webapp: "https://brain-tumor.netlify.app/",
    member: [
      {
        name: "Ashutosh Pant",
        img: "https://avatars.githubusercontent.com/u/131525011",
        linkedin: "https://www.linkedin.com/in/ashutosh-pant1/",
        github: "https://github.com/ORE0000/",
      },
      {
        name: "OTHER MEMBER",
        img: "https://avatars.githubusercontent.com/u/131525011",
        linkedin: "https://www.linkedin.com/in/ashutosh-pant1/",
        github: "https://github.com/ORE0000/",
      },
    ],
  },
  {
    id: 5,
    title: "UBN-BANKING",
    date: "2023",
    description:
      "A modern banking application that provides secure financial services, transaction management, and account operations for users.",
    image: "https://github.com/ORE0000/UBN-BANKING/raw/master/screenshot.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "web app",
    github: "https://github.com/ORE0000/UBN-BANKING.git",
    webapp: "https://ubn-banking.netlify.app/",
    member: [
      {
        name: "Ashutosh Pant",
        img: "https://avatars.githubusercontent.com/u/131525011",
        linkedin: "https://www.linkedin.com/in/ashutosh-pant1/",
        github: "https://github.com/ORE0000/",
      },
      {
        name: "OTHER MEMBER",
        img: "https://avatars.githubusercontent.com/u/131525011",
        linkedin: "https://www.linkedin.com/in/ashutosh-pant1/",
        github: "https://github.com/ORE0000/",
      },
    ],
  },
  {
    id: 6,
    title: "NEWSHUB-API",
    date: "2023",
    description:
      "A news aggregation platform that fetches and displays news from various sources using API integration, providing users with up-to-date news content.",
    image: "https://raw.githubusercontent.com/ORE0000/MY-first-Portfolio/refs/heads/main/src/assets/NewsHubApi.png",
    tags: ["React", "News API", "CSS", "JavaScript"],
    category: "web app",
    github: "https://github.com/ORE0000/NEWSHUB-API.git",
    webapp: "https://newshub-api-demo.netlify.app/",
  },
  {
    id: 8,
    title: "Face Recognition",
    date: "Jan 2021",
    description:
      "A Face recognition python app made with OpenCV. It uses face_recognition library to detect faces. It uses the webcam to detect faces. It also has a search bar to search for a particular face.",
    image: "https://github.com/rishavchanda/Brain-Tumor-Detection/raw/main/Readme_resource/Image2.png",
    tags: ["Python", "Keras", "TensorFlow", "VGG16", "Pickle", "React"],
    category: "machine learning",
    github: "https://github.com/ORE0000",
    webapp: "https://github.com/ORE0000",
  },
] as Project[],
};

export const visuals: Visual[] = [
{
  slug: 'netflix-dashboard',
  title: 'Netflix Content Analysis Dashboard',
  shortDescription: 'A comprehensive dashboard analyzing the Netflix content library, inspired by a Tableau visualization.',
  longDescription: 'This dashboard provides a deep dive into the Netflix content library. It includes breakdowns by country, rating, genre, and type (Movie vs. TV Show), as well as trends over time. This project showcases advanced data visualization techniques using Recharts within a Next.js application, replicating a complex Tableau dashboard.',
  iconName: 'Film',
  image: 'https://drive.google.com/uc?export=view&id=111QcD9N0e8aP_tQaBSHQi5Qs1Qbc3Ge-',
  hint: 'netflix dashboard analytics',
  component: 'NetflixDashboard',
  tools: ['Recharts', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  achievements: [
    'Replicated a complex Tableau dashboard in a web environment.',
    'Visualized multiple data facets including geospatial, categorical, and time-series data.',
    'Implemented a responsive grid layout for a multi-chart view.',
    'Utilized custom styling to match a specific design theme.'
  ]
},
{
  slug: 'pratilipi-market-analysis',
  title: 'Pratilipi Market Analysis',
  shortDescription: 'An end-to-end market research and strategic analysis of Pratilipi, a digital storytelling platform.',
  longDescription: 'This case study showcases a comprehensive market and business research on Pratilipi. The analysis covers monetary growth, product features, user demographics, revenue models, market positioning, competitive landscape, content trends, and growth strategies. The interactive dashboard visualizes key findings, including revenue breakdowns, financial performance over time, and funding trends, providing a clear picture of the company\'s challenges and opportunities.',
  iconName: 'BarChart',
  image: 'https://drive.google.com/uc?export=view&id=1r5oIG8jl19lyamVydVrRovErixnF7ogp',
  hint: 'market analysis dashboard',
  component: 'PratilipiMarketAnalysisChart',
  tools: ['Excel', 'Power BI', 'Market Research', 'Financial Analysis', 'Competitor Benchmarking'],
  achievements: [
      'Conducted in-depth research on company snapshot, monetary growth, and product strategy.',
      'Analyzed user demographics and content trends to provide behavioral insights.',
      'Performed competitive comparison with three key competitors.',
      'Developed strategic recommendations based on identified challenges and growth opportunities.'
  ]
},
{
  slug: 'wattpad-author-analysis',
  title: 'Wattpad Author & Story Analysis',
  shortDescription: 'An in-depth analysis of Wattpad authors and stories to uncover trends in content, engagement, and author success.',
  longDescription: 'To gain insights into top-performing authors, their content, and posting behavior, I scraped and analyzed publicly available data from Wattpad. This project involved examining various facets of author success, genre popularity, and reader engagement patterns to provide a comprehensive report on what drives success on the platform.',
  iconName: 'AreaChart',
  image: 'https://placehold.co/800x600.png',
  hint: 'writing data analysis',
  component: 'WattpadAnalysisChart',
  tools: ['Python', 'Jupyter Notebook', 'Excel', 'Data Scraping', 'Data Visualization', 'Pandas'],
  achievements: [
    'Identified top authors based on followers, story count, and total reads.',
    'Analyzed genre popularity, highlighting Romance as the dominant category with over 2 billion reads.',
    'Uncovered posting patterns, showing a peak in 2015 and long story active periods (avg. 2.88 years).',
    'Correlated readership with engagement, showing that more popular stories receive significantly more votes.',
    'Analyzed author tenure to show that longevity on the platform is a key factor for top performers.'
  ]
},
{
  slug: 'airbnb-market-analysis',
  title: 'Airbnb Market Analysis',
  shortDescription: 'A comprehensive analysis of Airbnb listings, pricing, and availability in a major metropolitan area.',
  longDescription: 'Conducted an in-depth analysis of Airbnb listings, utilizing SQL for data extraction and Python (Pandas, NumPy) for data cleaning and transformation. I designed an interactive Tableau dashboard to visualize key metrics such as price distribution, occupancy rates, and host activity, which enhanced data-driven decision-making. A significant part of this project was implementing geospatial analysis to identify pricing trends across different cities and neighborhoods. Additionally, I automated data preprocessing in Excel, reducing manual efforts by 40% and improving overall data accuracy.',
  iconName: 'MapPinned',
  image: 'https://drive.google.com/uc?export=view&id=1WYoQuUwfk6CytPQws3Oi3uE-BQe4iaI5',
  hint: 'map data',
  component: 'AirbnbAnalysisChart',
  tools: ['Tableau', 'SQL', 'Excel', 'Python', 'Pandas', 'NumPy'],
  achievements: [
      'Designed an interactive Tableau dashboard to visualize key metrics.',
      'Implemented geospatial analysis to identify pricing trends.',
      'Automated data preprocessing, reducing manual efforts by 40%.',
      'Used advanced SQL and Python for data extraction and cleaning.'
  ]
},
{
  slug: 'power-bi-sales-dashboard',
  title: 'Power BI Sales Dashboard',
  shortDescription: 'An interactive dashboard analyzing quarterly sales performance across multiple regions and product categories.',
  longDescription: 'This project involved a deep dive into customer purchase behavior and sales trends. By leveraging complex SQL queries, I efficiently extracted and manipulated large datasets to uncover actionable insights. The core of this project was the development of an interactive Power BI dashboard, which featured real-time sales performance metrics. This tool significantly enhanced executive decision-making and boosted reporting efficiency by 30%.',
  iconName: 'BarChart',
  image: 'https://placehold.co/800x600.png',
  hint: 'dashboard chart',
  component: 'CustomerSalesChart',
  tools: ['Power BI', 'SQL', 'Python', 'Matplotlib', 'Seaborn'],
  achievements: [
    'Applied data aggregation to identify top products and seasonal trends.',
    'Identified key customer retention patterns to inform marketing strategies.',
    'Utilized Python for advanced data visualization, enhancing report clarity.',
    'Implemented predictive analytics to forecast sales trends for business growth.'
  ]
},
{
  slug: 'tableau-customer-segmentation',
  title: 'Tableau Customer Segmentation',
  shortDescription: 'A storyboard illustrating customer segmentation based on purchasing behavior, demographics, and lifetime value.',
  longDescription: "This virtual job simulation with Deloitte Australia focused on leveraging forensic tools and analytical techniques to solve real-world business scenarios. I structured raw business data, cleansed it, and segmented it to interpret patterns, which improved reporting clarity by 25%. A key outcome was an interactive Tableau dashboard visualizing key metrics, enabling faster, more informed decision-making. The project showcased my ability to resolve complex data challenges and deliver actionable solutions.",
  iconName: 'PieChart',
  image: 'https://placehold.co/800x600.png',
  hint: 'analytics graph',
  tools: ['Tableau', 'Excel', 'Data Cleansing', 'Data Segmentation'],
  achievements: [
      'Accomplished a comprehensive virtual simulation with 95% task accuracy.',
      'Structured raw business data to improve reporting clarity by 25%.',
      'Engineered an interactive Tableau dashboard for faster decision-making.',
      'Resolved complex data challenges within a simulated client environment.'
  ]
},
{
  slug: 'python-market-trend-analysis',
  title: 'Python Market Trend Analysis',
  shortDescription: 'Visualizations created with Matplotlib and Seaborn to identify and forecast market trends from historical data.',
  longDescription: 'This project showcases my proficiency in Python for analyzing complex datasets. Using libraries like Pandas and NumPy, I can efficiently clean, transform, and prepare data for analysis. With Matplotlib and Seaborn, I create compelling visualizations that communicate insights effectively. This project is a testament to my ability to apply statistical methods to interpret data accurately and build models that can forecast future trends.',
  iconName: 'AreaChart',
  image: 'https://placehold.co/800x600.png',
  hint: 'data visualization',
  tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter'],
  achievements: [
      'Developed proficiency in Python for analyzing complex datasets.',
      'Crafted clear visuals to communicate insights effectively.',
      'Applied statistical methods to interpret data with high accuracy.',
      'Engaged in real-world projects to apply skills to practical datasets.'
  ]
},
];
