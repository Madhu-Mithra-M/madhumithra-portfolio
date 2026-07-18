import { FileText, Github, ShieldCheck } from "lucide-react";
import { patent } from "../data/content";
import { Reveal } from "./Reveal";

export function Patent() {
  return (
    <section id="patent" className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
      <Reveal>
        <span className="section-label">04 · Patent</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright sm:text-4xl">
          Published Indian Patent
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glow-violet glass mt-8 rounded-3xl p-7">
          <div className="space-y-5">

  <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-2 font-mono text-xs uppercase tracking-widest text-teal">
    <ShieldCheck size={14} />
    Published Indian Patent
  </span>

  <h3 className="max-w-4xl font-display text-3xl font-bold leading-tight text-mist-bright">
    {patent.title}
  </h3>

  <div className="flex flex-wrap gap-3 text-sm text-mist">
    <span>Co-Inventor</span>
    <span>•</span>
    <span>{patent.publicationNo}</span>
    <span>•</span>
    <span>Published {patent.publicationDate}</span>
  </div>

  <p className="mt-5 max-w-2xl text-base leading-7 text-mist">
  Published Indian patent on securing AI agents against prompt injection,
  instruction manipulation, and sensitive data leakage using adaptive
  risk-based defense mechanisms.
</p>

</div>

          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-teal">Filed</p>
              <p className="mt-1 text-mist-bright">{patent.filingDate}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-teal">Published</p>
              <p className="mt-1 text-mist-bright">{patent.publicationDate}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-teal">Applicant</p>
              <p className="mt-1 text-mist-bright">{patent.applicant}</p>
            </div>
          </div>

          

          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-widest text-teal">Inventors</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {patent.inventors.map((name) => (
                <span
                  key={name}
                  className={`rounded-full border px-3 py-1.5 font-mono text-xs ${
                    name === "Madhumithra M"
                      ? "border-teal bg-teal/20 text-white font-semibold shadow-lg shadow-teal/20"
                      : "border-panel-border text-mist"
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">

  <a
    href={patent.documents[0].href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-center gap-3 rounded-xl border border-teal bg-panel/30 px-6 py-5 text-lg font-semibold text-teal transition-all duration-300 hover:-translate-y-1 hover:bg-teal/10"
  >
    <FileText size={22} />
    Patent Publication
  </a>

  <a
    href={patent.documents[1].href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-center gap-3 rounded-xl border border-teal bg-panel/30 px-6 py-5 text-lg font-semibold text-teal transition-all duration-300 hover:-translate-y-1 hover:bg-teal/10"
  >
    <FileText size={22} />
    Search Report
  </a>

  <a
    href={patent.github}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center justify-center gap-3 rounded-xl border border-teal bg-panel/30 px-6 py-5 text-lg font-semibold text-teal transition-all duration-300 hover:-translate-y-1 hover:bg-teal/10"
  >
    <Github size={22} />
    GitHub Repository
  </a>

</div>
        </div>
      </Reveal>
    </section>
  );
}
