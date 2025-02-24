import React from "react";

interface PuzzleEvent {
  title: string;
  url?: string;
  notes?: string[];
  subEvents?: PuzzleEvent[];
  collaborators?: string[];
}

// Define the heading tags we want to allow
type HeadingTag = "h2" | "h3";

const puzzleProjects: PuzzleEvent[] = [
  {
    title: "Brass Rat Hunt 2025",
    url: "https://brassrathunt.org/",
    subEvents: [
      { title: "RSVP for a '2Five Rings Event" },
      {
        title: "Re: help I lost my brass rat!",
        collaborators: ["Eric Zhan", "Riley Kong"],
      },
    ],
  },
  {
    title: "Mystery Hunt 2025 (Death & Mayhem)",
    url: "https://www.two-pi-noir.agency/",
    subEvents: [
      {
        title: "Unreal Islands",
        url: "https://www.two-pi-noir.agency/puzzles/unreal_islands",
        collaborators: ["Atul Shatavart Nadig", "Henry Wong"],
      },
      {
        title: "Sounds Like a Dodo to Me",
        url: "https://www.two-pi-noir.agency/puzzles/sounds_like_a_dodo_to_me",
        collaborators: ["Atul Shatavart Nadig"],
      },
      {
        title: "Maze of Lies",
        url: "https://www.two-pi-noir.agency/puzzles/maze_of_lies",
        collaborators: ["Denis Auroux"],
      },
    ],
  },
  {
    title: "MIT Sudoku Open 2023 and 2024",
    url: "https://puzzles.mit.edu/sudokuopen/",
    subEvents: [
      { title: "Various individual puzzles" },
      {
        title: "Force / Acceleration team round",
        url: "https://puzzles.mit.edu/sudokuopen/2024/team-ii-e.pdf",
        collaborators: ["Tyler Chen"],
      },
    ],
  },
  {
    title: "Aquarium Hunt 2023 and 2024",
    url: "https://puzzles.mit.edu/aquarium/2023/index.html",
    subEvents: [{ title: "Elsa" }],
  },
  {
    title: "MIT Undergrad Math Association Puzzle",
    url: "https://uma.mit.edu/puzzle",
    notes: ["Nov 2022"],
  },
  {
    title: "Davis Math Tournament Puzzle Round",
    notes: ["2021 and 2022"],
  },
  {
    title: "UC Davis Math Circle: Alice: A Mathematical Adventure",
    notes: ["2021"],
  },
  {
    title: "A few random logic puzzles I wrote in high school?",
    url: "https://drive.google.com/file/d/1cHSfO7Mu66fNECkKSXm2gEVhPxv_TwOF/view?usp=sharing",
  },
];

function renderTitle(event: PuzzleEvent, Tag: HeadingTag = "h2") {
  // Choose the appropriate Tailwind classes based on the heading level
  const className = Tag === "h2" ? "text-xl font-bold" : "text-lg font-semibold";

  return (
    <Tag className={className}>
      {event.url ? (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {event.title}
        </a>
      ) : (
        event.title
      )}
      {event.collaborators && (
        <span> ({event.collaborators.join(", ")})</span>
      )}
    </Tag>
  );
}

export default function Puzzles() {
  return (
    <div className="p-8">
      <div className="text-left">
        {puzzleProjects.map((project) => (
          <div key={project.title} className="mb-6">
            {renderTitle(project, "h2")}
            {project.notes && <p>{project.notes.join(", ")}</p>}
            {project.subEvents && (
              <ul className="list-disc list-inside ml-4 mt-2">
                {project.subEvents.map((subEvent) => (
                  <li key={subEvent.title} className="mb-2">
                    {renderTitle(subEvent, "h3")}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
