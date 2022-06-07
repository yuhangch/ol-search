const c = new Compat();
const search = new StdSearch(API_INDEX);
const getMatchedText = (name, queries) => {
    for (let i = 0; i < queries; i++) {
        const q = queries[i]
        const regEx = new RegExp(q, "gi");
        name = name.replaceAll(regEx, (m) => c.match(m))
    }
    return name
}
(async () => {
    const API_URL = "https://openlayers.org/en/latest/apidoc/";
    const version = await GetLatestVersion();
    const defaultSuggestion = `Openlayers v${version}`;
    const omnibox = new Omnibox(defaultSuggestion, c.omniboxPageSize());
    omnibox.bootstrap({
            //TODO optimized methods search
            onSearch: (query) => {
                const classes = fuse_api.search(query).slice(0, 8);
                console.log(classes)
                const queries = query.split(" ");
                let methods = [];
                let members = [];
                if (queries.length < 1) {
                    methods = fuse_method.search(query).slice(0, 8);
                    members = fuse_member.search(query).slice(0, 8);
                } else {
                    const keys = [];
                    for (let i = 0; i < queries.length; i++) {
                        keys.push({
                            name: queries[i],
                        })
                        keys.push({
                            url: queries[i],
                        })
                    }
                    methods = fuse_method.search({
                        $or: keys,
                    })
                    members = fuse_member.search({
                        $or: keys,
                    })
                }

                const result = classes.concat(methods).concat(members).sort((a, b) => (a.score - b.score)).slice(0, 8);
                return result.map(i => {
                    return {
                        content: API_URL + i.item.url,
                        description: `[${i.item.type}] ${getMatchedText(i.item.name, queries)} ${i.item.className ? " in " + i.item.className : ""}| ${c.dim(c.escape(i.item.description))}`
                    }
                })
            },

        }
    )
})()