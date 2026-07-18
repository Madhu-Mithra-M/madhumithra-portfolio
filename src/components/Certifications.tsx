import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "../data/content";
import { Reveal } from "./Reveal";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6"
    >
      <Reveal>
        <span className="section-label">07 · Certifications</span>

        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright">
          Certifications
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="glass mt-8 rounded-2xl p-7">
          <div className="flex items-center gap-2 text-teal">
            <BadgeCheck size={18} />
            <span className="font-mono text-xs uppercase tracking-widest">
              Professional Certifications
            </span>
          </div>

          <div className="mt-8 space-y-8">
  {certifications.map((c) => (
    <div
      key={c.name}
      className="grid gap-8 rounded-2xl border border-panel-border p-6 lg:grid-cols-[1fr_1.2fr]"
    >
      {/* Left - Certificate Image */}
      <div className="flex flex-col">
  <img
    src={c.image}
    alt={c.name}
    className="w-full rounded-xl border border-panel-border object-cover shadow-lg"
  />

  <a
    href={c.link}
    target="_blank"
    rel="noreferrer"
    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-teal bg-teal/5 px-5 py-3 font-semibold text-teal transition hover:bg-teal/10"
  >
    <ExternalLink size={18} />
    View Certificate
  </a>
</div>

      {/* Right - Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold text-mist-bright">
            {c.name}
          </h3>

          <p className="mt-2 font-mono text-xs uppercase tracking-widest text-violet-soft">
            {c.issuer}
          </p>

          <p className="mt-5 leading-relaxed text-mist">
            {c.detail}
          </p>

          <div className="mt-6">
            <p className="font-mono text-xs uppercase tracking-widest text-teal">
              Key Learning
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mist">
              <li>Security Operations Center (SOC)</li>
              <li>SIEM Fundamentals</li>
              <li>Incident Response</li>
              <li>Network Security</li>
              <li>Threat Detection & Analysis</li>
            </ul>
          </div>
        </div>

        
      </div>
    </div>
  ))}
</div>
        </div>
      </Reveal>
    </section>
  );
}