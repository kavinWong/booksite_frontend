import http from './http.js'

/** 
 * @description: create order
 * @param {Object} param
 */
export function createOrder(param){
    return http.post("/order", param)
}

/** 
 * @description: find order
 * @param {String} order_id
 */
 export function findOrder(order_id){
    return http.get("/order/"+order_id)
}