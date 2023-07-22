import Link from "next/link";

export default function StyledLink({ to, addStyle = "", children }) {
  return (
    <>
      <Link
        href={to}
        className={`w-20 h-10 transition ease-in-out bg-gradient-to-tr from-sky-300 to-green-400 hover:scale-110 hover:from-yellow-400 hover:to-red-400 flex justify-center rounded-lg ${addStyle}`}
      >
        {children}
      </Link>
    </>
  );
}
