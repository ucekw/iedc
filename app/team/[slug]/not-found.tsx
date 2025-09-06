import Link from "next/link";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <div
      className={`${font.className} bg-black h-screen flex flex-col items-center justify-center`}
    >
      <h2 className="text-6xl text-[#FBBA1A] mb-4">404</h2>
      <p className="text-white text-xl mb-6">Team member not found</p>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        The team member you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/team"
        className="bg-[#FBBA1A] text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
      >
        Back to Team
      </Link>
    </div>
  );
}
