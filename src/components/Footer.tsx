import { Github, Linkedin, Code2 } from "lucide-react";
import { profile, socials } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-panel-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {profile.name}. Designed & Developed by Madhumithra M
        </p>
        <div className="flex items-center gap-4 text-mist">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-teal">
            <Github size={17} />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal">
            <Linkedin size={17} />
          </a>
          <a href={socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-teal">
            <Code2 size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
