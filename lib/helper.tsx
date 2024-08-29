import { SiLinktree } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export function resolveMediaIcon(link: string) {
  if (link.includes("linktr.ee")) {
    return <SiLinktree className="md:size-10 size-10" />;
  } else if (link.includes("twitter.com")) {
    return <FaXTwitter className="md:size-7 size-4" />;
  } else if (link.includes("instagram.com")) {
    return <FaInstagram className="md:size-7 size-4" />;
  } else if (link.includes("linkedin.com")) {
    return <FaLinkedin className="md:size-7 size-4" />;
  } else {
    return <IoIosGlobe className="md:size-7 size-4" />;
  }
}
