"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import DeleteEventButton from "@/components/DeleteEventButton";
import DeleteMemberButton from "@/components/DeleteMemberButton";

type Props = {
  initialTab: "events" | "members";
  eventData: any[];
  eventYears: string[];
  eventYearFilter: string;
  serializedMembers: any[];
  membersBySection: any[];
  uncategorizedMembers: any[];
  roleStructure: any[];
  uniqueYears: string[];
  selectedYear: string;
  selectedStatus: string;
  selectedRole: string;
  effectiveStatus: string;
  isFiltered: boolean;
};

export default function AdminDashboardClient({
  initialTab,
  eventData,
  eventYears,
  eventYearFilter,
  serializedMembers,
  membersBySection,
  uncategorizedMembers,
  roleStructure,
  uniqueYears,
  selectedYear,
  selectedStatus,
  selectedRole,
  effectiveStatus,
  isFiltered,
}: Props) {
  const [tab, setTab] = useState<"events" | "members">(initialTab);
  const [, startTransition] = useTransition();
  const router = useRouter();

  const switchTab = (t: "events" | "members") => {
    setTab(t);
    startTransition(() => {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", t);
      router.replace(url.toString(), { scroll: false });
    });
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .panel-anim { animation: fadeSlide 0.38s cubic-bezier(0.22,1,0.36,1) both; }

        .card-hover { transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }

        .img-wrap { overflow: hidden; }
        .img-wrap img { transition: transform 0.55s cubic-bezier(0.22,1,0.36,1); }
        .img-wrap:hover img { transform: scale(1.07); }

        select { appearance: none; -webkit-appearance: none; }

        .toggle-pill {
          position: relative; display: flex; border-radius: 16px;
          padding: 6px; gap: 4px; width: 100%;
          background: rgba(0,0,0,0.12); backdrop-filter: blur(8px);
        }
        .toggle-slider {
          position: absolute; top: 6px; bottom: 6px;
          width: calc(48% - 4px); border-radius: 12px;
          background: #fff; box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .toggle-slider.members { transform: translateX(calc(100% + 8px)); }
        .toggle-btn {
          position: relative; z-index: 10; flex: 1;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 12px 0; border-radius: 12px;
          font-weight: 900; font-size: 14px;
          transition: color 0.2s; background: transparent; border: none; cursor: pointer;
        }
        .toggle-badge {
          font-size: 10px; font-weight: 900;
          padding: 2px 6px; border-radius: 9999px;
        }

        .btn-add {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: #0a0a0a; color: #f4b518;
          font-weight: 900; font-size: 14px;
          padding: 12px 32px; border-radius: 16px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.18);
          transition: background 0.2s, transform 0.2s;
          width: 100%; text-decoration: none;
        }
        @media (min-width: 640px) { .btn-add { width: auto; } }
        .btn-add:hover { background: rgba(10,10,10,0.82); transform: scale(1.02); }
        .btn-add:active { transform: scale(0.98); }

        .filter-card {
          border-radius: 24px; padding: 20px;
          border: 2px solid rgba(0,0,0,0.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(8px);
        }
        @media (min-width: 768px) { .filter-card { padding: 24px; border-radius: 28px; } }

        .btn-apply-blue {
          background: #2563eb; color: #fff; font-weight: 900; font-size: 14px;
          padding: 12px 32px; border-radius: 12px; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
          flex: 1;
        }
        @media (min-width: 640px) { .btn-apply-blue { flex: none; } }
        .btn-apply-blue:hover { background: #1d4ed8; transform: scale(1.02); }
        .btn-apply-blue:active { transform: scale(0.98); }

        .btn-apply-purple {
          background: #9333ea; color: #fff; font-weight: 900; font-size: 14px;
          padding: 12px 32px; border-radius: 12px; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
          flex: 1;
        }
        @media (min-width: 1024px) { .btn-apply-purple { flex: none; } }
        .btn-apply-purple:hover { background: #7e22ce; transform: scale(1.02); }
        .btn-apply-purple:active { transform: scale(0.98); }

        .btn-clear {
          background: rgba(0,0,0,0.05); border: 2px solid rgba(0,0,0,0.1);
          color: #0a0a0a; font-weight: 900; font-size: 14px;
          padding: 12px 24px; border-radius: 12px;
          transition: background 0.2s, transform 0.2s; white-space: nowrap;
          text-align: center; text-decoration: none; flex: 1; display: block;
        }
        @media (min-width: 640px) { .btn-clear { flex: none; } }
        .btn-clear:hover { background: rgba(0,0,0,0.10); transform: scale(1.02); }
        .btn-clear:active { transform: scale(0.98); }

        .event-card {
          border-radius: 24px; overflow: hidden;
          border: 2px solid rgba(0,0,0,0.05);
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          transition: border-color 0.2s;
        }
        .event-card:hover { border-color: #3b82f6; }

        .date-badge {
          position: absolute; top: 12px; right: 12px;
          background: rgba(255,255,255,0.95); backdrop-filter: blur(4px);
          padding: 6px 10px; border-radius: 8px;
          border: 1px solid rgba(0,0,0,0.05);
          font-size: 11px; font-weight: 900; color: #0a0a0a;
        }

        .reg-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(34,197,94,0.12); border: 2px solid rgba(22,163,74,0.25);
          padding: 6px 12px; border-radius: 9999px;
        }

        .btn-details {
          background: #2563eb; color: #fff; text-align: center;
          font-size: 12px; font-weight: 700; padding: 10px 0; border-radius: 12px;
          transition: background 0.2s, transform 0.2s; text-decoration: none; display: block;
        }
        .btn-details:hover { background: #1d4ed8; transform: scale(1.05); }
        .btn-details:active { transform: scale(0.95); }

        .btn-edit {
          background: #f4b518; color: #0a0a0a; text-align: center;
          font-size: 12px; font-weight: 900; padding: 10px 0; border-radius: 12px;
          transition: background 0.2s, transform 0.2s; text-decoration: none; display: block;
        }
        .btn-edit:hover { background: #d99e0b; transform: scale(1.05); }
        .btn-edit:active { transform: scale(0.95); }

        .member-card {
          border-radius: 24px; padding: 16px;
          border: 2px solid rgba(0,0,0,0.05);
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          transition: border-color 0.2s, transform 0.22s ease, box-shadow 0.22s ease;
        }
        .member-card:hover {
          border-color: #a855f7;
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.12);
        }
        @media (min-width: 640px) { .member-card { padding: 20px; } }

        .member-img-wrap {
          position: relative; width: 100%; aspect-ratio: 1/1;
          margin-bottom: 16px; border-radius: 16px;
          border: 2px solid rgba(0,0,0,0.05); overflow: hidden;
          transition: border-color 0.3s;
        }
        .member-card:hover .member-img-wrap { border-color: #c084fc; }
        .member-img-wrap img {
          width: 100%; height: 100%; object-fit: cover; object-position: top;
          transition: transform 0.55s cubic-bezier(0.22,1,0.36,1);
        }
        .member-card:hover .member-img-wrap img { transform: scale(1.07); }

        .status-badge {
          position: absolute; top: 8px; left: 8px;
          padding: 2px 8px; border-radius: 9999px;
          font-size: 9px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em;
          color: #fff;
        }
        .status-badge.current { background: rgba(34,197,94,0.9); }
        .status-badge.ex { background: rgba(82,82,91,0.9); }

        .role-badge {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(244,181,24,0.3); border: 2px solid rgba(217,158,11,0.4);
          padding: 4px 14px; border-radius: 9999px;
        }
        .role-badge span {
          color: #6b4a00; font-size: 10px; font-weight: 900;
          text-transform: uppercase; letter-spacing: 0.05em;
        }

        .empty-box {
          border-radius: 24px; padding: 40px;
          text-align: center; border: 2px solid rgba(0,0,0,0.05);
          background: rgba(255,255,255,0.8);
        }
        @media (min-width: 768px) { .empty-box { padding: 56px; } }

        .select-field {
          width: 100%; padding: 12px 16px; border-radius: 12px;
          background: #fff; border: 2px solid rgba(0,0,0,0.10);
          color: #0a0a0a; font-size: 14px; font-weight: 600;
          outline: none; cursor: pointer;
          transition: border-color 0.2s;
        }
        .select-field:hover { border-color: rgba(0,0,0,0.20); }
        .select-field:focus { border-color: #9333ea; box-shadow: 0 0 0 3px rgba(147,51,234,0.15); }
        .select-field-blue:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
      `}</style>

      {/* ════════ TOGGLE PILL ════════ */}
      <div className="flex justify-center">
        <div className="toggle-pill max-w-xs sm:max-w-sm">
          <div className={`toggle-slider${tab === "members" ? " members" : ""}`} />
          {(["events", "members"] as const).map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className="toggle-btn"
              style={{ color: tab === t ? "#0a0a0a" : "rgba(0,0,0,0.45)" }}
            >
              <span style={{ fontSize: "18px" }}>{t === "events" ? "📅" : "👥"}</span>
              <span>{t === "events" ? "Events" : "Members"}</span>
              <span
                className="toggle-badge"
                style={{
                  background: tab === t ? "#f4b518" : "rgba(0,0,0,0.10)",
                  color: tab === t ? "#0a0a0a" : "rgba(0,0,0,0.4)",
                }}
              >
                {t === "events" ? eventData.length : serializedMembers.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ════════ EVENTS PANEL ════════ */}
      {tab === "events" && (
        <section className="panel-anim space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-10 md:h-12 bg-blue-600 rounded-full" />
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">Events</h2>
                <p className="text-xs text-black/50 font-semibold mt-0.5">Manage and track all events</p>
              </div>
            </div>
            <a href="/admin/add-event" className="btn-add">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Event
            </a>
          </div>

          <form method="GET" className="filter-card">
            <input type="hidden" name="tab" value="events" />
            {selectedYear && <input type="hidden" name="year" value={selectedYear} />}
            {selectedStatus && <input type="hidden" name="status" value={selectedStatus} />}
            {selectedRole && <input type="hidden" name="role" value={selectedRole} />}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 space-y-2">
                <label className="block text-xs font-black text-black/50 uppercase tracking-widest px-1">
                  Filter by Year
                </label>
                <div className="relative">
                  <select name="eventYear" defaultValue={eventYearFilter} className="select-field select-field-blue">
                    <option value="">All Years</option>
                    {eventYears.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="flex gap-2 sm:items-end">
                <button type="submit" className="btn-apply-blue">Apply</button>
                <a href="/admin?tab=events" className="btn-clear">Clear</a>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t-2 border-black/5">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <p className="text-xs sm:text-sm font-bold text-black/60">
                Showing <span className="text-black font-black">{eventData.length}</span>{" "}
                {eventData.length === 1 ? "event" : "events"}
                {eventYearFilter && <> from <span className="text-black font-black">{eventYearFilter}</span></>}
              </p>
            </div>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {eventData.length > 0 ? eventData.map((event: any) => (
              <div key={event._id} className="event-card card-hover group">
                {event.image && (
                  <div className="relative img-wrap" style={{ height: "192px" }}>
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {event.eventDate && (
                      <div className="date-badge">
                        {new Date(event.eventDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </div>
                    )}
                  </div>
                )}
                <div className="p-4 sm:p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-black text-black line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-200">
                    {event.title}
                  </h3>
                  {event.eventDate && (
                    <div className="flex items-center gap-1.5 text-black/50 text-xs sm:text-sm">
                      <span>📅</span>
                      <span className="font-medium truncate">{new Date(event.eventDate).toDateString()}</span>
                    </div>
                  )}
                  <div className="reg-badge">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
                    <span className="text-green-700 text-xs font-black uppercase tracking-wider">
                      {event.registrationCount} Registered
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a href={`/admin/events/${event._id}`} className="btn-details">Details</a>
                    <a href={`/admin/edit/${event._id}`} className="btn-edit">Edit</a>
                    <div className="col-span-2">
                      <DeleteEventButton id={event._id} />
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-full empty-box">
                <div style={{ fontSize: "56px", marginBottom: "16px" }}>📅</div>
                <h3 className="text-lg sm:text-xl font-black text-black/60 mb-2">No Events Found</h3>
                <p className="text-sm text-black/40 font-medium mb-6">
                  {eventYearFilter ? `No events found for ${eventYearFilter}` : "No events available"}
                </p>
                <a href="/admin/add-event" className="btn-details" style={{ display: "inline-block", padding: "12px 24px" }}>
                  Create First Event
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ════════ MEMBERS PANEL ════════ */}
      {tab === "members" && (
        <section className="panel-anim space-y-6 md:space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-10 md:h-12 bg-purple-600 rounded-full" />
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black">Team</h2>
                <p className="text-xs text-black/50 font-semibold mt-0.5">Manage team members</p>
              </div>
            </div>
            <a href="/admin/add-member" className="btn-add">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Add Member
            </a>
          </div>

          {!isFiltered && (
            <div className="flex items-center gap-2 px-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-xs sm:text-sm font-bold text-black/60">
                Showing <span className="text-black">current team</span> by default — use filters to view all or ex-members
              </p>
            </div>
          )}

          <form method="GET" className="filter-card">
            <input type="hidden" name="tab" value="members" />
            <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-black/50 uppercase tracking-widest px-1">Filter by Year</label>
                  <div className="relative">
                    <select name="year" defaultValue={selectedYear} className="select-field">
                      <option value="">All Years</option>
                      {uniqueYears.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-black/50 uppercase tracking-widest px-1">Filter by Status</label>
                  <div className="relative">
                    <select name="status" defaultValue={selectedStatus} className="select-field">
                      <option value="">All Status</option>
                      <option value="current">Current Team</option>
                      <option value="ex">Ex Team</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-black/50 uppercase tracking-widest px-1">Filter by Role</label>
                  <div className="relative">
                    <select name="role" defaultValue={selectedRole} className="select-field">
                      <option value="">All Roles</option>
                      {roleStructure.map((section) => (
                        <optgroup key={section.heading} label={`── ${section.heading}`}>
                          {section.roles.map((role: string) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/40 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 lg:items-end">
                <button type="submit" className="btn-apply-purple">Apply</button>
                <a href="/admin?tab=members" className="btn-clear">Clear</a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4 pt-4 border-t-2 border-black/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full" />
                <p className="text-xs sm:text-sm font-bold text-black/60">
                  Showing <span className="text-black font-black">{serializedMembers.length}</span>{" "}
                  {serializedMembers.length === 1 ? "member" : "members"}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {effectiveStatus && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-100 text-purple-700 border border-purple-300">
                    {effectiveStatus === "current" ? "Current Team" : "Ex Team"}
                    {!isFiltered && <span className="text-purple-400 font-normal"> (default)</span>}
                  </span>
                )}
                {selectedYear && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-700 border border-blue-300">
                    {selectedYear}
                  </span>
                )}
                {selectedRole && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-100 text-yellow-800 border border-yellow-400">
                    {selectedRole}
                  </span>
                )}
              </div>
            </div>
          </form>

          {serializedMembers.length === 0 ? (
            <div className="empty-box">
              <div style={{ fontSize: "56px", marginBottom: "16px" }}>👥</div>
              <h3 className="text-lg sm:text-xl font-black text-black/60 mb-2">No Members Found</h3>
              <p className="text-sm text-black/40 font-medium">Try adjusting your filters or add a new member.</p>
            </div>
          ) : (
            <div className="space-y-8 sm:space-y-10">
              {membersBySection.map((section) => (
                <div key={section.heading}>
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className="w-1 h-6 sm:h-7 bg-purple-500 rounded-full" />
                    <h3 className="text-base sm:text-lg font-black text-black uppercase tracking-tight">
                      {section.heading}
                    </h3>
                    <div className="flex-1 h-px bg-black/10" />
                    <span className="text-xs font-bold text-black/40 uppercase tracking-wider whitespace-nowrap">
                      {section.members.length} {section.members.length === 1 ? "member" : "members"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                    {section.members.map((member: any) => <MemberCard key={member._id} member={member} />)}
                  </div>
                </div>
              ))}
              {uncategorizedMembers.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-4 sm:mb-5">
                    <div className="w-1 h-6 sm:h-7 bg-gray-400 rounded-full" />
                    <h3 className="text-base sm:text-lg font-black text-black uppercase tracking-tight">Other</h3>
                    <div className="flex-1 h-px bg-black/10" />
                    <span className="text-xs font-bold text-black/40 uppercase tracking-wider">
                      {uncategorizedMembers.length} members
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                    {uncategorizedMembers.map((member: any) => <MemberCard key={member._id} member={member} />)}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </>
  );
}

function MemberCard({ member }: { member: any }) {
  return (
    <div className="member-card">
      <div className="member-img-wrap">
        <img src={member.image} alt={member.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className={`status-badge ${member.status === "current" ? "current" : "ex"}`}>
          {member.status === "current" ? "Current" : "Ex"}
        </div>
      </div>
      <div className="text-center space-y-2 sm:space-y-3 mb-4">
        <h3 className="text-base sm:text-lg font-black text-black line-clamp-1">
          {member.name}
        </h3>
        <div className="role-badge">
          <span>{member.role}</span>
        </div>
        <p className="text-black/50 text-xs sm:text-sm font-semibold">{member.year}</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a href={`/admin/edit-member/${member._id}`} className="btn-edit">Edit</a>
        <DeleteMemberButton id={member._id} />
      </div>
    </div>
  );
}