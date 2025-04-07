
let baseUrl = "https://rickandmortyapi.com/api/"

async function getRAMAPIOptions(){
    const response = await fetch(baseUrl)
    return response.json();
}

async function getRAMAPICharacter(){
    const response = await fetch(`${baseUrl}character`)
    return response.json();
}

async function getRAMAPILocation(){
    const response = await fetch(`${baseUrl}location`)
    return response.json();
}

async function getRAMAPIEpisode(){
    const response = await fetch(`${baseUrl}episode`)
    return response.json();
}





export { getRAMAPIOptions, getRAMAPICharacter, getRAMAPILocation, getRAMAPIEpisode }