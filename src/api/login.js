/** 
 * @description: create test user
 */
import http from './http.js'

export function create() {
    return http.post("/public")
}