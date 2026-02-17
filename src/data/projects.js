import roboCobraCover from "../assets/projects/robocobra/cover.png";
import roboCobraScreen1 from "../assets/projects/robocobra/screen1.png";
import roboCobraScreen2 from "../assets/projects/robocobra/screen2.png";
import roboCobraScreen3 from "../assets/projects/robocobra/screen3.png";
import roboCobraScreen4 from "../assets/projects/robocobra/screen4.png";

import budhettiCover from "../assets/projects/buddhetti/cover.png";
import budhettiScreen1 from "../assets/projects/buddhetti/screen1.avif";
import budhettiScreen2 from "../assets/projects/buddhetti/screen2.avif";
import budhettiScreen3 from "../assets/projects/buddhetti/screen3.avif";
import budhettiScreen4 from "../assets/projects/buddhetti/screen4.avif";
import budhettiScreen5 from "../assets/projects/buddhetti/screen5.avif";
import budhettiScreen6 from "../assets/projects/buddhetti/screen6.avif";

import sotfCover from "../assets/projects/sotf/cover.png";
import sotfScreen1 from "../assets/projects/sotf/scr1.avif";
import sotfScreen2 from "../assets/projects/sotf/scr2.avif";
import sotfScreen3 from "../assets/projects/sotf/scr3.avif";
import sotfScreen4 from "../assets/projects/sotf/scr4.avif";
import sotfScreen5 from "../assets/projects/sotf/scr5.avif";
import sotfScreen6 from "../assets/projects/sotf/scr6.avif";
import sotfScreen7 from "../assets/projects/sotf/scr7.avif";
import sotfScreen8 from "../assets/projects/sotf/scr8.avif";

import huebrisCover from "../assets/projects/huebris/cover.png";

import rockyRideCover from "../assets/projects/rockyride/cover.png";

import eightFloorCover from "../assets/projects/8floor/cover.png";

export const projects = [
    {
        slug: "robocobra",
        title: "RoboCobra vs. The Mantismen",
        type: "Group",
        genre: "FPS",
        summary:
            "A security guard wakes from cryosleep during an invasion and must retake the ship and save the crew.",
        details:
            "A fast-paced FPS with a clear narrative setup and combat spaces designed for patrols, pressure, and player choice. This project was also the first time the team used a custom in-house editor, enabling tighter iteration between design and engineering.",
        specs: [
            { label: "Time", value: "8 weeks part-time (4h/day)" },
            { label: "Reference (gameplay)", value: "Halo" },
            { label: "Reference (visuals)", value: "Alien Isolation" },
            { label: "Team", value: "Cobra Team" },
        ],
        contributions: ["Level design", "Game design", "Story", "Playtest"],
        tools: ["Unity", "Cobretti (custom team editor/engine)"],
        referenceGames: ["Halo (gameplay)", "Alien Isolation (graphics)"],
        highlights: [
            "Worked closely with programmers to shape editor workflows for level building, lighting, and navigation.",
            "Owned AI navigation setup (navmesh) and patrol point authoring to support encounter readability.",
            "Iterated spaces through playtests to improve pacing and combat clarity.",
        ],
        cover: roboCobraCover,
        gallery: [roboCobraScreen1, roboCobraScreen2, roboCobraScreen3, roboCobraScreen4],
        youtubeId: "WjXe-WLgLrc",
    },

    {
        slug: "budhetti",
        title: "Budhetti",
        type: "Group",
        genre: "Top-down hack ’n’ slash",
        summary:
            "A monk returns from a pilgrimage to find his village burned down—then sets out to stop an ancient god and take revenge.",
        details:
            "A Diablo-inspired top-down action project focused on combat flow, enemy pressure, and readable arenas. Built with strong emphasis on encounter staging and moment-to-moment decision making.",
        specs: [
            { label: "Time", value: "14 weeks part-time (4h/day)" },
            { label: "Reference", value: "Diablo 3" },
        ],
        contributions: ["Level design", "Game design", "Story", "Playtest"],
        tools: ["Unity", "Cobretti (custom team engine)"],
        referenceGames: ["Diablo 3"],
        highlights: [
            "Designed combat spaces with clear readability and controlled escalation.",
            "Balanced pacing between traversal, combat peaks, and recovery moments.",
        ],
        cover: budhettiCover,
        gallery: [budhettiScreen1, budhettiScreen2, budhettiScreen3, budhettiScreen4, budhettiScreen5, budhettiScreen6],
        youtubeId: "rEIMpDNosI8",
    },

    {
        slug: "soul-of-the-forest",
        title: "Soul of the Forest",
        type: "Group",
        genre: "Platformer",
        summary:
            "A forest creature finds something shining and sets out on a journey to the castle to show it to the king.",
        details:
            "A platformer with a strong focus on movement feel and level readability. The team referenced classic Mario structure and a Celeste-like dash (as a mechanic reference) to build satisfying traversal challenges.",
        specs: [
            { label: "Time", value: "8 weeks part-time (4h/day)" },
            { label: "Team", value: "Group of 10" },
            { label: "References", value: "Super Mario; Celeste (dash reference)" },
        ],
        contributions: ["Level design", "Game design", "Enemy design", "Story", "Playtest"],
        tools: ["Tga2D", "Tiled"],
        referenceGames: ["Super Mario", "Celeste (dash reference)"],
        highlights: [
            "Designed traversal-first spaces with clear signposting and a steady difficulty curve.",
            "Created enemy placements to reinforce movement challenges rather than interrupt them.",
        ],
        cover: sotfCover,
        gallery: [
            sotfScreen1,
            sotfScreen2,
            sotfScreen3,
            sotfScreen4,
            sotfScreen5,
            sotfScreen6,
            sotfScreen7,
            sotfScreen8,
        ],
        youtubeId: "hMjXfXlFysw",
    },

    {
        slug: "huebris",
        title: "Huebris",
        type: "Group",
        genre: "Mobile puzzle",
        summary:
            "A snake is stuck in limbo with a strange voice—drink water to progress and end the limbo.",
        details:
            "A Snakebird-inspired mobile puzzle project where each level is a compact logic problem. Emphasis on teaching through design: introducing rules cleanly, then combining them in later puzzles.",
        specs: [
            { label: "Time", value: "6 weeks part-time (4h/day)" },
            { label: "Team", value: "Group of 13" },
            { label: "Reference", value: "SnakeBird" },
        ],
        contributions: ["Level design", "Game design", "Puzzle design", "Story", "Playtest"],
        tools: ["Unity"],
        referenceGames: ["SnakeBird"],
        highlights: [
            "Built puzzle progression: introduce, reinforce, then remix mechanics.",
            "Focused on clarity: readable states, minimal ambiguity, fast iteration via playtests.",
        ],
        cover: huebrisCover,
        gallery: ["REPLACE_ME_GALLERY_1", "REPLACE_ME_GALLERY_2"],
        youtubeId: "4hKnEJ3myMs",
    },

    {
        slug: "rockyride",
        title: "RockyRide",
        type: "Group",
        genre: "Auto-runner",
        summary:
            "A biker is caught in an alien invasion and discovers that music can kill the aliens—reach the radio tower and broadcast it to save the planet.",
        details:
            "An endless/auto-runner style project with emphasis on rapid readability, obstacle cadence, and momentum. Designed for quick onboarding and immediate feedback loops.",
        specs: [
            { label: "Time", value: "6 weeks part-time (4h/day)" },
            { label: "Team", value: "Group of 13" },
            { label: "Reference", value: "Subway Surfer" },
        ],
        contributions: ["Level design", "Game design", "Story", "Playtest"],
        tools: ["Unity"],
        referenceGames: ["Subway Surfer"],
        highlights: [
            "Focused on obstacle pacing: predictability first, then variation.",
            "Iterated runs based on playtest drop-off points and confusion hotspots.",
        ],
        cover: rockyRideCover,
        gallery: ["REPLACE_ME_GALLERY_1", "REPLACE_ME_GALLERY_2"],
        youtubeId: "vc074lkij7k",
    },

    {
        slug: "8floor",
        title: "8Floor",
        type: "Group",
        genre: "Top-down puzzle horror",
        summary:
            "You play as a librarian who wakes up at work—something is wrong in the library, and you must survive and escape.",
        details:
            "A top-down horror/puzzle experience built around tension, limited information, and environmental storytelling. The level design focuses on guiding the player through unease, discovery, and problem solving under pressure.",
        specs: [
            { label: "Time", value: "8 weeks part-time (4h/day)" },
            { label: "Team", value: "Group of 12" },
        ],
        contributions: ["Level design", "Game design", "Story", "Playtest"],
        tools: ["Tga 2D", "Tiled (Level Editor)"],
        referenceGames: ["Viviette (mechanics)", "Don't Starve (graphics)"],
        highlights: [
            "Designed navigation and gating to maintain suspense and controlled reveals.",
            "Balanced puzzle difficulty against horror pacing to keep forward momentum.",
        ],
        cover: eightFloorCover,
        gallery: ["REPLACE_ME_GALLERY_1", "REPLACE_ME_GALLERY_2"],
        youtubeId: "tV9_wMIzJxM",
    },
];
