import { phrasesArray } from "@/data/homePhrases";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function TypingText() {
  const [writingText] = useTypewriter({
    words: phrasesArray,
    loop: 0,
    typeSpeed: 130
  });
  return (
    <>
      <div
        id="writingText-container"
        className="block sm:absolute lg:right-[-45%] md:top-[40%] sm:right-[-40%] sm:top-[15%]"
      >
        <h2 className="text-inherit sm:text-zinc-100 text-xl text-center sm:text-start sm:text-4xl font-semibold sm:w-[7.5rem] py-4">
          I code
          <span className="text-green-400 dark:text-sky-400 font-bold text-xl sm:text-4xl">
            {" "}
            {writingText}
          </span>
          <span className="font-bold text-zinc-300">
            <Cursor />
          </span>
        </h2>
      </div>
    </>
  );
}
