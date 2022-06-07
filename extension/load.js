const VERSION_URL = "https://api.github.com/repos/openlayers/openlayers/releases/latest"
async function GetLatestVersion() {
   const response = await fetch(VERSION_URL)
   return await response.json().then(r => r.name)
}