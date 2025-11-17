export default function Puzzles() {
  return (
    <div className="p-8 text-left">
      <p>
        I write and solve a lot of puzzles &mdash; most recently with MIT Puzzle
        Club, Death &amp; Mayhem, wahoo!, NES, and USA Sudoku&#47;Puzzle. Stay tuned for
        more puzzle projects I&rsquo;m working on with people from&hellip; all
        of them?
      </p>

      {/* Horizontal line after the first paragraph */}
      <hr className="my-4" />
      <p>
        wahoo! is a new Mystery Hunt team composed of mostly MIT students and alumni. 
          We do online hunts throughout the year together. Please reach out to me 
          if you&apos;re interested in joining! All skill levels and experience are welcome!
      </p>
      <hr className="my-4" />

      <p>Some past puzzles I&apos;ve authored and hunts/puzzle events I&apos;ve worked on!</p>

      <ul className="list-disc list-inside ml-4">


          {/* MIT Crossword Open 2025 */}
        <li>
          <a
            href="https://puzzles.mit.edu/crosswordopen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            MIT Crossword Open 2025
          </a>{" "}
          (author)
          <ul className="list-disc list-inside ml-6">
            <li>various puzzles</li>
          </ul>
        </li>

          {/* GP Finals 2025 */}
        <li>
          {/* <a
            href="https://puzzles.mit.edu/crosswordopen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          > */}
            WPF Sudoku Grand Prix Finals at WSPC 2025
          </a>{" "}
          (author)
          <ul className="list-disc list-inside ml-6">
            <li>Quad Sudoku</li>
          </ul>
        </li>

          {/* Aquarium Hunt 2025 */}
        <li>
          <a
            href="https://puzzles.mit.edu/aquarium/2025/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            Aquarium Hunt 2025
          </a>{" "}
          (author, editor)
          <ul className="list-disc list-inside ml-6">
            <li>
              <a
                href="https://puzzles.mit.edu/aquarium/2025/One%20Fish,%20Two%20Fish.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                One Fish Two Fish
              </a>{" "}
              (with Aloysius Ng)
            </li>
            <li>
              <a
                href="https://puzzles.mit.edu/aquarium/2025/The%20Recirculating%20Aquarium.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                The Recirculating Aquarium
              </a>{" "}
              (with Benson Lin)
            </li>
          </ul>
        </li>


        {/* Sudoku GP April 2025 */}
        <li>
          <a
            href="https://gp.worldpuzzle.org/content/archive-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            WPF Sudoku Grand Prix Round 4, 2025
          </a>{" "}
          (co-author with Tyler Chen)
          <ul className="list-disc list-inside ml-6">
            <li>
              Single Parity Skyscrapers{" "}
              <a
                href="https://gp.worldpuzzle.org/sites/default/files/Puzzles/2025/2025_SudokuRound4_IB.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                (IB)
              </a>
                <a
                href="https://gp.worldpuzzle.org/sites/default/files/Puzzles/2025/2025_SudokuRound4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                (competition)
              </a>{" "}
            </li>
          </ul>
        </li>

          
        {/* MIT Sudoku Open 2025 */}
        <li>
          <a
            href="https://puzzles.mit.edu/sudokuopen/2025/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            MIT Sudoku Open 2025
          </a>{" "}
          (author, editor)
          <ul className="list-disc list-inside ml-6">
            <li>various individual puzzles</li>
            <li>
              This or That team round{" "}
              <a
                href="https://puzzles.mit.edu/sudokuopen/2025/this_or_that.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                (pdf)
              </a>{" "}
            </li>
          </ul>
        </li>


          
        {/* Brass Rat Hunt 2025 */}
        <li>
          <a
            href="https://brassrathunt.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            Brass Rat Hunt 2025
          </a>{" "}
          (author, editor)
          <ul className="list-disc list-inside ml-6">
            <li>RSVP for a &lsquo;2Five Rings Event</li>
            <li>
              Re: help I lost my brass rat! (with Eric Zhan and Riley Kong)
            </li>
          </ul>
        </li>

        {/* Mystery Hunt 2025 (Death & Mayhem) */}
        <li>
          <a
            href="https://www.two-pi-noir.agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            Mystery Hunt 2025 (Death &amp; Mayhem)
          </a>{" "}
          (author, artist)
          <ul className="list-disc list-inside ml-6">
            <li>
              <a
                href="https://www.two-pi-noir.agency/puzzles/unreal_islands"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                Unreal Islands
              </a>{" "}
              (with Atul Shatavart Nadig and Henry Wong)
            </li>
            <li>
              <a
                href="https://www.two-pi-noir.agency/puzzles/sounds_like_a_dodo_to_me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                Sounds Like a Dodo to Me
              </a>{" "}
              (with Atul Shatavart Nadig)
            </li>
            <li>
              <a
                href="https://www.two-pi-noir.agency/puzzles/maze_of_lies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                Maze of Lies
              </a>{" "}
              (with Denis Auroux), <a
                href="https://www.youtube.com/watch?v=WFZ6AMTXUJk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                solve video by CTC and Matt Parker
              </a>{" "}
            </li>
          </ul>
        </li>

        {/* Aquarium Hunt 2024 */}
        <li>
          <a
            href="https://puzzles.mit.edu/aquarium/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            Aquarium Hunt 2024
          </a>{" "}
          (editor)
        </li>

        {/* MIT Sudoku Open 2024 */}
        <li>
          <a
            href="https://puzzles.mit.edu/sudokuopen/2024/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            MIT Sudoku Open 2024
          </a>{" "}
          (author, editor)
          <ul className="list-disc list-inside ml-6">
            <li>various individual puzzles</li>
            <li>
              Force / Acceleration team round{" "}
              <a
                href="https://puzzles.mit.edu/sudokuopen/2024/team-ii-e.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 visited:text-purple-600 hover:underline"
              >
                (pdf)
              </a>{" "}
              (with Tyler Chen)
            </li>
          </ul>
        </li>

        {/* Aquarium Hunt 2023 */}
        <li>
          <a
            href="https://puzzles.mit.edu/aquarium/2023/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            Aquarium Hunt 2023
          </a>{" "}
          (author, editor)
          <ul className="list-disc list-inside ml-6">
            <li>Elsa</li>
          </ul>
        </li>

        {/* MIT Sudoku Open 2023 */}
        <li>
          <a
            href="https://puzzles.mit.edu/sudokuopen/2023/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            MIT Sudoku Open 2023
          </a>{" "}
          (author, editor)
          <ul className="list-disc list-inside ml-6">
            <li>various individual puzzles</li>
          </ul>
        </li>

        {/* MIT Undergrad Math Association Puzzle */}
        <li>
          <a
            href="https://uma.mit.edu/puzzle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            MIT Undergrad Math Association Puzzle
          </a>{" "}
          Nov 2022 (author)
        </li>

        {/* Davis Math Tournament Puzzle Round */}
        <li>Davis Math Tournament Puzzle Round 2022 (author)</li>
        <li>Davis Math Tournament Puzzle Round 2021 (author)</li>

        {/* UC Davis Math Circle */}
        <li>UC Davis Math Circle: Alice: A Mathematical Adventure 2021 (author)</li>

        {/* High school logic puzzles */}
        <li>
          A few random {" "}
          <a
            href="https://drive.google.com/file/d/1cHSfO7Mu66fNECkKSXm2gEVhPxv_TwOF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 visited:text-purple-600 hover:underline"
          >
            logic puzzles
          </a>{" "}
            I wrote in high school
        </li>
      </ul>
      <hr className="my-4" />
      <p>
        My Katz number is at most 4:
      </p>
        <li>
            I coauthored Unreal Islands (2025) with Henry Wong
        </li>
        <li>
            Henry coauthored Wolf in the Fold (2018) with Nathan Fung
        </li>
        <li>
            Nathan coauthored Spacing Out (2024) with Seth Bisen-Hersh
        </li>
        <li>
            Seth coauthored A Mad Cocktail Party (2014) with Dan Katz
        </li>

    </div>
  );
}
