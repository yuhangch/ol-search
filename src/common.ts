export const indexStorage = {
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
export const versionStorage = {
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
export const ParseNavigationHTML = (text: string) => {
    const parser: Document = new DOMParser().parseFromString(text, 'text/html')
    const entries = parser.querySelectorAll('li.item')
    const result = new Array<Entry>()
    entries.forEach((v: Element) => {
        const longName = (v.getAttribute('data-longname') as string).slice(7)
        const type = (v.className.slice(10))
        const short = ((long) => {
            let name = long.split('/').slice(-1)[0]
            if (name.indexOf('~'))
                name = name.split('~').slice(-1)[0]

            return name
        })(longName)
        const spans = v.querySelectorAll('span')[0].querySelectorAll('span')
        const url = (spans[1].querySelector('a') as HTMLAnchorElement).getAttribute('href') as string
        result.push({
            longName,
            type,
            name: short,
            url,
        })
        v.querySelectorAll('div.member-list').forEach((d: Element) => {
            const itemType = (d.getAttribute('data-type') as string).slice(0, -1)
            const items = d.querySelectorAll('a')
            items.forEach((a: HTMLAnchorElement) => {
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

export const GetIndex = async () => {
    let html = await LoadNavigationHTML();
    html = html.trim()
    return ParseNavigationHTML(html);
}

const API_ROOT = "https://openlayers.org/en/latest/apidoc/"
export const apidocURL = (suffix: string) => `${API_ROOT}${suffix}`
export const formatDescription = (entry: Entry, text: string) =>
    ` [${Decorations.URL(entry.type)}] ${Decorations.MATCH(entry.name, [text])} | ${Decorations.DIM(Decorations.MATCH(entry.longName, [text]))}`

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
