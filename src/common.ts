import {parse} from 'node-html-parser'

export const IndexStorage = {
    get: async () => {
        const cached = await chrome.storage.local.get(['cache'])
        if (cached && cached['cache']) {
            return JSON.parse(cached['cache'])
        }
        return null;
    },
    set: async (value: Entry[]) => {
        return await chrome.storage.local.set(
            {
                cache: JSON.stringify(value),
            }
        );
    },
};
export const VersionStorage = {
    get: async () => {
        const cached = await chrome.storage.local.get(['version'])
        if (cached && cached['version']) {
            return cached['version'].toString()
        }
        return null;
    },
    set: async (value: string) => {
        await chrome.storage.local.set(
            {
                version: value.toString(),
            }
        );
    },
};

export interface Entry {
    name: string
    longName: string
    type: string
    url: string
}

const VERSION_URL = 'https://api.github.com/repos/openlayers/openlayers/releases/latest'
export const GetLatestVersion = async () => {
    return "v" + (await fetch(VERSION_URL).then(r => r.json()))['name'].toString()
}
const API_DOC_URL = 'https://openlayers.org/en/latest/apidoc/navigation.tmpl.html'
export const LoadNavigationHTML = async () => {
    return await fetch(API_DOC_URL).then(text => text.text())
}
export const ParseNavigation = (text: string) => {
    const dom = parse(text)
    const entries = dom.querySelectorAll('li.item')
    const result = new Array<Entry>()
    entries.forEach((e) => {
        const longName = e.getAttribute('data-longname')!.toString()
        const type = e.classNames.slice(10)
        const short = ((long) => {
            let name = long.split('/').slice(-1)[0]
            if (name.indexOf('~'))
                name = name.split('~').slice(-1)[0]

            return name
        })(longName)
        const spans = e.querySelectorAll('span')[0].querySelectorAll('span')
        const url = spans[1].querySelector('a') !.getAttribute('href')!.toString()
        result.push({
            longName,
            type,
            name: short,
            url,
        })
        e.querySelectorAll('div.member-list').forEach((d) => {
            const itemType = (d.getAttribute('data-type') as string).slice(0, -1)
            const items = d.querySelectorAll('a')
            items.forEach((a) => {
                const url = a.getAttribute('href') as string
                const name = a.innerText
                result.push({
                    longName: `${longName}/${name}`,
                    name,
                    url,
                    type: itemType,
                })
            })
        })
    })
    return result
}
export const GetLatestIndex = async () => {
    let html = await LoadNavigationHTML()
    html = html.trim()
    return ParseNavigation(html)

}
export const GetIndex = async () => {
    const cached = await IndexStorage.get()
    if (cached) return cached
    const data = await GetLatestIndex();
    await IndexStorage.set(data)
    return data
}
export const GetCurrentVersion = async () => {
    const cached = await VersionStorage.get()
    if (cached) return cached
    const version = await GetLatestVersion()
    await VersionStorage.set(version)
    return version

}
const API_ROOT = "https://openlayers.org/en/latest/apidoc/"
export const buildURL = (suffix: string) => `${API_ROOT}${suffix}`
export const formatDescription = (entry: Entry, queries: string[]) =>
    ` [${Decorations.URL(entry.type)}] ${Decorations.MATCH(entry.name, queries)} | ${Decorations.DIM(Decorations.MATCH(entry.longName, queries))}`

export class Decorations {
    static DIM = (text: string) => {
        return `<dim>${text}</dim>`
    }
    static MATCH = (text: string, matched: string[] = []) => {
        if (matched && matched.length > 0) {
            for (let i = 0; i < matched.length; i++) {
                const q = matched[i]
                const regEx = new RegExp(q, "gi");
                text = text.replace(regEx, (m: string) => Decorations.MATCH(m))
            }
            return text
        }
        return `<match>${text}</match>`
    }
    static URL = (text: string) => {
        return `<url>${text}</url>`
    }
}
