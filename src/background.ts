'use strict';

import {
    Entry,
    buildURL,
    formatDescription,
    GetIndex,
} from "./common";
import Fuse from "fuse.js"

(async () => {
    const data:Entry[] = await GetIndex();
    const INDEX =  new Fuse(data, {
        keys: ['name', 'longName']
    })
    let _rawInput:string;
    let _defaultSuggestion:any;
    // const version = await GetCurrentVersion()
    // chrome.omnibox.setDefaultSuggestion({
    //     description:`openlayers ${version}`
    // });
    chrome.runtime.onInstalled.addListener(() => {
        chrome.storage.local.remove('cache')
        chrome.storage.local.remove('version')
    })

    chrome.omnibox.onInputStarted.addListener(async () => {
        // if (!INDEX) {
        //     const data = await indexStorage.get()
        //     INDEX = new Fuse(data, {
        //         keys: ['name', 'longName']
        //     })
        // }
    })
    chrome.omnibox.onInputEntered.addListener((url, d) => {
        if (_rawInput === url){
            url = _defaultSuggestion ? _defaultSuggestion.content: 'https://openlayers.org/latest/apidoc'
        }
        switch (d) {
            case "currentTab":
                chrome.tabs.update({url});
                break;
            case "newForegroundTab":
                chrome.tabs.create({url});
                break;
            case "newBackgroundTab":
                chrome.tabs.create({url, active: false});
                break;
        }
        chrome.omnibox.setDefaultSuggestion({description:'OL Search'})
    })
    chrome.omnibox.onInputChanged.addListener((t: string, s) => {
        // if (t === "" || !INDEX) {
        //     s([{
        //         content: 'https://github.com/yuhangch/ol-search',
        //         description: Decorations.MATCH('⚠️ Need to manually open the extension to load index data. '),
        //     }])
        //     return
        // }
        _rawInput = t
        const queries = t.split(' ')
        let result: Fuse.FuseResult<Entry>[];
        if (queries.length < 1)
            result = INDEX.search(t,{limit:9})
        else {
            const keys: any[] = [];
            queries.forEach(v => {
                keys.push({
                    name: v,
                })
                keys.push({
                    longName: v,
                })
            })
            result = INDEX.search({
                $or: keys,
            })
        }
        const suggestions = result.map(i => {
            return {
                content: buildURL(i.item.url),
                description: formatDescription(i.item, queries),
            }
        })
        _defaultSuggestion = suggestions[0]
        chrome.omnibox.setDefaultSuggestion({description: _defaultSuggestion.description})
        s(suggestions.slice(1))
    })
})()
