import peaceforwardImg from "@/assets/projects/peaceforwardedit.png";
import watchflexImg from "@/assets/projects/watchflexedit.png";
import stylehubImg from "@/assets/projects/stylehub.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  link: string;
  img: StaticImageData;
  demo?: {
    username: string;
    password: string;
  };
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Peace Forward",
    description:
      "PeaceForward is an NGO aimed at supporting communities recovering from conflict through various empowerment initiatives. The website effectively highlights their mission, promotes engagement, and facilitates donations, contributing to over $15,000 raised for global humanitarian aid.",
    link: "https://peaceforwardcanada.org",
    img: peaceforwardImg,
    stack: ["nextjs", "typescript", "tailwindcss", "wordpress", "mysql"],
  },
  {
    title: "WatchFlex",
    description:
      "WatchFlex is a TV Guide website using the MovieDB API to categorize movies and TV shows. Users can create accounts to rate, comment on titles, and add movies to a watchlist. This platform enhances user engagement by combining entertainment discovery with social features.",
    link: "https://watchflex.onrender.com/",
    img: watchflexImg,
    demo: {
      username: "omar@example.com",
      password: "Helloworld100*",
    },
    stack: ["react", "sass", "nodejs", "express", "mongodb"],
  },
  {
    title: "Style Hub",
    description:
      "StyleHub is an e-commerce platform. It allows customers to create accounts, browse various styles, and seamlessly place orders. Utilizing the Stripe API, the website ensures secure and efficient payment processing.",
    link: "https://style-hub.onrender.com",
    img: stylehubImg,
    demo: {
      username: "admin@admin.com",
      password: "Helloworld100*",
    },
    stack: ["react", "css3", "nodejs", "express", "mongodb"],
  },
];
