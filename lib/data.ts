import Papa from "papaparse";

export const TEAM_SHEET_ID = "11wb50a61GeHHSCq86HRAE9IXViXM3RIT--p42OZ2QhY"

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



// Get Event details
export function getTeamData(){
  const url = "https://docs.google.com/spreadsheets/d/"
              + TEAM_SHEET_ID
              + "/gviz/tq?tqx=out:csv&sheet=s1" 
  return getData(url)
}

export function getImgLink(link: string) {
    return (
      "https://drive.google.com/uc?export=download&id=" +
      link.replace("https://drive.google.com/open?id=", "")
    );
  }