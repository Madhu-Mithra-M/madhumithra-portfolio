import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { projects, type Project } from "../data/content";
import { Reveal } from "./Reveal";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl p-0"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} case study`}
        >
          <div className="relative">
            <img src={project.image} alt={project.name} className="h-56 w-full object-cover" />
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-ink/70 p-2 text-mist-bright hover:text-teal"
              aria-label="Close case study"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-7">
            <span className="section-label">{project.status}</span>
            <h3 className="mt-2 font-display text-2xl font-semibold text-mist-bright">{project.name}</h3>
            <p className="mt-1 text-sm text-violet-soft">{project.tagline}</p>

            <p className="mt-5 leading-relaxed text-mist">{project.description}</p>

            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-teal">Role</p>
            <p className="mt-1 text-sm text-mist-bright">{project.role}</p>

            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-teal">Highlights</p>
            <ul className="mt-2 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-mist">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                  {h}
                </li>
              ))}
            </ul>

            <p className="mt-5 font-mono text-xs uppercase tracking-widest text-teal">Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="rounded-full border border-panel-border px-3 py-1 font-mono text-xs text-mist-bright">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-panel-border px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-mist-bright hover:border-teal hover:text-teal"
                >
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-28">
      <Reveal>
        <span className="section-label">03 · Projects</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright sm:text-4xl">
          Featured Work
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="glass group flex h-full flex-col overflow-hidden rounded-2xl"
            >
              <button
                onClick={() => setActive(project)}
                className="block overflow-hidden text-left"
                aria-label={`Open ${project.name} case study`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-contain bg-panel"
                />
              </button>

              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-teal">{project.status}</span>
                <button onClick={() => setActive(project)} className="text-left">
                  <h3 className="mt-2 font-display text-lg font-semibold text-mist-bright transition-colors group-hover:text-teal">
                    {project.name}
                  </h3>
                </button>
                <p className="mt-1 text-sm text-mist">{project.tagline}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((s) => (
                    <span key={s} className="rounded-full border border-panel-border px-2.5 py-1 font-mono text-[11px] text-mist">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4 pt-6 font-mono text-xs uppercase tracking-wider">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-mist-bright transition-colors hover:text-teal"
                    >
                      <Github size={13} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-mist-bright transition-colors hover:text-teal"
                    >
                      <ExternalLink size={13} /> Demo
                    </a>
                  )}
                  <button
                    onClick={() => setActive(project)}
                    className="ml-auto inline-flex items-center gap-1.5 text-violet-soft transition-colors hover:text-teal"
                  >
                    Case Study →
                  </button>
                </div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
