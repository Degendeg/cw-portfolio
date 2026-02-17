import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";
import Footer from "./Footer";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import avatar from "../assets/avatar.jpg";

export default function App() {
  const [selected, setSelected] = useState(null);
  const items = useMemo(() => projects, []);

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
              Projects
            </a>
            <a className="rounded-xl bg-white px-4 py-2 text-sm text-zinc-950 hover:bg-zinc-200" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <p className="mt-8 max-w-3xl leading-relaxed text-zinc-300">
          Hi, my name is Christoffer Weltzin.
          <br /><br />
          Video games have always been a significant part of my life, and I’ve long been curious about how they are created. A few years ago, I decided to completely change my career path, transitioning from working as a furniture carpenter to designing video games.
          <br /><br />
          When I learned that The Game Assembly was opening a campus in Stockholm, I knew I had to apply for the Level Design program. Shortly after being accepted, I fully committed to this new direction and have never looked back.
          <br /><br />
          I was later hired as a Level Designer at The Gang, where I have now been working for two years.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section id="projects">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <button
                key={p.slug}
                onClick={(e) => setSelected(p)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 text-left hover:border-zinc-700 transition"
              >
                {/* Cover */}
                <div className="relative h-32 w-full rounded-2xl hidden sm:block">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="absolute -top-6 left-0 w-full h-[calc(100%+1.5rem)] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                      <p className="mt-1 text-sm text-zinc-300">
                        {p.type}
                        {p.genre ? ` • ${p.genre}` : ""}
                      </p>
                    </div>

                    <span
                      className="inline-flex items-center gap-2 rounded-full bg-zinc-800/70 px-4 py-1.5 text-xs font-medium text-zinc-200 transition-all duration-300 hover:bg-zinc-700 hover:text-white hover:ring-1 hover:ring-zinc-500"
                    >
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

        {/* <section id="contact" className="mt-16">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <p className="text-zinc-300">Email</p>
            <a
              className="mt-1 inline-block text-white underline"
              href="mailto:christoffer.weltzin@gmail.com"
            >
              christoffer.weltzin@gmail.com
            </a>
          </div>
        </section> */}
      </main>

      {selected ? (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      ) : null}

      {/* Footer */}
      <Footer />
    </div>
  );
}
