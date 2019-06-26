import {getMenuItems} from "./api.js"
import {makeMenuItemComponent, listMenuItems} from "./domstuff.js"

getMenuItems()
.then (menuItems => {
    // loop thru menu items, and turn them into html components
    let componentArray = menuItems.map( (oneMenuItemObj) =>{
        return makeMenuItemComponent(oneMenuItemObj)
    })
    // add the menu items components to the DOM
    listMenuItems(componentArray)
})