import {getMenuItems, getHeatLevels} from "./api.js"
import {makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatLevels} from "./domstuff.js"
import "./form.js"

getMenuItems()
.then (menuItems => {
    // loop thru menu items, and turn them into html components
    let componentArray = menuItems.map( (oneMenuItemObj) =>{
        return makeMenuItemComponent(oneMenuItemObj)
    })
    // add the menu items components to the DOM
    listMenuItems(componentArray)
})

getHeatLevels()
.then (heatData => {
    let heatArray = heatData.map( (oneHeatObj) => {
        return makeHeatLevelComponent(oneHeatObj)
})
    listHeatLevels(heatArray)
})