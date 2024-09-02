import Papa from "papaparse";

export const TEAM_SHEET_ID = "11wb50a61GeHHSCq86HRAE9IXViXM3RIT--p42OZ2QhY";
export const EVENTS_SHEET_ID = "1GjKhDerIdLdzXw_epwXEwQo6BhniCQym-5s-sIOKiaQ";

export  function  getData(url: string): Promise<string[][]> {
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

export function getLatestEvents() {
  const url =
    "https://docs.google.com/spreadsheets/d/" +
    EVENTS_SHEET_ID +
    "/gviz/tq?tqx=out:csv&sheet=s1&tq=" +
    encodeURIComponent("select * where A is not null order by A desc limit 3");
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
      `select * where A < date '${formattedToday}' order by A desc`
    );

  const eventsArray = await getData(url);
  
  const groupedEvents: YearEvents = eventsArray.reduce((acc: YearEvents, [date, name, imageUrl, description]) => {
    const [month, day, year] = date.split('/');
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push({
      name,
      date: `${day}/${month}/${year}`,
      imageUrl,
      description
    });
    return acc;
  }, {});
  
  // Sort events within each year
  for (const year in groupedEvents) {
    groupedEvents[year].sort((a, b) => {
      const dateA = new Date(a.date + '/' + year);
      const dateB = new Date(b.date + '/' + year);
      return dateB.getTime() - dateA.getTime(); // Descending order
    });
  }
  
  // Sort years in descending order
  const sortedYears = Object.keys(groupedEvents).sort((a, b) => parseInt(b) - parseInt(a));
  
  const eventsObject = {
    Events: sortedYears.map(year => ({
      year,
      eventdata: groupedEvents[year]
    }))
  };

  return eventsObject;
}
