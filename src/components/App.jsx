import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import { schoolProjects } from "../data/school_projects";
import ProjectModal from "./ProjectModal";
import Footer from "./Footer";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import avatar from "../assets/avatar.jpg";

export default function App() {
  const [selected, setSelected] = useState(null);
  const projectItems = useMemo(() => projects, []);
  const schoolProjectItems = useMemo(() => schoolProjects, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] bg-zinc-950 text-zinc-100">
      <header className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-white/10 blur-md" />
              <img
                src={avatar}
                alt="Christoffer Weltzin"
                className="relative h-40 w-40 rounded-full object-cover ring-1 ring-zinc-700/80 shadow-lg shadow-black/40 transition-transform duration-300 ease-out hover:scale-110"
              />
            </div>

            <div>
              <h1 className="text-4xl font-semibold tracking-tight">
                Christoffer Weltzin
              </h1>
              <p className="mt-2 text-zinc-300">Level Designer</p>
            </div>
          </div>

          <div className="flex gap-3">
            <a className="rounded-xl bg-zinc-800 px-4 py-2 text-sm hover:bg-zinc-700" href="#projects">
              The Gang - Projects
            </a>
            <a className="rounded-xl bg-zinc-800 px-4 py-2 text-sm hover:bg-zinc-700" href="#school-projects">
              School projects
            </a>
            <a className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 hover:bg-zinc-200" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-3xl leading-relaxed text-zinc-300">
          I’m a Level Designer with experience creating engaging, player-focused worlds and gameplay experiences across Roblox and UEFN (Fortnite). I’ve worked on both small- and large-scale projects, contributing to kid-friendly games, branded experiences, horror-themed environments, and overall game design.
          <br /><br />
          My strengths lie in blockouts, world-building, iterative level design, and game design. I enjoy prototyping early, playtesting often, and collaborating closely with artists and designers to turn ideas into clear, readable, and fun spaces for players to explore.
          <br /><br />
          I’m comfortable taking ownership of levels and features, but I also enjoy working in teams, giving feedback, and helping others grow. During my time in UEFN, I mentored level design students during their internships, which strengthened my leadership skills and my ability to communicate design intent clearly.
          <br /><br />
          I’m driven by creating spaces that feel intuitive, playful, and memorable—whether that means building fast-paced competitive arenas, cozy hub worlds, atmospheric horror environments, or thoughtfully designed puzzles that engage and challenge players.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        {/* Professional Projects */}
        <section id="projects">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projectItems.map((p) => (
              <button
                key={p.slug}
                onClick={() => setSelected(p)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 text-left hover:border-zinc-700 transition"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 text-sm text-zinc-300">
                        {p.type}
                        {p.genre ? ` • ${p.genre}` : ""}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-zinc-800/70 px-4 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-300 hover:bg-zinc-700 hover:text-white hover:ring-1 hover:ring-zinc-500">
                      View
                      <ArrowRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm text-zinc-300">
                    {p.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* School Projects */}
        <section id="school-projects" className="mt-16">
          <h2 className="text-2xl font-semibold">School Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {schoolProjectItems.map((p) => (
              <button
                key={p.slug}
                onClick={() => setSelected(p)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 text-left hover:border-zinc-700 transition"
              >
                <div className="relative h-32 w-full rounded-2xl hidden sm:block">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="absolute -top-6 left-0 w-full h-[calc(100%+1.5rem)] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 text-sm text-zinc-300">
                        {p.type}
                        {p.genre ? ` • ${p.genre}` : ""}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-zinc-800/70 px-4 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-300 hover:bg-zinc-700 hover:text-white hover:ring-1 hover:ring-zinc-500">
                      View
                      <ArrowRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm text-zinc-300">
                    {p.summary}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}

      {/* Footer */}
      <Footer />
    </div>
  );
}
