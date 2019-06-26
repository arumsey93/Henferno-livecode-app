import {addOrder} from "./api.js"

function initializeOrderListener() {
let orderBtn = document.querySelector("#order-btn")
orderBtn.addEventListener("click", () => {
    //Grab the values from form inputs
    let userName = document.querySelector("#name-input").value
    let selectedMenuItemID = null
    let selectedHeatLevelID = null

    let menuBtns = document.getElementsByName("menu-item")
    for (let i = 0; i < menuBtns.length; i++) {
        if(menuBtns[i].checked) {
            console.log(menuBtns[i].value)
            selectedMenuItemID = parseInt(menuBtns[i].value)
        }
    }
    let heatBtns = document.getElementsByName("heat")
    for (let i = 0; i < heatBtns.length; i++) {
        if(heatBtns[i].checked) {
            console.log(heatBtns[i].value)
            selectedHeatLevelID = parseInt(heatBtns[i].value)
        }
    }

    //Post form data to DB
    let newOrder = orderFactory(userName, selectedMenuItemID, selectedHeatLevelID)
    addOrder(newOrder)
})
}

function orderFactory(user, menuId, heatId) {
    return {
        menu_item_id: menuId,
        heat_level_id: heatId,
        user: user
    }
}

export { initializeOrderListener }