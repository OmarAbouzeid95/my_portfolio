import peaceforwardImg from "../assets/projects/peaceforwardedit.png";
import watchflexImg from "../assets/projects/watchflexedit.png";
import stylehubImg from "../assets/projects/stylehub.png";

export type Project = {
  title: string;
  description: string;
  link: string;
  img: string;
};

export const projects: Project[] = [
  {
    title: "Peace Forward",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sapiente dolorem laudantium ex ipsam porro velit libero officia atque voluptatem quibusdam cupiditate nostrum praesentium molestiae ducimus quidem, expedita ab. Porro quaerat dolor harum dignissimos, rem aut saepe officia eos blanditiis at possimus nobis aliquam enim. Aspernatur voluptas ratione officiis ut?",
    link: "https://peaceforward.vercel.app",
    img: peaceforwardImg,
  },
  {
    title: "WatchFlex",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sapiente dolorem laudantium ex ipsam porro velit libero officia atque voluptatem quibusdam cupiditate nostrum praesentium molestiae ducimus quidem, expedita ab. Porro quaerat dolor harum dignissimos, rem aut saepe officia eos blanditiis at possimus nobis aliquam enim. Aspernatur voluptas ratione officiis ut?",
    link: "https://watchflex.onrender.com/",
    img: watchflexImg,
  },
  {
    title: "Style Hub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sapiente dolorem laudantium ex ipsam porro velit libero officia atque voluptatem quibusdam cupiditate nostrum praesentium molestiae ducimus quidem, expedita ab. Porro quaerat dolor harum dignissimos, rem aut saepe officia eos blanditiis at possimus nobis aliquam enim. Aspernatur voluptas ratione officiis ut?",
    link: "https://style-hub.onrender.com",
    img: stylehubImg,
  },
];
