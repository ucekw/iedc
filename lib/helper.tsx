import { SiLinktree } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

let size: string;

if (typeof window !== "undefined") {
  const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;
  const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;

  size = isLargeScreen ? "1.6rem" : isMediumScreen ? "1rem" : "1.2rem";
}

export function resolveMediaIcon(link: string) {
  if (link.includes("linktr.ee")) {
    return <SiLinktree style={{ width: size, height: size }} />;
  } else if (link.includes("twitter.com")) {
    return <FaXTwitter style={{ width: size, height: size }} />;
  } else if (link.includes("instagram.com")) {
    return <FaInstagram style={{ width: size, height: size }} />;
  } else if (link.includes("linkedin.com")) {
    return <FaLinkedin style={{ width: size, height: size }} />;
  } else if (link.includes("github.com")) {
    return <FaGithub style={{ width: size, height: size }} />;
  } else {
    return <IoIosGlobe style={{ width: size, height: size }} />;
  }
}
