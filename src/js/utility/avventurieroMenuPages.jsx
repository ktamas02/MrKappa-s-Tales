import {
  FaBook,
  FaCross,
  FaFlag,
  FaGlobe,
  FaHome,
  FaPhone,
  FaUser,
} from "react-icons/fa";

const avventurieroMenuItems = [
  {
    label: "Home",
    icon: <FaHome />,
    path: "/",
  },
  {
    label: "Deyhar Phos",
    icon: <FaGlobe />,
    children: [
      {
        label: "States",
        icon: <FaFlag />,
        children: [
          { label: "Sacro Impero di Krasias", path: "/sik" },
          { label: "Regno di Frascado", path: "/rf" },
          { label: "Repubblica di Calan", path: "/rc" },
          { label: "Terre Libere di Vyshna", path: "/tlv" },
          { label: "Regno di Barteiras", path: "/rb" },
          { label: "Unione Alcurinense", path: "/ua" },
          { label: "Impero Nazsesian", path: "/in" },
          { label: "Protettorato di Grimia", path: "/pg" },
          { label: "Gran Ducato di Eriria", path: "/gde" },
          { label: "Principato di Colbalia", path: "/pc" },
          { label: "Santa Diocesi di Sanha", path: "/sds" },
          { label: "Gran Ducato di Viras", path: "/gdv" },
          { label: "Gran Ducato di Dourandia", path: "/gdd" },
        ],
      },
      {
        label: "Religione",
        icon: <FaCross />,
        children: [
          {
            label: "Religioni",
            children: [
              { label: "Il Patto Primordiale", path: "/pp" },
              { label: "Il Credo di Sanha", path: "/cs" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Contatti",
    icon: <FaPhone />,
    path: "/contact",
  },
];

export default avventurieroMenuItems;
