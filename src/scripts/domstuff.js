function makeMenuItemComponent(menuItem) {
    return `
        <li><img><h3>${menuItem.name}: ${menuItem.price}</h3><button>Order</button></li>
    `
}

function listMenuItems(menuComponents) {
    menuComponents.forEach( component => {
        document.querySelector("#menu-list").innerHTML += component
    })
}

function makeHeatLevelComponent(heatObj) {
    return `
        <li><input type="radio" name="heat"><h3>${heatObj.name}</h3></li>
    `
}

function listHeatLevels(heatLevels) {
    heatLevels.forEach( level => {
        document.querySelector("#heat-list").innerHTML += level
    })
}

export {makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatLevels }