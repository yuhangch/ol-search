'use strict';

import {indexStorage, Entry, apidocURL, formatDescription, Decorations} from "./common";
import Fuse from "fuse.js"

let INDEX: Fuse<Entry>;
(async () => {
    chrome.runtime.onInstalled.addListener((d) => {
        chrome.storage.local.remove('cache')
        chrome.storage.local.remove('version')
        chrome.tabs.create({
            url: 'popup.html'
        });
    })

    chrome.omnibox.onInputStarted.addListener(async () => {
        if (!INDEX) {
            const data = await indexStorage.get()
            INDEX = new Fuse(data, {
                keys: ['name','longName']
            })
        }
    })
    chrome.omnibox.onInputEntered.addListener((t, d) => {
        chrome.tabs.update({url: t});
    })
    chrome.omnibox.onInputChanged.addListener((t: string, s) => {
        if (t === "" || !INDEX) {
            s([{
                content: 'https://github.com/yuhangch/ol-search',
                description: Decorations.MATCH('⚠️ Need to manually open the extension to load index data. '),
            }])
            return
        }
        const queries = t.split(' ')
        let result : Fuse.FuseResult<Entry>[];
        if (queries.length<1)
         result = INDEX.search(t).slice(0, 8)
        else {
            const keys:any[] = [];
            queries.forEach(v =>{
                keys.push({
                    name: v,
                })
                keys.push({
                    longName:v,
                })
            })
            result = INDEX.search({
                $or:keys,
            })
        }
        s(result.map(i => {
            return {
                content: apidocURL(i.item.url),
                description: formatDescription(i.item, t),
            }
        }))
    })
})()
