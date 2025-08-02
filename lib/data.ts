import Papa from "papaparse";

export const TEAM_SHEET_ID = "11wb50a61GeHHSCq86HRAE9IXViXM3RIT--p42OZ2QhY";
export const EVENTS_SHEET_ID = "1GjKhDerIdLdzXw_epwXEwQo6BhniCQym-5s-sIOKiaQ";
export const NEW_TEAM = "1CokGnxTN_TqPyv24Cplsozpbvoom_RouKaz7P9bK4-4";

export function getData(url: string): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    Papa.parse<string[]>(url, {
      download: true,
      skipEmptyLines: true,
      complete(results: Papa.ParseResult<string[]>) {
        let d: string[][] = results.data;
        d.shift();
        resolve(d);
      },
      error(error: Error) {
        reject(error);
      },
    });
  });
}

export function getMemberData(slug: string) {

  console.log("Fetching member data for slug:", slug);
  const url =
    "https://docs.google.com/spreadsheets/d/" +
    NEW_TEAM +
    "/gviz/tq?tqx=out:csv&sheet=s1&tq=" + 
    encodeURIComponent(`select * where E = '${slug}'`);
  return getData(url)
}

export function getImgLink(link: string) {
  return (
    "https://lh3.googleusercontent.com/d/" +
    link.replace("https://drive.google.com/open?id=", "")
  );
}

export function getTeamData() {
  const url =
    "https://docs.google.com/spreadsheets/d/" +
    TEAM_SHEET_ID +
    "/gviz/tq?tqx=out:csv&sheet=s1";
  return getData(url);
}

export function getUpcomingEvent() {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  const url =
    "https://docs.google.com/spreadsheets/d/" +
    EVENTS_SHEET_ID +
    "/gviz/tq?tqx=out:csv&sheet=s1&tq=" +
    encodeURIComponent(
      `select * where E >= date '${formattedToday}' order by E asc`
    );
  return getData(url);
}

export function getLatestEvents() {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];

  const url =
    "https://docs.google.com/spreadsheets/d/" +
    EVENTS_SHEET_ID +
    "/gviz/tq?tqx=out:csv&sheet=s1&tq=" +
    encodeURIComponent(
      `select * where E < date '${formattedToday}' order by E desc limit 3`
    );
  return getData(url);
}

export async function getPastEvents() {
  interface Event {
    name: string;
    date: string;
    imageUrl: string;
    description: string;
  }

  interface YearEvents {
    [year: string]: Event[];
  }

  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  const url =
    "https://docs.google.com/spreadsheets/d/" +
    EVENTS_SHEET_ID +
    "/gviz/tq?tqx=out:csv&sheet=s1&tq=" +
    encodeURIComponent(
      `select * where E < date '${formattedToday}' order by E desc`
    );

  const eventsArray = await getData(url);

  console.log(eventsArray);

  const groupedEvents: YearEvents = eventsArray.reduce(
    (acc: YearEvents, [timestamp, imageUrl, name, description, date]) => {

      const [datePart] = date.split(" ");
      const [month, day, year] = datePart.split("/");

      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push({
        name,
        date: `${day}/${month}/${year}`,
        imageUrl,
        description,
      });
      return acc;
    },
    {}
  );

  // Sort events within each year
  for (const year in groupedEvents) {
    groupedEvents[year].sort((a, b) => {
      const dateA = new Date(a.date + "/" + year);
      const dateB = new Date(b.date + "/" + year);
      return dateB.getTime() - dateA.getTime(); // Descending order
    });
  }

  // Sort years in descending order
  const sortedYears = Object.keys(groupedEvents).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  const eventsObject = {
    Events: sortedYears.map((year) => ({
      year,
      eventdata: groupedEvents[year],
    })),
  };

  return eventsObject;
}
