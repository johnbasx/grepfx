import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { createID } from "./links";

export const footerLinksData = [
  {
    id: createID(),
    footerHead: "Services",
    footers: [
      {
        id: createID(),
        name: "1on1 Coaching",
        link: "/1on1-coaching",
      },
      {
        id: createID(),
        name: "Company Review",
        link: "/company-review",
      },
      {
        id: createID(),
        name: "Accounts Review",
        link: "/accounts-review",
      },
      {
        id: createID(),
        name: "Consulting",
        link: "/consulting",
      },
      {
        id: createID(),
        name: "Tips & Tricks",
        link: "/tips-&-tricks",
      },
    ],
  },
  {
    id: createID(),
    footerHead: "Company",
    footers: [
      {
        id: createID(),
        name: "About",
        link: "/about",
      },
      {
        id: createID(),
        name: "Meet the Team",
        link: "/meet-the-team",
      },
      {
        id: createID(),
        name: "Testimonials",
        link: "/testimonials",
      },
      {
        id: createID(),
        name: "Fundings",
        link: "/fundings",
      },
    ],
  },
];

export const socialLinksData = [
  {
    id: createID(),
    link: "#!",
    name: "Meta, Facebook",
    Icon: FaFacebook,
  },
  {
    id: createID(),
    link: "#!",
    name: "Instagram",
    Icon: FaInstagram,
  },
  {
    id: createID(),
    link: "#!",
    name: "Twitter",
    Icon: FaTwitter,
  },
  {
    id: createID(),
    link: "#!",
    name: "Github",
    Icon: FaGithub,
  },
  {
    id: createID(),
    link: "#!",
    name: "Dribble",
    Icon: FaDribbble,
  },
];
