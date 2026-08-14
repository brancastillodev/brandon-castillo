const projects = [
  {
    title: "Yu-Gi-Oh! Randomizer!",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1732663508/yugi.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1732664481/yugi2.png",
      "https://res.cloudinary.com/daynclfo8/image/upload/f_webp,q_80/v1732652065/yugi3.png",
    ],
    inicio: "Jul 2024",
    final: "Jul 2024",
    date: "Jul 2024",
    web: "https://givemeayugiohcard.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=NEzQ7VnWCLI",
    github: "http://github.com/brancastillodev/givemeayugiohcard",
    desc: "Website for getting a random Yu-Gi-Oh! card from the whole collection. Build it with NodeJs, Express and React. It use an external API.",
    mainFeat: [
      {
        title: "Draw a Random Card",
        desc: "Fetch a random Yu-Gi-Oh! card from YGOPRODeck, the most comprehensive and regularly updated Yu-Gi-Oh! API.",
      },
      {
        title: "Save the image",
        desc: "Click on the card image to save it in full resolution.",
      },
    ],
    techs: [
      "NodeJs",
      "Express",
      "Curl",
      "YGOPRODeck API",
      "React",
      "Javascript",
      "Axios",
      "Sass",
    ],
  },
  {
    title: "Your Mood",
    photos: [
      "https://res.cloudinary.com/daynclfo8/image/upload/v1768150121/2026-01-11-13-48-29_zktvzz.png",
    ],
    web: "https://your-mood.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=2PzNBIX46Wc",
    github: "https://github.com/brancastillodev/your-mood",
    desc: "A website that gives you a song based on your mood.",
    inicio: "May 2024",
    final: "May 2024",
    date: "May 2024",
    mainFeat: [
      {
        title: "Discover Random Songs",
        desc: "Receive song recommendations based on your mood.",
      },
    ],
    techs: ["React", "Javascript", "Sass" , "HTML5", "React-Youtube"],
  },
  {
    title: "YouFast",
    photos: [
     "https://res.cloudinary.com/daynclfo8/image/upload/v1768158039/2026-01-11-15-57-10_wgtj9p.png"
    ],
    inicio: "Mar 2024",
    final: "Mar 2024",
    date: "Mar 2024",
    web: "https://youfast.vercel.app/",
    youtube: "https://www.youtube.com/watch?v=IoIIYAMlT6g",
    github: "http://github.com/brancastillodev/youfast",
    desc: "A tool designed to help elders easily search for songs on YouTube.",

    mainFeat: [
      {
        title: "Faster easier song searcher",
        desc: "Easily search for your favorite songs with this intuitive tool.",
      },
    ],
    techs: [
      "React",
      "HTML5",
      "dotEnv",
      "Axios",
      "Sass",
      "youtube-api-search",
      "google-api-client",
      "react-router-dom",
    ],
  },
];

export default projects;
