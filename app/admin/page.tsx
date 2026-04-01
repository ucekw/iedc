// app/admin/page.tsx  — Server Component
import { connectDB } from "@/lib/mongodb";
import Event from "@/models/Event";
import Registration from "@/models/Registration";
import Member from "@/models/Member";
import { roleStructure } from "@/lib/roleStructure";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignOutButton from "@/components/SignOutButton";
import AdminDashboardClient from "@/components/AdminDashboardClient";

export const revalidate = 5;

const allRolesInOrder = roleStructure.flatMap((section) => section.roles);

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{
    year?: string;
    status?: string;
    role?: string;
    eventYear?: string;
    tab?: string;
  }>;
}) {
  const params = await searchParams;
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  if (!session?.user || (session.user.role !== "admin" && session.user.role !== "mentor")) {
    redirect("/");
  }

  await connectDB();

  /* ─── EVENTS ─── */
  const eventYearFilter = params.eventYear || "";
  const allEvents = await Event.find().sort({ eventDate: -1 }).lean();

  const eventYears = [
    ...new Set(allEvents.map((e: any) =>
      e.eventDate ? new Date(e.eventDate).getFullYear().toString() : null
    )),
  ].filter((y): y is string => Boolean(y)).sort().reverse();

  const filteredEvents = eventYearFilter
    ? allEvents.filter((e: any) => e.eventDate &&
        new Date(e.eventDate).getFullYear().toString() === eventYearFilter)
    : allEvents;

  const eventData = await Promise.all(
    filteredEvents.map(async (event: any) => {
      const count = await Registration.countDocuments({ eventId: event._id });
      return {
        _id: event._id.toString(),
        title: event.title || "",
        description: event.description || "",
        location: event.location || "",
        eventDate: event.eventDate ? new Date(event.eventDate).toISOString() : null,
        registrationDeadline: event.registrationDeadline
          ? new Date(event.registrationDeadline).toISOString() : null,
        image: event.image || "",
        registrationCount: count,
      };
    })
  );

  /* ─── MEMBERS ─── */
  const allMembers = await Member.find().sort({ createdAt: -1 }).lean();
  const uniqueYears = [...new Set(allMembers.map((m: any) => m.year))]
    .filter((y): y is string => Boolean(y)).sort().reverse();

  const selectedYear = params.year || "";
  const selectedStatus = params.status || "";
  const selectedRole = params.role || "";

  const isFiltered = !!(selectedYear || selectedStatus || selectedRole);
  const effectiveStatus = !isFiltered ? "current" : selectedStatus;

  const filteredMembers = allMembers.filter((m: any) => {
    const yearMatch = selectedYear ? m.year === selectedYear : true;
    const statusMatch = effectiveStatus ? m.status === effectiveStatus : true;
    const roleMatch = selectedRole ? m.role === selectedRole : true;
    return yearMatch && statusMatch && roleMatch;
  });

  const serializedMembers = filteredMembers.map((member: any) => ({
    _id: member._id.toString(),
    name: member.name || "",
    image: member.image || "",
    role: member.role || "",
    year: member.year || "",
    status: member.status || "current",
    priority: member.priority || 0,
    isMentor: member.isMentor || false,
    bio: member.bio || "",
  }));

  const membersBySection = roleStructure
    .map((section) => {
      const sectionMembers = serializedMembers.filter((m) => section.roles.includes(m.role));
      const sorted = section.roles.flatMap((role) => sectionMembers.filter((m) => m.role === role));
      return { ...section, members: sorted };
    })
    .filter((section) => section.members.length > 0);

  const categorizedRoles = new Set(allRolesInOrder);
  const uncategorizedMembers = serializedMembers.filter((m) => !categorizedRoles.has(m.role));

  const activeTab = (params.tab === "members" ? "members" : "events") as "events" | "members";

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@700;800;900&display=swap"
        rel="stylesheet"
      />

      <main
        className="min-h-screen -mt-4 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-10"
        style={{ background: "#f4b518", fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <div className="max-w-[1800px] mx-auto space-y-6 md:space-y-10">

          {/* ── HEADER ── */}
          <header className="pb-6 border-b-2 border-black/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-black/40 mb-1">
                Control Panel
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight leading-none"
                  style={{ fontFamily: "'Syne', sans-serif" }}>
                Admin Dashboard
              </h1>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="flex-1 sm:flex-none text-right hidden sm:block">
                <p className="text-xs font-semibold text-black/40">Signed in as</p>
                <p className="text-sm font-bold text-black capitalize">{session.user?.role}</p>
              </div>
              <div className="hidden sm:block h-10 w-px bg-black/15" />
              <SignOutButton />
            </div>
          </header>

          {/* ── STATS ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: "Total Events",    value: allEvents.length,  emoji: "📅", color: "#3b82f6" },
              { label: "Showing Events",  value: eventData.length,  emoji: "🔍", color: "#8b5cf6" },
              { label: "Total Members",   value: allMembers.length, emoji: "👥", color: "#10b981" },
              { label: "Current Members", value: allMembers.filter((m: any) => m.status === "current").length, emoji: "✅", color: "#f59e0b" },
            ].map((s) => (
              <div key={s.label}
                className="p-3 sm:p-4 md:p-5 rounded-2xl border-2 border-black/5"
                style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(8px)" }}>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-2xl flex-shrink-0"
                       style={{ background: s.color + "22" }}>
                    {s.emoji}
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xl sm:text-3xl font-black text-black leading-none">{s.value}</p>
                    <p className="text-[10px] sm:text-xs font-bold text-black/50 truncate mt-0.5">{s.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CLIENT SHELL ── */}
          <AdminDashboardClient
            initialTab={activeTab}
            eventData={eventData}
            eventYears={eventYears}
            eventYearFilter={eventYearFilter}
            serializedMembers={serializedMembers}
            membersBySection={membersBySection}
            uncategorizedMembers={uncategorizedMembers}
            roleStructure={roleStructure}
            uniqueYears={uniqueYears}
            selectedYear={selectedYear}
            selectedStatus={selectedStatus}
            selectedRole={selectedRole}
            effectiveStatus={effectiveStatus}
            isFiltered={isFiltered}
          />

        </div>
      </main>
    </>
  );
}