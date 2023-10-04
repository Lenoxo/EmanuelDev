import { phrasesArray } from "@/data/homePhrases";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function MyWeb() {
  const [writingText] = useTypewriter({
    words: phrasesArray,
    loop: 0,
    typeSpeed: 130,
  });
  return (
    <>
      <div className="h-screen bg-gradient-to-tr from-zinc-600 to-zinc-800 dark:from-gray-900 dark:to-gray-600">
        <div
          id="writingText-container"
          className=" bg-gradient-to-tr from-zinc-600 to-zinc-800 block"
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
        {/* <div className=" dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-700 relative h-full w-full sm:w-3/5 lg:max-w-2xl flex flex-col justify-center items-center sm:items-start">
          <h1 className="font-extrabold text-2xl sm:text-4xl sm:mb-4">
            Full-Stack Developer
          </h1>
        </div> */}
      </div>
    </>
  )
}

