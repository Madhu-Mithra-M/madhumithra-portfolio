import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { profile, socials } from "../data/content";
import { StateMachineWidget } from "./StateMachineWidget";

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

export function Hero() {
  const typed = useTypedRoles(profile.roles);

  return (
    <section
      id="hero"
      className="snap-section relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-panel-border px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
            <span className="section-label">{profile.status}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-mist-bright sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-9 font-mono text-lg text-teal sm:text-xl"
          >
            {typed}
            <span className="animate-pulse">▌</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeUrl}
              download
              className="glow-teal inline-flex items-center gap-2 rounded-full bg-teal px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
            >
              <Download size={15} /> Download Resume
            </a>
            <a
              href="#patent"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("patent")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full border border-panel-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-mist-bright transition-colors hover:border-violet hover:text-violet-soft"
            >
              <ShieldCheck size={15} /> View Patent
            </a>
            
          </motion.div>

          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.7, delay: 0.5 }}
  className="mt-9 flex items-center gap-5 text-mist"
>
  <a
    href={socials.github}
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className="transition-colors hover:text-teal"
  >
    <Github size={20} />
  </a>

  <a
    href={socials.linkedin}
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
    className="transition-colors hover:text-teal"
  >
    <Linkedin size={20} />
  </a>

  <a
    href={socials.email}
    aria-label="Email"
    className="transition-colors hover:text-teal"
  >
    <Mail size={20} />
  </a>

  <a
    href={socials.whatsapp}
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
    className="transition-colors hover:text-teal"
  >
    <MessageCircle size={20} />
  </a>
</motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="glow-violet absolute -inset-3 rounded-[2rem] border border-violet/30" />
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="relative h-64 w-64 rounded-[1.75rem] object-cover sm:h-72 sm:w-72"
            />
          </div>
          <div className="w-full max-w-xs rounded-2xl border border-panel-border bg-panel/80 backdrop-blur-md p-4">
  <div className="flex items-center gap-3">
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
    </span>

    <div>
      <p className="text-sm font-semibold text-mist-bright">
        Open to Work
      </p>
      <p className="text-xs text-mist">
        SDE · Full-Stack · AI
      </p>
    </div>
  </div>
</div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist transition-colors hover:text-teal"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </motion.button>
    </section>
  );
}
