
let baseUrl = "https://rickandmortyapi.com/api/"

// interface getRAMAPITypes{
//     path: string;
// }

async function getRAMAPI(path: string){
    const response = await fetch(`${baseUrl}${path}`)
    return response.json();
}


export { getRAMAPI }