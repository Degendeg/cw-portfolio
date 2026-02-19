import { useEffect, useState } from "react";

export default function ProjectModal({ project, onClose }) {
    const [lightboxSrc, setLightboxSrc] = useState(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") {
                if (lightboxSrc) setLightboxSrc(null);
                else onClose();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightboxSrc, onClose]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />

            <div className="relative w-full max-w-3xl rounded-2xl bg-zinc-900 p-6 shadow-xl max-h-[85vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-1 text-sm text-zinc-300">
                            {project.company ? `${project.company} • ` : ""}
                            {project.type}
                            {project.genre ? ` • ${project.genre}` : ""}
                        </p>
                    </div>

                    <button
                        className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-1.5 text-sm font-medium text-zinc-200 transition-all duration-200 hover:bg-zinc-700 hover:border-zinc-600 active:scale-95"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>

                {/* Cover */}
                {project.cover && (
                    <img
                        src={project.cover}
                        alt={`${project.title} cover`}
                        onClick={() => setLightboxSrc(project.cover)}
                        className="mt-4 h-56 w-full rounded-xl object-cover ring-1 ring-zinc-800 cursor-pointer"
                    />
                )}

                {/* YouTube */}
                {project.youtubeId && (
                    <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-zinc-800">
                        <div className="aspect-video">
                            <iframe
                                className="h-full w-full"
                                src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}`}
                                title={`${project.title} video`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {/* Gallery */}
                {project.gallery?.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {project.gallery.map((src) => (
                            <img
                                key={src}
                                src={src}
                                alt=""
                                onClick={() => setLightboxSrc(src)}
                                className="h-32 w-full rounded-lg object-cover ring-1 ring-zinc-800 cursor-pointer"
                            />
                        ))}
                    </div>
                )}

                {/* Summary */}
                {project.summary && <p className="mt-4 text-zinc-200">{project.summary}</p>}

                {/* Details */}
                {project.details && (
                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed">{project.details}</p>
                )}

                {/* Info Grid */}
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {project.specs?.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-white">Specs</h4>
                            <ul className="mt-2 space-y-1 text-sm text-zinc-300">
                                {project.specs.map((s) => (
                                    <li key={s.label}>
                                        <span className="text-zinc-400">{s.label}:</span> {s.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.contributions?.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-white">Contributions</h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                                {project.contributions.map((c) => (
                                    <li key={c}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.tools?.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-white">Tools</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.tools.map((t) => (
                                    <span key={t} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.referenceGames?.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-white">Reference</h4>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.referenceGames.map((g) => (
                                    <span key={g} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">
                                        {g}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {project.highlights?.length > 0 && (
                        <div className="md:col-span-2">
                            <h4 className="text-sm font-semibold text-white">Highlights</h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                                {project.highlights.map((h) => (
                                    <li key={h}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxSrc && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4"
                    onClick={() => setLightboxSrc(null)}
                >
                    <div className="absolute inset-0 bg-black/80" />
                    <img
                        src={lightboxSrc}
                        alt=""
                        className="relative max-h-[90vh] max-w-[95vw] rounded-xl object-contain ring-1 ring-zinc-700"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
}