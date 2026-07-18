import { Award } from "lucide-react";
import { achievements } from "../data/content";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
   <section
  id="achievements"
  className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6"
>
      <Reveal>
        <span className="section-label">06 · Recognition</span>

        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright sm:text-4xl">
          Achievements
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
  {achievements.map((a, i) => (
    <Reveal key={a.label} delay={i * 0.1}>
      <div className="glass rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-teal">
        <Award size={28} className="text-amber" />

        <h3 className="mt-5 font-display text-xl font-semibold text-mist-bright">
          {a.label}
        </h3>

        <p className="mt-3 text-mist">
          {a.detail}
        </p>
      </div>
    </Reveal>
  ))}
</div>
    </section>
  );
}