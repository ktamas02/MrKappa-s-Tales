import { FaBook, FaHome, FaUser } from "react-icons/fa";

const avventurieroMenuItems = [
  {
    label: "Home",
    icon: <FaHome />,
    path: "/",
  },
  {
    label: "Storie",
    icon: <FaBook />,
    children: [
      {
        label: "Fantasy",
        children: [
          { label: "Elfi", path: "/elfi" },
          { label: "Nani", path: "/nani" },
        ],
      },
    ],
  },
  {
    label: "Chi Siamo",
    icon: <FaUser />,
    path: "/about",
  },
  {
    label: "Contatti",
    path: "/contact",
  },
];

export default avventurieroMenuItems;
