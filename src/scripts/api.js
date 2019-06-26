import { makeMenuItemComponent, listMenuItems } from "./domstuff.js"

fetch("http://localhost:8088/menu_items")
.then(menuData => menuData.json())
.then(menuItems => {
    // loop thru menu items, and turn them into html components
    let componentArray = menuItems.map( (oneMenuItemObj) =>{
        return makeMenuItemComponent(oneMenuItemObj)
    })
    // add the menu items components to the DOM
    listMenuItems(componentArray)
})