
const c = new Compat();
const defaultSuggestion = "Openlayers suggestion";
const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());
(async () => {
    const version = await GetLatestVersion();
    const apiHTML = await GetAPI();
    omnibox.bootstrap({
        onSearch: (query) => {
            return [{
                content:"1",
                description:version
            }]
        }
    }
    )
})()