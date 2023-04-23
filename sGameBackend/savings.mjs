import fs from "node:fs";
import * as files from "sbackend/files.mjs";
import * as logger from "sbackend/logger.mjs";

export let usersDirS = "";
export function setUsersDirS(newDir) { usersDirS = newDir; }

export default {
    get: {
        "/load/:login/:saving": {
            callback(data, app, response, request, errorFunc) {
                if (!fs.readdirSync(usersDirS).includes(data.params.login + ".json")) {
                    return {
                        code: 400,
                        response: "1"
                    }
                }
                let user = files.readObject(`${usersDirS}/${data.params.login}.json`);
                if (!(data.params.saving in user.savings)) {
                    return {
                        code: 400,
                        response: "3"
                    }
                }
                return {
                    code: 200,
                    response: user.savings[data.params.saving].data
                }
            }
        },
        "/get_savings/:login": {
            callback(data) {
                let user = files.readObject(`${usersDirS}/${data.params.login}.json`), d = {};
                Object.keys(user.savings).forEach(key => {
                    d[key] = {
                        pinned: user.savings[key].pinned,
                        date: user.savings[key].date
                    }
                });
                return {
                    code: 200,
                    response: d
                }
            }
        }
    },
    post: {
        "/save": {
            callback(data, app, response, request, errorFunc) {
                if (!("login" in data.request && "password" in data.request && "data" in data.request)) {
                    return {
                        code: 400,
                        response: "0"
                    }
                }
                if (!fs.readdirSync(usersDirS).includes(data.request.login + ".json")) {
                    return {
                        code: 400,
                        response: "1"
                    }
                }
                let user = new files.File(`${usersDirS}/${data.request.login}.json`);
                if (user.readObject().password !== data.request.password) {
                    return {
                        code: 400,
                        response: "2"
                    }
                }
                let date = logger.getDate()
                user.data.savings[data.request.tag || date] = {
                    pinned: false,
                    date,
                    data: data.request.data
                }
                user.writeObject();
                return {
                    code: 200,
                    response: user.data.savings[data.request.tag || date]
                }
            }
        }
    }
}