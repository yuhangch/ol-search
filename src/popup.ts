'use strict';
import {GetIndex, GetLatestIndex, GetLatestVersion, IndexStorage, VersionStorage} from "./common";

const version_element = document.getElementById('version')
const footer_element = document.getElementById('footer')
const tick_element = document.getElementById('tick')
const button_container_element = document.getElementById('button-container')
const update_button_element = document.getElementById('update-button')
const setVersion = (version:string) => {
    const displayVersion = version_element!.innerText;
    if (version !== displayVersion){
        version_element!.innerText = version || "ERROR";
    }
}
const setFooter = (text:string = 'openlayers api autocomplete is ready.') => {
   footer_element!.innerText = text
}
const setWarning = () => {
    tick_element!
        .setAttribute('src', 'assets/checkmark-warning.svg')
    button_container_element!.hidden = false
}
const setLatest = () => {
    tick_element!
        .setAttribute('src', 'assets/checkmark-ok.svg')
    button_container_element!.hidden = true
}
import './popup.css';
(async function () {
    update_button_element!.addEventListener('click', async () => {
        const version = await VersionStorage.get()
        const newVersion = await GetLatestVersion()
        if (version !== newVersion) {
            const index = await GetLatestIndex()
            await IndexStorage.set(index)
            await VersionStorage.set(newVersion);
        }
        setVersion(newVersion)
        setFooter()
        setLatest()
    });
    const version = await VersionStorage.get();
    let newVersion = await GetLatestVersion();
    if (!version) {
        const index = await GetIndex()
        await IndexStorage.set(index);
        await VersionStorage.set(newVersion)
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
