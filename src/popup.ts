'use strict';
import {GetIndex, GetLatestVersion, indexStorage, versionStorage} from "./common";

const setVersion = (version:string) => {
    const displayVersion = document.getElementById('version')!.innerText;
    if (version !== displayVersion){
        document.getElementById('version')!.innerText = version || "ERROR";
    }
}
const setFooter = (text:string = 'openlayers api autocomplete is ready.') => {
   document.getElementById('footer')!.innerText = text
}
const setWarning = () => {
    document.getElementById("tick")!
        .setAttribute('src', 'assets/checkmark-warning.svg')
    document.getElementById('button-container')!.hidden = false
}
const setLatest = () => {
    document.getElementById("tick")!
        .setAttribute('src', 'assets/checkmark-ok.svg')
    document.getElementById('button-container')!.hidden = true
}
import './popup.css';
(async function () {
    document.getElementById('update-button')!.addEventListener('click', async () => {
        const version = await versionStorage.get()
        const newVersion = await GetLatestVersion()
        if (version !== newVersion) {
            const index = await GetIndex()
            await indexStorage.set(index)
            await versionStorage.set(newVersion);
        }
        setVersion(newVersion)
        setLatest()
        setFooter()
    });
    const version = await versionStorage.get();
    let newVersion = await GetLatestVersion();
    if (!version) {
        const index = await GetIndex()
        await indexStorage.set(index);
        await versionStorage.set(newVersion)
        setLatest()
        setFooter()
        setVersion(newVersion)

    } else if (version !== newVersion) {
        setWarning()
        setVersion(version)
        setFooter(`Latest openlayers version: ${newVersion}.`)
    } else {
        setLatest()
        setFooter()
        setVersion(version)
    }
})()
