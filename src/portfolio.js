/* Portfolio content for Sandro Romaddana */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Sandro Romaddana",
  title: "Halo, Saya Sandro",
  subTitle: emoji(
    "Public Relations dan content strategist dengan pengalaman dalam event management, crisis communication, in-house magazine, serta komunikasi pemasaran digital."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1IJmOlcw6WiUdbiFdA5xrnb_mNz45QWUS/view?usp=sharing",
  displayGreeting: true
};

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/sandro-romaddana-267087255",
  gmail: "sandroradana@gmail.com",
  facebook: "https://www.facebook.com/share/16Y7YpZ8vc/",
  instagram: "https://www.instagram.com/sandroromaddana/",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "Public Relations, content strategy, dan event management.",
  skills: [
    emoji(
      "⚡ Menyusun strategi komunikasi dan pemasaran digital untuk meningkatkan brand awareness serta engagement audiens."
    ),
    emoji(
      "⚡ Membuat dan mengelola konten kreatif untuk media sosial, kampanye digital, dan kebutuhan promosi."
    ),
    emoji(
      "⚡ Melakukan riset audiens, tren, dan kebutuhan klien sebagai dasar penyusunan strategi komunikasi."
    ),
    emoji(
      "⚡ Menggunakan Adobe Illustrator, Photoshop, Canva, dan CapCut untuk mendukung produksi konten visual."
    )
  ],
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
      skillName: "Videography",
      fontAwesomeClassname: "fas fa-film"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universitas Muhammadiyah Malang",
      logo: require("./assets/images/Logo UMM.png"),
      subHeader: "Ilmu Komunikasi",
      duration: "September 2020 - Agustus 2025",
      desc: "Berpartisipasi dalam tiga proyek praktikum komunikasi.",
      descBullets: [
        "BUMDes Amanah Karangsuko (2022) – Mengelola proyek in-house magazine melalui riset kebutuhan klien dan penyusunan konten komunikasi.",
        "Sosialoka (2022–2023) – Menyusun strategi crisis handling dan proposal manajemen komunikasi untuk menjaga reputasi organisasi.",
        "Bank Sampah Malang (2023) – Mengorganisir dan mengeksekusi event kampus secara end-to-end untuk meningkatkan citra dan partisipasi publik."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Public Relations",
      progressPercentage: "90%"
    },
    {
      Stack: "Event Management",
      progressPercentage: "75%"
    },
    {
      Stack: "Content Strategy",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "In-House Magazine Team",
      company: "BUMDes Amanah Karangsuko",
      companylogo: require("./assets/images/BUMDES AMANAH.jpg"),
      date: "Maret 2022 - Agustus 2022",
      desc: "Graphic designer dan content writer.",
      descBullets: [
        "Melakukan riset kebutuhan dan permasalahan klien sebagai dasar penyusunan in-house magazine.",
        "Mengembangkan konsep, konten, dan visual majalah agar sesuai dengan kebutuhan komunikasi klien.",
        "Mengkoordinasikan proses komunikasi internal untuk mendukung penyelesaian proyek."
      ]
    },
    {
      role: "Crisis Management Team",
      company: "Sosialoka",
      companylogo: require("./assets/images/LOGO SOSIALOKA.png"),
      date: "September 2022 - Januari 2023",
      desc: "Public Relations.",
      descBullets: [
        "Menganalisis enam studi kasus krisis komunikasi dari klien.",
        "Menyusun proposal manajemen krisis yang mencakup strategi, rencana komunikasi, dan mitigasi risiko.",
        "Mengembangkan solusi komunikasi untuk menjaga reputasi organisasi dan meningkatkan kepercayaan publik.",
        "Menyajikan proposal manajemen krisis dalam bentuk presentasi profesional."
      ]
    },
    {
      role: "Event Management Team",
      company: "Bank Sampah Malang",
      companylogo: require("./assets/images/LOGO BSM.jpeg"),
      date: "Januari 2023 - September 2023",
      desc: "Public Relations.",
      descBullets: [
        "Melakukan riset kebutuhan klien dan preferensi audiens untuk menentukan konsep event yang tepat.",
        "Merancang, mengorganisir, dan mengeksekusi event secara end-to-end.",
        "Mengkoordinasikan komunikasi dengan tim dan stakeholder untuk memastikan kelancaran acara.",
        "Berhasil menghadirkan fashion show dengan partisipasi 10 putra-putri kampus UMM, Miss Teen Star Jawa Timur 2023, dan Miss Cyber Mall Malang 2022."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Selected Projects",
  subtitle:
    "Beberapa proyek yang menunjukkan pengalaman saya dalam strategi komunikasi, konten, event, dan public relations.",
  projects: [
    {
      image: require("./assets/images/Cover Dummy 2.png"),
      projectName: "Tirta Rhea In-House Magazine",
      projectDesc:
        "Menyusun in-house magazine untuk BUMDes Amanah Karangsuko, mulai dari riset kebutuhan, perencanaan konten, hingga pengemasan visual.",
      footerLink: [
        {
          name: "Dummy In-House Magazine",
          url: "https://drive.google.com/file/d/1Dc-3YAVeiGd6cyRbbJB1xbw_dcpTa2lH/view?usp=sharing"
        },
        {
          name: "Proposal Kreatif",
          url: "https://drive.google.com/file/d/1wrMg2YHhKUZxi_xWOJjViW2yTCaZU-ml/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/LOGO SOSIALOKA.png"),
      projectName: "Crisis Management",
      projectDesc:
        "Menganalisis studi kasus krisis komunikasi dan menyusun rekomendasi strategi penanganan reputasi untuk Sosialoka.",
      footerLink: [
        {
          name: "Project 1 HEINZ",
          url: "https://drive.google.com/file/d/19_9nN_i0eDg2MDew_zVrxr-XQmgkzGRf/view?usp=sharing"
        },
        {
          name: "Project 2 IDETimur",
          url: "https://drive.google.com/file/d/1TDQEEkBZOmmBBv_hqXq7EBW8I41n2D_h/view?usp=sharing"
        },
        {
          name: "Project 3 AREMA",
          url: "https://drive.google.com/file/d/1M1YNFyDpy12HVbn3Qq-y28OT7sJnx1qr/view?usp=sharing"
        },
        {
          name: "Project 4 NOIS",
          url: "https://drive.google.com/file/d/1M8Wuu5dtcyZw17PBqPSp5mB8qYd8K1gk/view?usp=sharing"
        },
        {
          name: "Project 5 Cover Clearance",
          url: "https://drive.google.com/file/d/1OD49QGQ0yGRJEMG8HjFJ9_22OCgaNW9q/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/Logo FKS.png"),
      projectName: "Festival Kreasi Sampah",
      projectDesc:
        "Merancang dan mengelola rangkaian event Bank Sampah Malang, termasuk konsep acara, koordinasi stakeholder, dan publikasi media.",
      footerLink: [
        {
          name: "Proposal Kreatif",
          url: "https://www.canva.com/design/DAG41CdMkQc/BFUSxKkiY44Uy9rm-5OmJg/edit"
        },
        {
          name: "Laporan Pertanggungjawaban",
          url: "https://drive.google.com/file/d/1m0wmC7nAUiAykTBCn8UfnEyiEJBxJsGC/view?usp=sharing"
        },
        {
          name: "Artikel Tugumalang.id",
          url: "https://tugumalang.id/mahasiswa-prodi-ilmu-komunikasi-umm-ramaikan-acara-bank-sampah-malang-otr/"
        },
        {
          name: "Artikel Kabarpasti.com",
          url: "https://kabarpasti.com/antusias-masyarakat-ikuti-aksi-pilah-sampah-bersama-bsm-on-the-road-hingga-terkumpul-ratusan-sampah-botol-plastik-dalam-waktu-sekejap/"
        },
        {
          name: "Artikel Bacamalang.com",
          url: "https://bacamalang.com/great-waste-solution-event-kolaborasi-apik-untuk-solusi-pengelolaan-sampah/"
        },
        {
          name: "Artikel Jawapos.com",
          url: "https://www.jawapos.com/berita-sekitar-anda/011814237/festival-kreasi-sampah-upaya-tingkatkan-kesadaran-masyakarat"
        }
      ]
    },
    {
      image: require("./assets/images/Logo UMM.png"),
      projectName: "Skripsi",
      projectDesc:
        "Penelitian tentang implementasi komunikasi pemasaran digital pada media sosial Instagram Ilitterless dalam membangun brand awareness sebagai startup pengelolaan sampah.",
      footerLink: [
        {
          name: "Naskah Skripsi",
          url: "https://drive.google.com/file/d/1FrUML2XrlV71otqwzzXWGA_iUH6Bv_ik/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Sertifikasi dan pencapaian yang mendukung kompetensi profesional saya.",
  achievementsCards: [
    {
      title: "ITP TOEFL",
      subtitle: "Centre of Language Improvement - ITP TOEFL Score 547",
      image: require("./assets/images/TOEFL LOGO.png"),
      imageAlt: "ITP TOEFL Certificate",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1O_AW1yEJKRu8FAHXlESMw4UNbi57-xpF/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Articles",
  subtitle: "Tulisan saya tentang kegiatan sosial, komunikasi, dan pemberdayaan masyarakat.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/652ffb16110fce761173f0d3/pmm-kelompok-42-mengubah-sampah-organik-menjadi-ecoenzym-bersama-kelompok-wanita-tani-kwt-desa-torongrejo",
      title:
        "PMM Kelompok 42 Mengubah Sampah Organik Menjadi Ecoenzym bersama Kelompok Wanita Tani Desa Torongrejo",
      description:
        "Artikel kegiatan pemberdayaan masyarakat terkait pengolahan sampah organik menjadi ecoenzym."
    },
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/637ab9a34addee346063b802/muktamar-muhammadiyah-aisyiyah-ke-48-memajukan-bangsa",
      title: "Muktamar Muhammadiyah - Aisyiyah ke-48 Memajukan Bangsa",
      description:
        "Tulisan tentang kolaborasi dakwah, pendidikan, kemanusiaan, dan semangat membangun bangsa."
    },
    {
      url: "https://www.kompasiana.com/sandroromaddana_3150255/6523ab074cc2af131a210293/antusias-ibu-ibu-kwt-desa-torongrejo-mengikuti-sosialisasi-digital-marketing-yang-diadakan-mahasiswa-pmm-umm",
      title:
        "PMM UMM Kelompok 42 Mengadakan Sosialisasi Digital Marketing Bersama Ibu-Ibu KWT Desa Torongrejo",
      description:
        "Artikel tentang edukasi pemasaran digital untuk mendukung peningkatan kapasitas UMKM lokal."
    }
  ],
  display: true
};

const talkSection = {
  display: false
};

const podcastSection = {
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Unduh resume saya untuk melihat pengalaman dan kompetensi secara lebih lengkap.",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me 📧"),
  subtitle:
    "Terbuka untuk diskusi proyek, kolaborasi, magang, dan peluang kerja di bidang komunikasi.",
  number: "+62 85337729198",
  email_address: "sandroradana@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

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
