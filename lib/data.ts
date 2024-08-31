import Papa from "papaparse";

export const TEAM_SHEET_ID = "11wb50a61GeHHSCq86HRAE9IXViXM3RIT--p42OZ2QhY"
export const EVENTS_SHEET_ID = "1GjKhDerIdLdzXw_epwXEwQo6BhniCQym-5s-sIOKiaQ"

export function getData(url:string): Promise<string[][]> {
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
    }
  });
});
}

export function getImg(link:string): string {
  return ("https://lh3.googleusercontent.com/d/" + (link?.split("/d/")[1])?.split("/")[0])
  
}

export function getTeamData(){
  const url = "https://docs.google.com/spreadsheets/d/"
              + TEAM_SHEET_ID 
              + "/gviz/tq?tqx=out:csv&sheet=s1" 
  return getData(url)
}

export function getLatestEvents() {
  const url = "https://docs.google.com/spreadsheets/d/" 
              + EVENTS_SHEET_ID 
              + "/gviz/tq?tqx=out:csv&sheet=s1&tq=" 
              + encodeURIComponent("select * where A is not null order by A desc limit 3");
  return getData(url);
}

export function getPastEvents() {
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  const url = "https://docs.google.com/spreadsheets/d/" 
              + EVENTS_SHEET_ID 
              + "/gviz/tq?tqx=out:csv&sheet=s1&tq=" 
              + encodeURIComponent(
                `select * where A < date '${formattedToday}' order by A desc`
              );
  return getData(url);
}
