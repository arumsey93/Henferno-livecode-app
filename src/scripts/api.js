
// function getMenuItems() {
// return fetch("http://localhost:8088/menu_item")
// .then(menuData => menuData.json())
// }

// function getHeatLevels() {
// return fetch("http://localhost:8088/heat_level")
// .then(heatData => heatData.json())
// }

// function getOrder() {
//     return fetch("http://localhost:8088/orders")
//     .then(orderData => orderData.json())
//     }

function addOrder(newOrderObj) {
    return fetch("http://localhost:8088/orders", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newOrderObj)
    })
}


function getData(resource, queryParams) {
    let url = `http://localhost:8088/${resource}`
    if (queryParams) {
        url += `?${queryParams}`
    } console.log(url)
    return fetch(url)
    .then(orderData => orderData.json())
}


export { getData, addOrder }