// src/data.js

<<<<<<< HEAD:frontend/src/Data/News.js
export const newsData = [
  // {
  //   id: 1,
  //   title: "Helping Hands Initiative",
  //   description:
  //     "Join us in making a difference for underprivileged communities. This initiative provides essential resources like food, education, and shelter to those in need. Volunteers are welcome to contribute in various capacities to help build a better and more sustainable.",
  //   imgSrc:
  //     "https://www.kiyorndlab.com/wp-content/uploads/2023/07/3-Ways-to-Cultivate-Employee-Engagement-Through-Crowdsourcing.jpg",
  //   link: "/upcoming1",
  //   type: "upcoming",
  //   date: "2024-12-01T00:00:00",
  // },
  // {
  //   id: 2,
  //   title: "Water for Life Campaign",
  //   description:
  //     "Our mission to provide clean drinking water to rural areas is ongoing. This campaign focuses on building sustainable water systems to ensure communities have access to safe water, reducing waterborne diseases and improving overall health.",
  //   imgSrc:
  //     "https://wisconsinmuslimjournal.org/wp-content/uploads/2023/09/adobestock_559725888.jpg",
  //   link: "/upcoming2",
  //   type: "upcoming",
  //   date: "2024-12-15T00:00:00",
  // },
=======
<<<<<<<< HEAD:frontend/src/components/News/News.js
import React from "react";
import UpcomingEvents from "./UpcomingEvents"; // Importing the new UpcomingEvents component
import "./News.css"; // Keep your existing styles
import PastEvents from "./PastEvents";
import ForumLanguages from "./ForumLanguages";

function News() {
  return (
    <div className="news-container">
      <UpcomingEvents />
      <PastEvents />
      <ForumLanguages />
    </div>
  );
}

export default News;
========
export const newsData = [
  {
    id: 1,
    title: "Helping Hands Initiative",
    description:
      "Join us in making a difference for underprivileged communities. This initiative provides essential resources like food, education, and shelter to those in need. Volunteers are welcome to contribute in various capacities to help build a better and more sustainable.",
    imgSrc:
      "https://www.kiyorndlab.com/wp-content/uploads/2023/07/3-Ways-to-Cultivate-Employee-Engagement-Through-Crowdsourcing.jpg",
    link: "/upcoming1",
    type: "upcoming",
    date: "2024-12-01T00:00:00",
  },
  {
    id: 2,
    title: "Water for Life Campaign",
    description:
      "Our mission to provide clean drinking water to rural areas is ongoing. This campaign focuses on building sustainable water systems to ensure communities have access to safe water, reducing waterborne diseases and improving overall health.",
    imgSrc:
      "https://wisconsinmuslimjournal.org/wp-content/uploads/2023/09/adobestock_559725888.jpg",
    link: "/upcoming2",
    type: "upcoming",
    date: "2024-12-15T00:00:00",
  },
>>>>>>> 5e0499e1357ef9efc1d00715f2486ef060441514:src/Data/News.js
  {
    id: 1,
    title: "Health Drive 2024",
    description:
      "Our Health Drive 2024 successfully provided free medical check-ups, offering consultations and healthcare services. This initiative focused on preventative care and early diagnosis, helping thousands of people receive critical health services.",
    imgSrc:
      "https://www.shutterstock.com/image-vector/heart-hand-giving-logo-template-260nw-2457545841.jpg",
    link: "/past1",
    type: "past",
  },
  {
    id: 2,
    title: "Educational Empowerment",
    description:
      "Through the Educational Empowerment initiative, we aim to provide children with the tools and resources needed to pursue education. The program focuses on ensuring that every child, especially those from marginalized communities, has access to quality education.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQDjLek0tJU0Hr_7BeYev0y0mj9aDVz5g0wA&s",
    link: "/past2",
    type: "past",
  },
];

export const languages = [
  {
    name: "English",
    description:
      "The primary language for international participation, ensuring wide reach across all regions.",
  },
  {
    name: "French",
    description:
      "A widely spoken language in many African countries, including West and Central Africa, ensuring inclusive communication.",
  },
  {
<<<<<<< HEAD:frontend/src/Data/News.js
    name: "Nyanja",
    description:
      "Widely spoken in Zambia, expressive, melodic, rich cultural heritage."
  },
  {
    name: "Bemba",
    description:
      "Predominant Zambian language, vibrant, tonal, reflects community-focused values.",
  }
];
=======
    name: "Swahili",
    description:
      "Widely spoken in East Africa, including countries like Kenya, Tanzania, and Uganda, facilitating regional participation.",
  },
  {
    name: "Hausa",
    description:
      "A major language spoken in West Africa, including Nigeria, Niger, and Ghana, ensuring inclusion from the region.",
  },
  {
    name: "Amharic",
    description:
      "The official language of Ethiopia, representing one of the oldest African civilizations.",
  },
  {
    name: "Yoruba",
    description:
      "A significant language in West Africa, predominantly spoken in Nigeria, ensuring representation from the area.",
  },
  {
    name: "Zulu",
    description:
      "A widely spoken language in Southern Africa, mainly in South Africa, promoting engagement from the region.",
  },
];
>>>>>>>> 5e0499e1357ef9efc1d00715f2486ef060441514:src/Data/News.js
>>>>>>> 5e0499e1357ef9efc1d00715f2486ef060441514:src/Data/News.js
