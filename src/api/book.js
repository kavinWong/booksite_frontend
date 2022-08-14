import http from './http.js'
import { create } from "@/api/login";

/** 
 * @description: get books
 * @param {Number} page
 * @param {Function} callback
 * @param {Boolean} iscreate Prevent duplication
 */
export function getBookList(page, callback, iscreate){
    http.get("/book", {page:page}).then((res) => {
        // test test test......
        if (res.code == 403 && !iscreate) {
            // create test user
            create().then((res) => {
                if (res.code == 200) {
                    localStorage.setItem('token',res.data.token);
                    getBookList(callback, true)
                }
            }).catch((err) => console.log(err));
        } else {
            callback(res)
        }
    })
    .catch((err) => console.log(err));
}

/** 
 * @description: book info
 * @param {String} id
 */
 export function getBookInfo(id){
    return http.get("/book/"+id);
}