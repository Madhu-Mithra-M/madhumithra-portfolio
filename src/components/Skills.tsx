import { motion } from "framer-motion";
import { skills } from "../data/content";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
      <Reveal>
        <span className="section-label">02 · Skills</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright sm:text-4xl">
          Technical Skills
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-teal/40">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-teal">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item, idx) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    className="rounded-full border border-panel-border px-3 py-1.5 font-mono text-xs text-mist-bright"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
