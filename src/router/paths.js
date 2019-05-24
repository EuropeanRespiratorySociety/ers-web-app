export default [
  {
    title: "News",
    icon: ["s7-home icon"],
    path: "/news",
    role: ["admin:*"]
  },
  {
    title: "Home",
    icon: ["s7-home icon"],
    path: "https://www.ersnet.org",
    external: true
  },
  {
    title: "MyERS",
    subtitle: "create or manage your account",
    icon: ["icon-my-ers icon"],
    path: "https://my.ersnet.org",
    external: true
  },
  {
    title: "&beta; Search",
    subtitle: "Currently in beta",
    icon: ["s7-search icon"],
    path: "/search"
  },
  {
    title: "Profile",
    icon: ["icon-business-card icon"],
    path: "/user",
    private: true
  },
  {
    title: "AI",
    icon: ["s7-light icon"],
    group: true,
    path: "/ai",
    role: ["admin:*"],
    items: [
      {
        title: "Training tool",
        icon: ["s7-shuffle icon"],
        path: "/training-tool",
        role: ["admin:*"]
      },
      {
        title: "Entity Extraction",
        icon: ["s7-shuffle icon"],
        path: "/entity-extraction",
        role: ["admin:*"]
      },
      {
        title: "Recommender Demo",
        icon: ["s7-shuffle icon"],
        path: "/recommender",
        role: ["admin:*"]
      },
      {
        title: "Classifier Demo",
        icon: ["s7-shuffle icon"],
        path: "/classifier",
        role: ["admin:*"]
      }
    ]
  },
  {
    title: "Publications",
    icon: ["icon-publications icon"],
    path: "https://www.ersnet.org/publications",
    external: true
  },
  {
    title: "&beta; - ERS Vision",
    icon: ["icon-vision icon"],
    path: "/news",
    role: ["admin:*"]
  },
  {
    title: "Continuing Professional Development",
    icon: ["s7-study icon"],
    path: "/cpd",
    role: ["admin:*"]
  },
  {
    title: "ERS Vision",
    icon: ["icon-vision icon"],
    path: "https://www.ersvision.org",
    external: true
  },
  {
    title: "E-learning",
    icon: ["icon-e-learn icon"],
    path: "http://www.ers-education.org/home.aspx",
    external: true
  },
  {
    title: "&beta; Cme Online",
    subtitle: "Currently in beta",
    icon: ["icon-e-learn icon"],
    path: "/cme-online"
  },
  {
    title: "Supported Websites",
    group: true,
    icon: ["s7-link icon"],
    items: [
      {
        title: "European Lung Fundation",
        icon: ["icon-elf icon"],
        path: "http://www.europeanlung.org/en/",
        external: true
      },
      {
        title: "Healthy Lung for life",
        icon: ["icon-hlfl icon"],
        path:
          "http://www.europeanlung.org/en/projects-and-research/projects/healthy-lungs-for-life/home/",
        external: true
      },
      {
        title: "FIRS",
        subtitle: "United For lung Health",
        icon: [],
        path: "https://www.firsnet.org/",
        external: true
      }
    ]
  },
  {
    title: "Contact ERS",
    icon: ["s7-mail icon"],
    path: "https://www.ersnet.org/the-society/who-we-are/contact",
    external: true
  }
];
