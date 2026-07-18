import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { profile, socials } from "../data/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="snap-section mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
      <Reveal>
        <span className="section-label">07 · Contact</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-mist-bright sm:text-4xl">
          Let's build something secure
        </h2>
        <p className="mt-4 max-w-xl text-mist">
          Open to SDE internships and full-time roles. The fastest way to reach me is email — I reply within a
          day.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <a
  href={socials.email}
  target="_blank"
  rel="noreferrer"
  className="glass group rounded-2xl p-6 transition-colors hover:border-teal"
>
            <Mail size={20} className="text-teal" />
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mist">Email</p>
            <p className="mt-1 break-all text-sm font-medium text-mist-bright">{profile.email}</p>
          </a>
          <a
  href={socials.whatsapp}
  target="_blank"
  rel="noreferrer"
  className="glass group rounded-2xl p-6 transition-colors hover:border-green-500"
>
  <MessageCircle size={20} className="text-green-500" />
  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mist">
    WhatsApp
  </p>
  <p className="mt-1 text-sm font-medium text-mist-bright">
    Chat with me
  </p>
</a>

<a
  href={socials.linkedin}
  target="_blank"
  rel="noreferrer"
  className="glass group rounded-2xl p-6 transition-colors hover:border-teal"
>
  <Linkedin size={20} className="text-teal" />
  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mist">
    LinkedIn
  </p>
  <p className="mt-1 text-sm font-medium text-mist-bright">
    Connect with me
  </p>
</a>

<a
  href={socials.github}
  target="_blank"
  rel="noreferrer"
  className="glass group rounded-2xl p-6 transition-colors hover:border-violet"
>
  <Github size={20} className="text-violet-soft" />
  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mist">
    GitHub
  </p>
  <p className="mt-1 text-sm font-medium text-mist-bright">
    View my projects
  </p>
</a>

          <a
  href={`tel:${profile.phone.replace(/\s+/g, "")}`}
  className="glass group rounded-2xl p-6 transition-colors hover:border-violet"
>
  <Phone size={20} className="text-violet-soft" />
  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mist">
    Phone
  </p>
  <p className="mt-1 text-sm font-medium text-mist-bright">
    {profile.phone}
  </p>
</a>

          <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profile.location)}`}
  target="_blank"
  rel="noreferrer"
  className="glass group rounded-2xl p-6 transition-colors hover:border-amber"
>
  <MapPin size={20} className="text-amber" />
  <p className="mt-4 font-mono text-xs uppercase tracking-widest text-mist">
    Location
  </p>
  <p className="mt-1 text-sm font-medium text-mist-bright">
    {profile.location}
  </p>
</a>

          </div>
       
      </Reveal>
    </section>
  );
}
