
const c = new Compat();
const search = new StdSearch(API_INDEX);
(async () => {
    const API_URL = "https://openlayers.org/en/latest/apidoc/";
    const version = await GetLatestVersion();
    const defaultSuggestion = `Openlayers v${version}`;
    const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());
    omnibox.bootstrap({
        //TODO optimized methods search
        onSearch: (query) => {
            const result = fuse.search(query);
            return result.map(i => {
                return {
                    content: API_URL + i.item.url,
                    description: `${c.match(i.item.name)} | ${c.dim(c.escape(i.item.description))}`
                }
            })
        }
    }
    )
})()