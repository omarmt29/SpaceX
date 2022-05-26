
const url ='https://api.spacexdata.com/v3'

export async function getallLaunches() {
   const response = await fetch(`${url}/launches`);
   const data = await response.json();
   return data;
}

export async function getLaunchById(flight_number) {
   const response = await fetch(`${url}/launches/${flight_number}`);
   const data = await response.json();
   return data;
}