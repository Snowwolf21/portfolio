
import Link from "next/link";
import { Mail } from "lucide-react";

import {FiLinkedin, FiGithub, FiInstagram, FiTwitter} from "react-icons/fi"


export default function HeroSocials() {
  return (
    <div className="flex items-center md:justify-start justify-center gap-8 pt-4">
      <Link 
      href="https://github.com/Snowwolf21"
      aria-label="Visit my Github page"
      title="Github"
      target="_blank"
      className="border-gray-900 dark:border-white/10">
      
        <FiGithub 
        aria-hidden="true"
        className="h-6 w-6" />
      </Link>

      <Link 
      href="https://www.linkedin.com/in/engakinkunmi/"
      aria-label="Visit my Linkedin page"
      title="Linkedin"
      target="_blank"
      className="border-gray-500 dark:border-white/10">
        <FiLinkedin 
        aria-hidden="true"
        className="h-6 w-6" />
      </Link>

      <Link 
      href="mailto:snowwolf0231@gmail.com"
      aria-label="Send me an email"
      title="Mail"
      target="_blank">
        <Mail 
        className="h-6 w-6" 
        aria-hidden="true"
        />
      </Link>

      <Link 
      href="https://www.instagram.com/akin_kunmi3"
      aria-label="Visit my Instagram page"
      title="Instagram"
      target="_blank">
        <FiInstagram 
        aria-hidden="true"
        className="h-6 w-6" />
      </Link>

      <Link 
      href="https://x.com/engakinkunmi"
      aria-label="Visit my X page"
      title="Twitter"
      target="_blank">
        <FiTwitter 
        aria-hidden="true"
        className="h-6 w-6" 
        />
      </Link>
    </div>
  );
}