import React from 'react';

interface PuzzleEvent {
  title: string;
  url?: string;
  notes?: string[];
  subEvents?: PuzzleEvent[];
  collaborators?: string[];
}

const puzzleProjects: PuzzleEvent[] = [
  {
    title: "Brass Rat Hunt 2025",
    url: "https://brassrathunt.org/",
    subEvents: [
      { title: "RSVP for a '2Five Rings Event" },
      {
        title: "Re: help I lost my brass rat!",
        collaborators: ["Eric Zhan", "Riley Kong"]
      }
    ]
  },
  {
    title: "Mystery Hunt 2025 (Death & Mayhem)",
    url: "https://www.two-pi-noir.agency/",
    subEvents: [
      {
        title: "Unreal Islands",
        url: "https://www.two-pi-noir.agency/puzzles/unreal_islands",
        collaborators: ["Atul Shatavart Nadig", "Henry Wong"]
      },
      {
        title: "Sounds Like a Dodo to Me",
        url: "https://www.two-pi-noir.agency/puzzles/sounds_like_a_dodo_to_me",
        collaborators: ["Atul Shatavart Nadig"]
      },
      {
        title: "Maze of Lies",
        url: "https://www.two-pi-noir.agency/puzzles/maze_of_lies",
        collaborators: ["Denis Auroux"]
      }
    ]
  },
  {
    title: "MIT Sudoku Open 2023 and 2024",
    url: "https://puzzles.mit.edu/sudokuopen/",
    subEvents: [
      { title: "Various individual puzzles" },
      {
        title: "Force / Acceleration team round",
        url: "https://puzzles.mit.edu/sudokuopen/2024/team-ii-e.pdf",
        collaborators: ["Tyler Chen"]
      }
    ]
  },
  {
    title: "Aquarium Hunt 2023 and 2024",
    url: "https://puzzles.mit.edu/aquarium/2023/index.html",
    subEvents: [{ title: "Elsa" }]
  },
  {
    title: "MIT Undergrad Math Association Puzzle",
    url: "https://uma.mit.edu/puzzle",
    notes: ["Nov 2022"]
  },
  {
    title: "Davis Math Tournament Puzzle Round",
    notes: ["2021 and 2022"]
  },
  {
    title: "UC Davis Math Circle: Alice: A Mathematical Adventure",
    notes: ["2021"]
  },
  {
    title: "A few random logic puzzles I wrote in high school?",
    url: "https://drive.google.com/file/d/1cHSfO7Mu66fNECkKSXm2gEVhPxv_TwOF/view?usp=sharing"
  }
];

export default function Puzzles() {
  return (
    <div className="p-8">
      <div className="text-left w-1/2 mx-auto">
        {puzzleProjects.map((project) => (
          <div key={project.title} className="mb-6">
            <h2 className="text-xl font-bold">{project.title}</h2>
            {project.url && (
              <p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {project.url}
                </a>
              </p>
            )}
            {project.notes && <p>{project.notes.join(", ")}</p>}
            {project.collaborators && (
              <p>
                <strong>Collaborators:</strong> {project.collaborators.join(", ")}
              </p>
            )}
            {project.subEvents && (
              <div className="ml-4 mt-2">
                {project.subEvents.map((subEvent) => (
                  <div key={subEvent.title} className="mb-2">
                    <h3 className="text-lg font-semibold">{subEvent.title}</h3>
                    {subEvent.url && (
                      <p>
                        <a
                          href={subEvent.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {subEvent.url}
                        </a>
                      </p>
                    )}
                    {subEvent.collaborators && (
                      <p>
                        <strong>Collaborators:</strong> {subEvent.collaborators.join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
