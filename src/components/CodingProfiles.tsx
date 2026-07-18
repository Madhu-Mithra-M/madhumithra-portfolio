
import { socials } from "../data/content";
import { Reveal } from "./Reveal";
import { ExternalLink } from "lucide-react";

export function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6"
    >
      <Reveal>
        <span className="section-label">08 · Coding</span>

        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright">
          Coding Profiles
        </h2>
      </Reveal>

      <Reveal delay={0.05}>
  <div className="mt-12 grid justify-center gap-8 md:grid-cols-2">
    <a
      href={socials.leetcode}
      target="_blank"
      rel="noreferrer"
      className="glass group mx-auto w-full max-w-md overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-teal"
    >
     <div className="bg-white p-6">
  <img
    src="/assets/leetcode-logo.png"
    alt="LeetCode"
    className="mx-auto h-44 w-full object-contain"
  />
</div>

      <div className="flex flex-1 flex-col p-5">
  
  <h3 className="mt-2 font-display text-xl font-semibold text-mist-bright">
    LeetCode
  </h3>

  <div className="mt-8">
  <div className="flex items-center justify-center rounded-xl border border-teal p-4 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-ink">
    <ExternalLink size={18} className="mr-2" />
    <span className="text-base font-medium">
  View Profile
</span>
  </div>
</div>
</div>
    </a>

    <a
      href={socials.gfg}
      target="_blank"
      rel="noreferrer"
      className="glass group mx-auto w-full max-w-md overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-teal"
    >
    <div className="bg-white p-5">
  <img
  src="/assets/gfg-logo.png"
  alt="GeeksforGeeks"
  className="mx-auto h-44 w-full object-contain"
/>
</div>

      <div className="flex flex-1 flex-col p-5">
  

  <h3 className="mt-2 font-display text-xl font-semibold text-mist-bright">
    GeeksforGeeks
  </h3>

  <div className="mt-8">
  <div className="flex items-center justify-center rounded-xl border border-teal p-4 text-teal transition-all duration-300 group-hover:bg-teal group-hover:text-ink">
    <ExternalLink size={18} className="mr-2" />
    <span className="text-base font-medium">
  View Profile
</span>
  </div>
</div>
</div>
    </a>
  </div>
</Reveal>
    </section>
  );
}