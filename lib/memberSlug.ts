export function roleShort(role: string) {
  const map: Record<string, string> = {
    "Chief Executive Officer": "ceo",
    "Chief Operating Officer": "coo",
    "Chief Technology Officer": "cto",
    "Chief Finance Officer": "cfo",

    "Technology Officer": "to",
    "Finance Officer": "fo",

    "Chief Branding and Marketing Officer": "cbmo",
    "Branding and Marketing Officer": "bmo",

    "Chief Quality and Operation Officer": "cqoo",
    "Quality and Operation Officer": "qoo",

    "Chief Community Officer": "cco",
    "Community Officer": "co",

    "Chief Creative and Innovation Officer": "ccio",
    "Creative and Innovation Officer": "cio",

    "Chief Women Innovation Officer": "cwio",
    "Women Innovation Officer": "wio",

    "Chief IPR and Research Officer": "cipro",
    "IPR and Research Officer": "ipro",

    "Nodal Officer": "nodal",
    "Project Coordinator": "pc",
    "Mentor": "mentor",
    "Women Lead": "wl",
    "Executive curator": "ec",

    "Member": "member",
  };

  return (
    map[role] ||
    role.toLowerCase().replace(/\s+/g, "-")
  );
}