import { profile } from "../data/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
      <Reveal>
        <span className="section-label">01 · About</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright sm:text-4xl">
  About Me
</h2>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
  <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-mist sm:text-lg">
    <p>
      I'm{" "}
      <span className="font-semibold text-mist-bright">
        {profile.name}
      </span>
      , a final-year B.Tech Computer Science (Information Security) student
      at VIT Vellore passionate about building secure, scalable, and
      AI-powered software.
    </p>

    <p>
      My work focuses on full-stack development using React, Next.js,
      Flask, Firebase, and modern AI technologies including Gemini API
      and Dialogflow. I enjoy transforming ideas into real-world
      applications with clean architecture and strong security practices.
    </p>

    <p>
      I am also a named co-inventor of a published Indian patent on
      securing AI agents against prompt injection and data leakage.
      Currently, I'm strengthening my Data Structures & Algorithms skills
      in Java while preparing for Software Engineering roles.
    </p>
  </Reveal>

  <Reveal delay={0.2}>
    <div className="grid gap-4">
      <div className="glass rounded-xl p-5">
        <p className="text-3xl font-bold text-teal">9.38</p>
        <p className="mt-1 text-sm text-mist">CGPA</p>
      </div>

      <div className="glass rounded-xl p-5">
        <p className="text-3xl font-bold text-violet-soft">3</p>
        <p className="mt-1 text-sm text-mist">Major Projects</p>
      </div>

      <div className="glass rounded-xl p-5">
        <p className="text-3xl font-bold text-amber">1</p>
        <p className="mt-1 text-sm text-mist">Published Indian Patent</p>
      </div>

      
    </div>
  </Reveal>
</div>
    </section>
  );
}
