const VERSION_URL = "https://api.github.com/repos/openlayers/openlayers/releases/latest"
async function GetLatestVersion() {
   const response = await fetch(VERSION_URL)
   return await response.json().then(r => r.name)
}
const TMPL_URL = "https://openlayers.org/en/latest/apidoc/navigation.tmpl.html"

function convertXmlToJson(xmlString) {
   const jsonData = {};
   for (const result of xmlString.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
      const key = result[1] || result[3];
      const value = result[2]
          // && convertXmlToJson(result[2]);
      console.log(key,value)
      jsonData[key] = ((value && Object.keys(value).length) ? value : result[2]) || null;
   }
   return jsonData;
}
async function GetAPI(){
   const response = await fetch(TMPL_URL)
   const html =  await response.text()
   const json = convertXmlToJson(html)
   console.log(json)
   return ""
}
