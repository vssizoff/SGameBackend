import fs from "node:fs";
import * as files from "sbackend/files.mjs";

export let usersDir = "";
export function setUsersDir(newDir) { usersDir = newDir; }

export default {
    get: {
        "/login/:login": {
            callback(data, app, response, request, errorFunc) {
                if (!fs.readdirSync(usersDir).includes(data.params.login + ".json")) {
                    return {
                        code: 400,
                        response: "1"
                    }
                }
                let user = files.readObject(`${usersDir}/${data.params.login}.json`);
                if (user.password !== data.query) {
                    return {
                        code: 400,
                        response: "2"
                    }
                }
                return {
                    code: 200,
                    response: user.data
                }
            },
            parseQuery: false
        }
    },
    post: {
        "/reg": {
            callback(data, app, response, request, errorFunc) {
                if (!("login" in data.request && "password" in data.request)) {
                    return {
                        code: 400,
                        response: "0"
                    }
                }
                if (fs.readdirSync(usersDir).includes(data.request.login + ".json")) {
                    return {
                        code: 400,
                        response: "1"
                    }
                }
                files.writeObject(`${usersDir}/${data.request.login}.json`, {
                    password: data.request.password,
                    data: data.request.data || {},
                    savings: {}
                });
                return {
                    code: 200,
                    response: "ok"
                }
            }
        },
        "set_user_data": {
            callback(data) {
                if (!("login" in data.request && "password" in data.request && "data" in data.request)) {
                    return {
                        code: 400,
                        response: "0"
                    }
                }
                if (!fs.readdirSync(usersDir).includes(data.request.login + ".json")) {
                    return {
                        code: 400,
                        response: "1"
                    }
                }
                let user = new files.File(`${usersDir}/${data.request.login}.json`);
                if (user.readObject().password !== data.request.password) {
                    return {
                        code: 400,
                        response: "2"
                    }
                }
                user.data.data = data.request.data;
                user.writeObject();
                return {
                    code: 200,
                    response: user.data.data
                }
            }
        }
    }
}