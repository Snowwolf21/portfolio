
import Link from "next/link";
import { Mail } from "lucide-react";

import {FiLinkedin, FiGithub, FiInstagram, FiTwitter} from "react-icons/fi"


export default function HeroSocials() {
  return (
    <div className="flex items-center md:justify-start justify-center gap-8 pt-4">
      <Link href="https://github.com/Snowwolf21"
      title="Github"
      target="_blank"
      className="border-gray-900 dark:border-white/10">
      
        <FiGithub className="h-6 w-6" />
      </Link>

      <Link href="https://www.linkedin.com/in/engakinkunmi/"
      title="Linkedin"
      target="_blank"
      className="border-gray-500 dark:border-white/10">
        <FiLinkedin className="h-6 w-6" />
      </Link>

      <Link href="mailto:snowwolf0231@gmail.com"
      title="Mail"
      target="_blank">
        <Mail className="h-6 w-6" />
      </Link>

      <Link href="https://www.instagram.com/akin_kunmi3"
      title="Instagram"
      target="_blank">
        <FiInstagram className="h-6 w-6" />
      </Link>

      <Link href="https://x.com/engakinkunmi"
      title="Twitter"
      target="_blank">
        <FiTwitter className="h-6 w-6" />
      </Link>
    </div>
  );
}