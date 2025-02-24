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
    title: "MIT Sudoku Open 2023 and 2
