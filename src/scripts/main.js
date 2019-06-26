import {getData} from "./api.js"
import {makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatLevels, buildForm, addFormToDOM} from "./domstuff.js"
import {initializeOrderListener} from "./form.js"
import "./order_list.js"

addFormToDOM(buildForm())
initializeOrderListener()

getData("menu_items")
.then (menuItems => {
    // loop thru menu items, and turn them into html components
    let componentArray = menuItems.map( (oneMenuItemObj) =>{
        return makeMenuItemComponent(oneMenuItemObj)
    })
    // add the menu items components to the DOM
    listMenuItems(componentArray)
})

getData("heat_levels")
.then (heatData => {
    let heatArray = heatData.map( (oneHeatObj) => {
        return makeHeatLevelComponent(oneHeatObj)
})
    listHeatLevels(heatArray)
})
