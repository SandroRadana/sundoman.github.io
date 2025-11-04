/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Sandro Romaddana",
  title: "Halo, Aku Sandro",
  subTitle: emoji(
    "Seorang Public Relations yang bersemangat 🚀 memiliki pengalaman membuat event,majalah, public relations  management dan beberapa  project keren lainnya."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "sandroradana@gmail.com",
  facebook: "https://www.facebook.com/share/16Y7YpZ8vc/ ",
  instagram: "https://www.instagram.com/sandroromaddana/",  // Add your Instagram URL here
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SEORANG PUBLIC RELATIONS YANG MENYUKAI TANTANGAN BARU",
  skills: [
    emoji(
      "⚡ Mengembangkan strategi komunikasi dan pemasaran digital untuk meningkatkan brand awareness dan engagement audiens"
    ),
    emoji("⚡ Membuat serta mengelola konten kreatif (foto, video, dan desain) untuk berbagai platform media sosial dan promosi digital"),
    emoji(
      "⚡ Melakukan riset pasar dan analisis tren untuk mendukung penyusunan strategi promosi yang efektif dan tepat sasaran."
    ),
    emoji("⚡ Menguasai tools kreatif seperti Adobe Illustrator, Photoshop, Canva, dan CapCut untuk mendukung produksi konten berkualitas tinggi.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://www.flaticon.com */

  softwareSkills: [
    {
      skillName: "Public Speaking",
      fontAwesomeClassname: "fas fa-microphone"
    },
    {
      skillName: "Content Writing",
      fontAwesomeClassname: "fas fa-pen-fancy"
    },
    {
      skillName: "Media Relations",
      fontAwesomeClassname: "fas fa-newspaper"
    },
    {
      skillName: "Event Management",
      fontAwesomeClassname: "fas fa-calendar-check"
    },
    {
      skillName: "Social Media",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "Crisis Management",
      fontAwesomeClassname: "fas fa-shield-alt"
    },
    {
      skillName: "Brand Management",
      fontAwesomeClassname: "fas fa-copyright"
    },
    {
      skillName: "Communication Strategy",
      fontAwesomeClassname: "fas fa-comments"
    },
    {
      skillName: "Digital Marketing",
      fontAwesomeClassname: "fas fa-bullhorn"
    },
    {
      skillName: "Market Research",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Video Editing",
      fontAwesomeClassname: "fas fa-video"
    },
    {
      skillName: "Photo Editing",
      fontAwesomeClassname: "fas fa-camera"
    },
    {
      skillName: "Videographer",
      fontAwesomeClassname: "fas fa-film"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universitas Muhammadiyah Malang",
      logo: require("./assets/images/Logo UMM.png"),
      subHeader: "Ilmu Komunikasi",
      duration: "September 2020 - Agustus 2025",
      desc: "Berpartisipasi Dalam 3 Projek Praktikum.",
      descBullets: [
        "BUMDes Amanah Karangsuko (2022) – Mengelola proyek In House Magazine melalui riset kebutuhan klien dan penyusunan konten komunikasi yang relevan.",
        "Sosialoka (2022–2023) – Menyusun strategi crisis handling dan proposal manajemen komunikasi untuk menjaga reputasi organisasi.",
        "Bank Sampah Malang (2023) – Mengorganisir dan mengeksekusi event kampus secara end-to-end untuk meningkatkan citra dan partisipasi publik."
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Public Relations", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Event Management",
      progressPercentage: "70%"
    },
    {
      Stack: "Graphic Designer",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Managing In House Magazine",
      company: "BUMDes Amanah Karangsuko",
      companylogo: require("./assets/images/LOGO BUMDES.jpg"),
      date: "  Maret 2022 - Aug 2022",
      desc: "Grapic designer dan Penulis.",
      descBullets: [
        "Melakukan riset mendalam terhadap kebutuhan dan permasalahan klien yang dapat diatasi melalui in house magazine.",
        "Mengkoordinasikan proses komunikasi untuk mendukung penyelesaian kendala yang dihadapi klien.",
        "Merancang, mengembangkan, dan menyusun konten in house magazine berdasarkan hasil riset agar sesuai dengan kebutuhan klien."
      ]
    },
    {
      role: "Crisis Management",
      company: "Sosialoka",
      companylogo: require("./assets/images/LOGO SOSIALOKA.png"),
      date: "Sep 2022 - Jan 2023",
      desc: "Public Relations.",
      descBullets: [
        "Menganalisis enam studi kasus krisis komunikasi yang diberikan client.",
        "Menyusun proposal manajemen krisis mencakup strategi, rencana komunikasi, dan mitigasi risiko.",
        "Mengembangkan solusi untuk menjaga reputasi organisasi dan meningkatkan kepercayaan publik.",
        "Menyajikan proposal manajemen krisis dalam bentuk presentasi profesional."
      ]
    },
    {
      role: "Event Management",
      company: "Bank Sampah Malang",
      companylogo: require("./assets/images/LOGO BSM.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Public Relations.",
      descBullets: [
        "Melakukan riset mendalam terhadap kebutuhan dan permasalahan klien yang dapat diatasi melalui event.",
        "Melakukan riset kebutuhan dan preferensi audiens untuk menentukan konsep event yang tepat.",
        "Merancang, mengorganisir, dan mengeksekusi event secara end-to end.",
        "Mengkoordinasikan komunikasi dengan tim dan stakeholder guna memastikan kelancaran pelaksanaan event.",
        "Berhasil menghadirkan fashion show dengan partisipasi 10 putra putri kampus UMM, Miss Teen Star Jawa Timur 2023 dan Miss Cyber Mall Malang 2022."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "MY PROJECTS",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/652ffb16110fce761173f0d3/pmm-kelompok-42-mengubah-sampah-organik-menjadi-ecoenzym-bersama-kelompok-wanita-tani-kwt-desa-torongrejo",
      title: "PMM Kelompok 42 Mengubah Sampah Organik Menjadi Ecoenzym bersama Kelompok Wanita Tani (KWT) Desa Torongrejo",
      description:
        "Mengetahui tatacara membuat ecoenzym bersama bersama Kelompok Wanita Tani (KWT) Desa Torongrejo"
    },
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/637ab9a34addee346063b802/muktamar-muhammadiyah-aisyiyah-ke-48-memajukan-bangsa",
      title: "Muktamar Muhammadiyah - Aisyiyah ke-48 Memajukan Bangsa",
      description:
        "Muktamar Muhammadiyah Aisyiyah ke-48 wujud kolaborasi dakwah, pendidikan, kemanusiaan, ijtihad pembaruan, dan semangat membangun bangsa."
    },
    {
      url: "https://medium.com/@saadpasta/what-is-google-assistant-action-2f3c0a1b4d8e",
      title: "What is Google Assistant Action?",
      description:
        "Google Assistant is a virtual assistant powered by artificial intelligence. It is primarily available on mobile and smart home devices."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+62 85337729198",
  email_address: "sandrromadana@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
