"use client";
import Link from "next/link";
import Image from "next/image";

interface TeamMemberCardProps {
  member: {
    _id: string;
    slug: string;   
    name: string;
    image: string;
    role: string;
    year: string;
    bio?: string;
  };
  sectionIndex: number;
  memberIndex: number;
}

export default function TeamMemberCard({
  member,
  sectionIndex,
  memberIndex,
}: TeamMemberCardProps) {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
        .card-shimmer { position: relative; overflow: hidden; }
        .group:hover .card-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(244,181,24,0.18), transparent);
          animation: shimmer 0.75s ease-out forwards;
          pointer-events: none;
          z-index: 5;
        }
      `}</style>

      <Link
        href={`/team/member/${member.slug}`}
        className="block group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f4b518] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
        style={{
          animation: `fadeInUp 0.5s ease-out ${memberIndex * 0.05}s both`,
        }}
        prefetch
      >
        {/* Ambient glow on hover */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#f4b518]/0 to-[#f4b518]/0 group-hover:from-[#f4b518]/25 group-hover:to-[#f4b518]/5 blur-lg transition-all duration-500 -z-10" />

        <div className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-[#f4b518]/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#f4b518]/20 group-hover:-translate-y-2 h-full flex flex-col">

          {/* Corner accent — top-left */}
          <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-transparent group-hover:border-[#f4b518] transition-all duration-500 rounded-tl-2xl z-20 pointer-events-none" />
          {/* Corner accent — bottom-right */}
          <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-transparent group-hover:border-[#f4b518] transition-all duration-500 rounded-br-2xl z-20 pointer-events-none" />

          {/* ── IMAGE ── */}
          <div className="card-shimmer relative h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden flex-shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 200px"
              className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              priority={false}
            />

            {/* Gradient fade into card body */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

            {/* Gold scan line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f4b518] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-10" />

            {/* Role badge */}
            {member.role && (
              <div className="absolute top-2.5 right-2.5 z-10">
                <div className="bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg border border-[#f4b518]/40 group-hover:border-[#f4b518]/80 transition-colors duration-300 max-w-[100px] sm:max-w-[120px]">
                  <p className="text-[#f4b518] text-[8px] sm:text-[9px] font-black uppercase tracking-widest line-clamp-2 leading-tight text-center">
                    {member.role}
                  </p>
                </div>
              </div>
            )}

            {/* Subtle index watermark */}
            
          </div>

          {/* ── CONTENT ── */}
          <div className="flex-1 flex flex-col justify-between p-3 sm:p-4">

            <div className="space-y-2">
              {/* Name */}
              <h3 className="text-sm sm:text-base font-black tracking-tight leading-snug line-clamp-1 text-white group-hover:text-[#f4b518] transition-colors duration-300">
                {member.name}
              </h3>

              {/* Animated divider */}
              <div className="h-px bg-gradient-to-r from-[#f4b518]/50 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Year */}
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#f4b518] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[10px] sm:text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                  {member.year}
                </span>
              </div>
            </div>

            {/* View Profile CTA */}
            <div className="mt-3 pt-3 border-t border-zinc-800 group-hover:border-[#f4b518]/20 transition-colors duration-300 flex items-center justify-between">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#f4b518]/0 group-hover:text-[#f4b518]/70 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
                View Profile
              </span>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-zinc-700 group-hover:border-[#f4b518]/60 group-hover:bg-[#f4b518]/10 flex items-center justify-center transition-all duration-300">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600 group-hover:text-[#f4b518] transition-all duration-300 -translate-x-px group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}