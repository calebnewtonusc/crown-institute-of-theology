// All site copy, sourced verbatim from crowninstituteoftheology.com (2026 snapshot),
// reformatted for a modern presentation. Charles Seip removed from faculty per request.

export const site = {
  name: "Crown Institute of Theology",
  tagline: "An Online Bible School and Seminary",
  heroLine: "A School for Kingdom New Covenant Studies",
  heroSub: "Pentecostal and Charismatic Theology. Biblical Exegesis.",
  copyrightYear: 2023,
  emails: {
    primary: "crowninstituteoftheology@gmail.com",
    stan: "stannewton@live.com",
    nikola: "nikolahelen@gmail.com",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Faculty", href: "/faculty" },
  { label: "Tuition", href: "/tuition" },
  { label: "Application", href: "/application" },
  { label: "Contact", href: "/contact" },
];

export const whyCrown = {
  heading: "Why Crown Institute?",
  intro:
    "Crown Institute is built upon the premise that we are transformed through personal revelation of Scripture by the confirming ministry of the Holy Spirit.",
  points: [
    "You want to dig deep into the Scripture and understand it from biblical (exegesis and hermeneutics) and theological viewpoints.",
    "You desire a school grounded in the revelation of the present and advancing kingdom (Victorious Eschatology) and the principles of New Covenant life.",
    "You want to be trained how to discern different theologies, to think for yourself, and to be able to teach others.",
    "You would like to be part of a Kingdom Think Tank, available to all graduates.",
    "You are looking for an affordable option to be equipped for Christian leadership.",
    "You want a degree. You want to finish what you started.",
  ],
};

export const about = {
  heading: "About Crown Institute",
  body: [
    "Crown Institute of Theology was founded by Dr. Stan Newton because of his life-time passion to share and teach the mysteries of the kingdom of God. Dr. Stan has assembled a team of teachers with broad and diverse experiences which will enrich, challenge, and inspire you to dream big. Going deeper into Scripture increases our drive to carry out the mission from Jesus: go and disciple the nations.",
    "We believe the Reign of Jesus is increasing throughout the earth. Therefore, leaders who are knowledgeable in biblical exegesis and theology are needed. Prepare for a preferable future. At Crown Institute we teach you theology so you can Do Theology.",
    "If you are ready to search the Scriptures and find the treasures of the kingdom, Crown Institute of Theology is for you. If you are ready to dig deep and be challenged, Crown Institute of Theology is for you. Our Accelerated Track to a Bachelor of Theology degree can be earned in 10 to 12 months.",
  ],
  quotes: [
    {
      text: "To you it has been given to know the secrets of the kingdom of heaven.",
      author: "Jesus",
    },
    {
      text: "It is the glory of God to conceal things, but the glory of kings is to search things out.",
      author: "Solomon",
    },
  ],
};

export const accreditation = {
  operatingStatus:
    "The Washington Student Achievement Council has determined that Crown Institute of Theology qualifies for religious exempt status from the Degree-Granting Institutions Act for the following programs: Bachelor of Theology (B.Th.), Master of Theological Studies (M.T.S.), Doctor of Ministry (D.Min.), and Doctor of Theology (Th.D.). The Council makes no evaluation of the administration, faculty, business practices, financial condition, or quality of the offerings by this institution. Any person desiring information about the requirements of the act or the applicability of those requirements to the institution may contact the Council at P.O. Box 43430, Olympia, WA 98504-3430, or by email at degreeauthorization@wsac.wa.gov.",
  about:
    "Crown Institute of Theology is approved by the State of Washington, U.S.A. to grant religious degrees of Bachelor of Theology, Master of Theological Studies, and Doctor of Ministry. Crown Institute is not accredited by an accrediting agency approved by the Council for Higher Accreditation (CHEA). Many Bible schools claim they are accredited, but their accrediting agency is not approved by CHEA, so that accreditation has no official standing. Crown Institute has gone through a comprehensive review to ensure the classes offered are consistent with accredited schools for the degrees they offer. When you study with Crown you will receive a degree and be exposed to transformative teaching on the Kingdom of God and the New Covenant.",
};

export type Course = { code: string; title: string; description: string };
export type Program = {
  slug: string;
  degree: string;
  abbr: string;
  credits: string;
  summary: string;
  objective: string;
  details?: { label: string; value: string }[];
  groups: { name: string; note?: string; courses: Course[] }[];
};

export const programs: Program[] = [
  {
    slug: "bachelor-of-theology",
    degree: "Bachelor of Theology",
    abbr: "B.Th.",
    credits: "90 Credit Hours",
    summary:
      "An accelerated track to a theology degree, earnable in 10 to 12 months, building the biblical and theological foundation for Christian ministry.",
    objective:
      "The objective for the Bachelor of Theology program is to provide students the opportunity to study historical and contemporary theology resulting in personal growth and beginning preparation for Christian ministry. We expect students will demonstrate a measurable increase of biblical knowledge and theological convictions throughout their time of study. Our objective includes that students will improve their communication skills, both oral and written, to better share the good news of Jesus and his kingdom.",
    groups: [
      {
        name: "Core Classes",
        note: "All students begin with these core classes. Depending on transfer credits, students choose from the elective list to complete the degree.",
        courses: [
          {
            code: "103",
            title: "Introduction to the Kingdom: The Messiah's Reign",
            description:
              "An introductory study of the Kingdom of God and the steps involved to bring it to earth, tracing the Old Testament words concerning the coming Messiah. (4 Credits)",
          },
          {
            code: "105",
            title: "Atonement-Based Healing",
            description:
              "When Jesus died upon the cross it provided humanity forgiveness of sins, and at the same time gave those who believe authority over sickness. This class examines how the atonement is the foundation for how Christians should approach physical sickness and disease. (4 Credits)",
          },
          {
            code: "107",
            title: "Introduction to Theology",
            description:
              "Introduces traditional Systematic and Biblical Theology as well as current theological trends. (4 Credits)",
          },
          {
            code: "209",
            title: "The Book of Hebrews",
            description:
              "An in-depth investigation into the first century believers, showing how the new covenant replaces the old covenant in God's salvific history. (4 Credits)",
          },
          {
            code: "304",
            title: "World Missions",
            description:
              "Looks at how the Great Commission of Jesus is being carried out throughout the world, including the practical aspects of being a missionary. (4 Credits)",
          },
          {
            code: "306",
            title: "Theological Covenants",
            description:
              "The traditional approaches to covenant are viewed across four main areas: Dispensationalism, Covenant Theology, New Covenant Theology, and Better Covenant Theology. (4 Credits)",
          },
          {
            code: "308",
            title: "Kingdom Promises and the Olive Tree",
            description:
              "From Romans 11, how Gentiles were added to the Olive Tree and how the church, as heir of the family of Abraham, benefits from promises made to Old Testament Israel. (4 Credits)",
          },
          {
            code: "310",
            title: "Christus Victor",
            description:
              "Examines the theological reasons given for what happened on the cross, challenging the popular doctrine of Penal Substitution. (4 Credits)",
          },
        ],
      },
      {
        name: "Elective Courses",
        note: "Once core classes are complete you will receive notice of how many credits remain. Choose from these electives to reach the required 90.",
        courses: [
          {
            code: "211",
            title: "Book of II Peter",
            description:
              "A look inside the first-century events which lead to an apocalyptic end. II Peter is key to understanding the foundation of partial preterism. (4 Credits)",
          },
          {
            code: "213",
            title: "The Person and Ministry of Jesus",
            description:
              "A personal study focused on the stories of Jesus and what they tell us about God's plan to redeem the world. (4 Credits)",
          },
          {
            code: "215",
            title: "The Azusa Street Revival",
            description:
              "The revival at the beginning of the 20th century that provided the foundation of the Pentecostal and Charismatic movements. (4 Credits)",
          },
          {
            code: "217",
            title: "The Christian Hope",
            description:
              "Analyzes what the Bible calls the resurrection of the dead and the hope it offers Christians. (4 Credits)",
          },
          {
            code: "219",
            title: "The Book of Revelation",
            description:
              "Introduces the student to the Preterist interpretation of John's Revelation. (4 Credits)",
          },
          {
            code: "221",
            title: "Christocentric Hermeneutics",
            description:
              "Students learn how to read the Old Testament through the teachings of Jesus and His Apostles. (4 Credits)",
          },
          {
            code: "347",
            title: "The King of the Kingdom: How Jesus Became King",
            description:
              "The journey from the birth of Jesus to his being crowned King of all creation. (4 Credits)",
          },
          {
            code: "349",
            title: "The Book of Galatians",
            description:
              "The struggle over the Mosaic Law versus Grace, and remaining free from religious bondage. (4 Credits)",
          },
          {
            code: "351",
            title: "Introduction to Preaching",
            description:
              "Prepares students to consider the call of preaching the good news of Jesus and his kingdom. (4 Credits)",
          },
          {
            code: "353",
            title: "Preaching the Kingdom",
            description:
              "Continues the art and skill of preaching, covering textual and topical approaches and principles of public speaking. (4 Credits)",
          },
          {
            code: "355",
            title: "Youth Ministry",
            description:
              "Equipping youth leaders who understand the challenges and rewards of working with teenagers. (4 Credits)",
          },
          {
            code: "357",
            title: "Organization and Administration of the Church",
            description:
              "The principles needed for successfully leading and organizing a local church. (4 Credits)",
          },
          {
            code: "359",
            title: "Theology and Practice of Worship",
            description:
              "Explores the worship of the early followers of Jesus and reviews contemporary trends. (4 Credits)",
          },
          {
            code: "361",
            title: "The Lord's Table",
            description:
              "Surveys the different theological positions and proposes a fresh revelation of the Lord's Table. (4 Credits)",
          },
          {
            code: "363",
            title: "Matthew 24: Past or Future",
            description:
              "A key interpretive passage examined to discern whether the Olivet Discourse speaks of the first century or the future. (4 Credits)",
          },
        ],
      },
    ],
  },
  {
    slug: "master-of-theological-studies",
    degree: "Master of Theological Studies",
    abbr: "M.T.S.",
    credits: "36 Credit Hours",
    summary:
      "Education beyond the bachelor level in traditional and contemporary theology, training qualified leaders to teach the present reign of Christ.",
    objective:
      "The objective of the Master of Theological Studies is to educate students beyond the bachelor level in traditional and contemporary theology. We use Christian textbooks in theology, video lectures, and personal research. Students study different theological views and draw personal conclusions to prepare for effective Christian service. Our desire is to train qualified leaders who can teach the biblical principles of the present reign of Christ. Students in the M.T.S. program will learn the apostolic hermeneutic used by the first followers of Jesus. Thinking theologically is key to owning your own thoughts and convictions concerning the revelation of Scripture.",
    details: [
      {
        label: "Thesis",
        value:
          "A carefully argued paper of approximately 30 to 50 pages presenting an original, documented biblical and theological argument.",
      },
      {
        label: "Credit Note",
        value:
          "All classes are 3 credit hours, with the exception of the Thesis.",
      },
    ],
    groups: [
      {
        name: "Core Classes",
        courses: [
          {
            code: "502",
            title: "Introduction to Theology",
            description:
              "Foundational to the study of theology. Students learn the divisions and sub-divisions of theological studies and begin to think theologically.",
          },
          {
            code: "605",
            title: "The Book of Hebrews",
            description:
              "Dr. Lynn Hiles takes students through one of the major theological texts of the New Testament with masterful exegesis and insight.",
          },
          {
            code: "504",
            title: "Theological Covenants",
            description:
              "Surveys and contrasts Dispensational, Covenant, New Covenant, and Better Covenant Theology, revealing the foundation on which many Christians build their faith.",
          },
          {
            code: "506",
            title:
              "Systematic and Biblical Theology I (Christology, Soteriology)",
            description:
              "The study of the Son of God and his redemption of humanity, focusing on historical atonement theories: Penal Substitution and Christus Victor.",
          },
          {
            code: "508",
            title:
              "Systematic and Biblical Theology II (Ecclesiology, Eschatology)",
            description:
              "A study of the Church and God's purpose for his people and creation, and how the church functions in its eschatological role of advancing the kingdom.",
          },
          {
            code: "610",
            title: "World Missions: Transforming Nations",
            description:
              "The task of world missions based on the Great Commission, announcing Jesus and his kingdom to all nations.",
          },
          {
            code: "512",
            title: "Systematic and Biblical Theology III (Theology of Israel)",
            description:
              "An advanced study into Replacement Theology and God's plan for Israel through the lens of both old and new covenants.",
          },
          {
            code: "614",
            title: "Advanced Hermeneutics: Christocentric Interpretation",
            description:
              "A fresh look at standard hermeneutics, looking for Jesus in both the Old and New Testaments as the authoritative standard for all interpretation.",
          },
          {
            code: "616",
            title: "Atonement-Based Healing",
            description:
              "Boldly teaches that physical healing was provided through the death of Jesus and can be attained by all believers.",
          },
          {
            code: "618",
            title: "Theology of Spiritual Leadership",
            description:
              "The study of spiritual leadership in action and doctrine throughout Scripture, releasing the saints into their kingdom vocation.",
          },
        ],
      },
    ],
  },
  {
    slug: "doctor-of-ministry",
    degree: "Doctor of Ministry",
    abbr: "D.Min.",
    credits: "30 Credit Hours",
    summary:
      "Training present Christian leaders to be more effective in their service to the church, with a choice of four tracks of special emphasis.",
    objective:
      "Our objective for the Doctor of Ministry program is to train present Christian leaders to be more effective in their service to the church, combining spiritual transformation with academic excellence. Built upon a master's level of theological understanding, the D.Min. student makes a personal application of theology to their ministry. Whereas a traditional Doctor of Theology degree primarily leads to academic vocations, our D.Min. goal is to assist the student in becoming a transformational ministry leader. Choose from four tracks: Apostolic Leadership, Better Covenant Theology, New Testament Studies, and Father and Son Theology.",
    details: [
      {
        label: "Dissertation",
        value:
          "A carefully argued paper of 50 to 70 pages presenting an original, documented biblical and theological argument.",
      },
      {
        label: "Credit Note",
        value: "All classes are 3 credit hours except the Dissertation.",
      },
    ],
    groups: [
      {
        name: "Core Courses",
        note: "Required of every D.Min. student regardless of the track chosen.",
        courses: [
          {
            code: "702",
            title: "Introduction to Theology",
            description:
              "Foundational to the study of theology, teaching students to think theologically.",
          },
          {
            code: "807",
            title: "The Book of Hebrews",
            description:
              "Dr. Lynn Hiles takes students through one of the major theological texts of the New Testament.",
          },
          {
            code: "704",
            title: "Theological Covenants",
            description:
              "Surveys and contrasts Dispensational, Covenant, New Covenant, and Better Covenant Theology.",
          },
          {
            code: "806",
            title:
              "Systematic and Biblical Theology I (Christology, Soteriology)",
            description:
              "The study of the Son of God and his redemption of humanity through the lens of the new covenant.",
          },
        ],
      },
      {
        name: "Track: Apostolic Leadership",
        courses: [
          {
            code: "808",
            title: "Foundations for Apostolic Ministry",
            description:
              "Lays the biblical foundation necessary for apostolic ministry: calling, prophetic confirmation, gifts, and accountability.",
          },
          {
            code: "810",
            title: "The Function of the Apostolic",
            description:
              "Digs deep into the apostle's purpose in God's design for the church and relationship to the local church.",
          },
          {
            code: "812",
            title: "Practical Considerations of the Apostolic Ministry",
            description:
              "An honest, thoughtful look at how apostolic ministry works in daily life and finding your individual leadership skills.",
          },
          {
            code: "814",
            title: "Survey of Contemporary Apostles",
            description:
              "A research class to locate six apostles and interview them, generating insight into modern apostolic ministry.",
          },
        ],
      },
      {
        name: "Track: Better Covenant Theology",
        courses: [
          {
            code: "803",
            title: "Better Covenant Theology I",
            description:
              "Traces the history and major teachings of Better Covenant Theology, studying the 10 pillars and contrasting them with traditional theologies.",
          },
          {
            code: "805",
            title: "Better Covenant Theology II",
            description:
              "Reviews and analyzes Better Covenant Theology objectively, applying biblical exegesis to its major components.",
          },
          {
            code: "809",
            title: "Better Covenant Theology III",
            description:
              "Looks backward into church history to locate the 10 pillars of BCT and discern what is built on former pioneers and what is fresh revelation.",
          },
        ],
      },
      {
        name: "Track: New Testament Studies",
        courses: [
          {
            code: "Colloquium",
            title: "New Testament Study Colloquium",
            description:
              "A historical and theological search into the world of the first century and the early church, using N.T. Wright's textbook for a comprehensive academic study of the New Testament. (12 Credits)",
          },
        ],
      },
      {
        name: "Track: Father and Son Theology",
        courses: [
          {
            code: "Colloquium",
            title: "Father / Son Theology Colloquium",
            description:
              "A comprehensive study of the theology first articulated by Dr. Harold Eberle, examining how Greek philosophy affected church doctrines and beginning with the heart of God and his desire for relationship with humanity. (12 Credits)",
          },
        ],
      },
    ],
  },
  {
    slug: "doctor-of-theology",
    degree: "Doctor of Theology",
    abbr: "Th.D.",
    credits: "45 Credit Hours",
    summary:
      "The pinnacle of theological studies. A directed research program with regular video chats with Dr. Stan Newton, culminating in a dissertation and defense.",
    objective:
      "Our Doctor of Theology (Th.D.) program is a directed research program where students dig deep into cutting-edge topics in theology and practical issues facing the Church. It is a specialized research degree beyond the Doctor of Ministry level, educating students in the methods of theological research and the ability to write on biblical exegesis, biblical history, biblical and systematic theology, and contemporary themes in Christianity. All Th.D. students will have regular video chats with Dr. Stan Newton to challenge, inspire, and keep them on track to complete their degree.",
    details: [
      {
        label: "Program",
        value:
          "A 45-credit program beyond the master level and 15 credits beyond a Doctor of Ministry.",
      },
      {
        label: "Dissertation",
        value:
          "A carefully written paper of no less than 150 pages showing original thought, founded on biblical insight using a hermeneutic that is apostolic and Christocentric, and defended before one or more faculty members.",
      },
    ],
    groups: [
      {
        name: "Goals for Successful Th.D. Students",
        courses: [
          {
            code: "",
            title: "Think biblically and theologically",
            description:
              "Ability to think biblically and theologically and to relate social issues to the Christian faith.",
          },
          {
            code: "",
            title: "Use and interpret Scripture",
            description:
              "Ability to use and interpret Scripture, to teach well, and to lead others.",
          },
          {
            code: "",
            title: "Write persuasively",
            description:
              "Ability to write persuasive articles and books in historic and contemporary theology, with appreciation of the globalized context in which theology is practiced.",
          },
        ],
      },
      {
        name: "Courses",
        courses: [
          {
            code: "911",
            title: "Readings in Historic and Contemporary Theology",
            description:
              "Required readings deepening understanding of how theology has evolved since the first century, with a survey of each book read. (5 Credits)",
          },
          {
            code: "921",
            title:
              "Readings in Current Theological Movements and Issues in the Church",
            description:
              "Elective readings in current theological trends from the 1950s to the present, selected to prepare for the dissertation. (5 Credits)",
          },
          {
            code: "931",
            title: "Scriptura: Bases for Progressive and Trajectory Theologies",
            description:
              "Students choose at least three theological topics from history, trace how each evolved, and use trajectory theology to project where it may be in 20 to 50 years. (5 Credits)",
          },
          {
            code: "941",
            title: "Survey of Research Methodologies",
            description:
              "Students learn data collection and analysis methods used in research, reading From Topic to Thesis by Michael Kibbe. (5 Credits)",
          },
          {
            code: "951-961",
            title: "Research for Doctor of Theology Dissertation",
            description:
              "A deep study within the chosen topic with careful citation of all resources, building on previous classes. (10 Credits)",
          },
          {
            code: "971-991",
            title: "Writing and Defending the Dissertation",
            description:
              "The heart of the program. A dissertation of no less than 150 pages showing original thought, defended before faculty in person or by live video. (15 Credits)",
          },
        ],
      },
    ],
  },
];

export type TuitionPlan = {
  degree: string;
  abbr: string;
  credits: string;
  price: string;
  priceNote: string;
  options: string[];
};

export const tuition = {
  heading: "Tuition",
  intro:
    "We offer quality theological education at very low tuition rates so that more students have the opportunity to study. We have a One-Price policy: there is no application fee, no credit evaluation fee, and no additional graduation fee.",
  highlights: [
    "Group discounts when a church has four or more enrolling at the same time.",
    "Generous scholarships are available for students living in economically depressed nations.",
    "If notice of withdrawal is received within 30 days from the day of payment, 100% of paid tuition will be refunded.",
  ],
  plans: [
    {
      degree: "Bachelor of Theology",
      abbr: "B.Th.",
      credits: "90 Credits",
      price: "$900",
      priceNote: "prepaid",
      options: [
        "$900 if prepaid",
        "$1,200 if paid monthly at $100 for 12 months",
        "One tuition rate for all students, regardless of how many credit hours are taken",
      ],
    },
    {
      degree: "Master of Theological Studies",
      abbr: "M.T.S.",
      credits: "36 Credits",
      price: "$1,400",
      priceNote: "paid in full",
      options: [
        "$50.00 per credit hour ($1,800)",
        "Pay $1,400 in full before classes begin and receive $400 off",
        "Monthly: $120 a month for 15 months",
      ],
    },
    {
      degree: "Doctor of Ministry",
      abbr: "D.Min.",
      credits: "30 Credits",
      price: "$1,400",
      priceNote: "paid in full",
      options: [
        "$60.00 per credit hour ($1,800)",
        "Pay $1,400 in full and save $400",
        "Monthly: $120 a month for 15 months",
        "Enrollment requires a master's degree (or qualifying equivalent)",
      ],
    },
    {
      degree: "Doctor of Theology",
      abbr: "Th.D.",
      credits: "45 Credits",
      price: "$1,950",
      priceNote: "one-time payment",
      options: [
        "$60 per credit hour. Full program of 45 credits: $2,700",
        "$750 discount for a one-time payment of $1,950",
        "When paid over 20 months: $135 a month",
        "Entering with a doctor's degree (15 hours): $900, or $700 one-time",
      ],
    },
  ] as TuitionPlan[],
  footnote:
    "Each class may have textbooks, which are not included in tuition cost.",
};

export type Faculty = {
  name: string;
  title?: string;
  image: string;
  bio: string;
};

// Charles Seip intentionally omitted per request.
export const faculty: Faculty[] = [
  {
    name: "Dr. Stan Newton",
    title: "President and Professor",
    image: "/faculty/stan-newton.jpeg",
    bio: "Dr. Stan Newton received a deep revelation of the kingdom of God while preparing for ordination. His study of Scripture began at Moody Bible Institute and he later earned his D.Min. degree from Vision International University. His gifting is explaining complex theological issues in a reasonable and simple fashion. As founder and President of Crown Institute, he teaches classes and will be your guide as you study from other professors and leaders.",
  },
  {
    name: "Dr. Lynn Hiles",
    title: "Author, Teacher, Theologian",
    image: "/faculty/lynn-hiles.png",
    bio: "Dr. Lynn Hiles is an author, teacher, theologian, and Bible scholar who has traveled the world preaching the message of Grace and the Kingdom of God. He has written several books, including Unforced Rhythms of Grace, The Revelation of Jesus Christ, and From Law to Grace. In full-time traveling ministry since 1980, he gives insight and oversight to churches internationally.",
  },
  {
    name: "Dr. Nikola Dimitrov",
    title: "Pastor and Author",
    image: "/faculty/nikola-dimitrov.png",
    bio: "Nikola Dimitrov is a Bulgarian pastor leading several churches in the Burgas region, committed to releasing the power of the kingdom through teaching and demonstration. He does more than teach on healing; he and his churches regularly see miraculous healings. His optimistic faith, based on nothing but the Word of God, will inspire you for a greater flow of the supernatural. He is also the author of The Four in One Gospel of Jesus.",
  },
  {
    name: "Adam Morris",
    title: "Missionary and Prophetic Teacher",
    image: "/faculty/adam-morris.png",
    bio: "Adam Morris ministers in Russia and surrounding nations, where he does prophetic training and teaches on our identity as sons and daughters of a good God. He and his wife Katherine lead Clarion Call, based in Murmansk, Russia, where they work with local churches and lead a school of ministry, spreading the love of the Father and the power of the Kingdom in Eastern Europe.",
  },
  {
    name: "Peter Seth Neuberger",
    title: "Missionary, East Africa",
    image: "/faculty/peter-neuberger.png",
    bio: "Peter and Rebekah Neuberger serve as missionaries in East Africa, now living in Rwanda. Peter is founder and president of Kashabba Tribe Ministries, established in 2007. He says: I love preaching Jesus and ministering the Father's love and seeing the Kingdom of God manifest in the earth with salvations, healings, deliverances, peace, love, joy, miracles, signs, and wonders.",
  },
  {
    name: "Dr. Martin Trench",
    title: "Lead Pastor and Author",
    image: "/faculty/martin-trench.png",
    bio: "Martin is the author of Eyes Wide Open, co-author of Victorious Eschatology, and a contributing author to Miracles Still Happen. Originally from Scotland, he has lived in Canada since 2009, where he is Lead Pastor of Gateway Alliance Church in Edmonton, Alberta. He is a popular inspirational speaker and Bible teacher who consults with churches and leaders, coaching them on spiritual health, church growth, and innovation.",
  },
];

export const application = {
  heading: "Getting Started",
  lead: "Let's talk.",
  body: [
    "At Crown Institute of Theology, every student has a different background, biblical interests, and passion for ministry. Once enrolled, we create a unique program for you to pursue your studies at every level: Bachelor, Master, and Doctorate.",
    "Provide us with your name, address, and email address. It's time to start. Begin today.",
  ],
};
