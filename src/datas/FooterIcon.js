import {
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { TheOrg, PitchBook } from "../components/vectors";

const FooterIcon = [
  {
    id: 0,
    type: "symbol",
    desc: "PT. Burgeon Adaire International's Instagram Profile Page",
    link: "https://www.instagram.com/burgeonadaire",
    icon: faInstagram,
  },
  {
    id: 1,
    type: "symbol",
    desc: "PT. Burgeon Adaire International's LinkedIn Profile Page",
    link: "https://linkedin.com/company/burgeonadaire",
    icon: faLinkedin,
  },
  {
    id: 2,
    type: "symbol",
    desc: "PT. Burgeon Adaire International's Twitter X Profile Page",
    link: "https://twitter.com/burgeonadaire",
    icon: faXTwitter,
  },
  {
    id: 3,
    type: "symbol",
    desc: "PT. Burgeon Adaire International's GitHub Page",
    link: "https://github.com/BurgeonALab",
    icon: faGithub,
  },
  {
    id: 4,
    type: "svg",
    desc: "PT. Burgeon Adaire International's The Org Profile Page",
    link: "https://bit.ly/3SWvfNS",
    icon: TheOrg,
    height: "auto",
    width: "28px",
    classname:
      "social-media-footer-items-org social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center",
  },
  {
    id: 5,
    type: "svg",
    desc: "PT. Burgeon Adaire International's PitchBook Profile Page",
    link: "https://pitchbook.com",
    icon: PitchBook,
    height: "28px",
    width: "auto",
    classname:
      "social-media-footer-items-pitchbook social-media-footer-mobile-links mt-3 d-flex justify-content-center align-items-center",
  },
];

export default FooterIcon;
