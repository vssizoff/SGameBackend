let serverURL = "http://localhost:8080";

function setServerURL(newURL) {serverURL = newURL}

async function login(login, password) {
    let {data, status} = await getRequestSync(`${serverURL}/login/${login}`, {
        query: password,
        outputType: "text"
    });
    return new Promise((resolve, reject) => {
        if (status === 200) resolve(JSON.parse(data));
        else reject(data);
    });
}

async function reg(login, password, data = undefined) {
    let {d, status} = await postRequestSync(`${serverURL}/reg`, data === undefined ? {login, password} : {login, password, data}, {
        outputType: "text"
    });
    // if (status === 200) return true;
    // else return d;
    return new Promise((resolve, reject) => {
        if (status === 200) resolve(true);
        else reject(d);
    });
}

async function setUserData(login, password, data) {
    let {d, status} = await postRequestSync(`${serverURL}/set_user_data`, {login, password, data}, {
        outputType: "text"
    });
    // if (status === 200) return true;
    // else return d;
    return new Promise((resolve, reject) => {
        if (status === 200) resolve(true);
        else reject(d);
    });
}

async function load(login, saving) {
    let {data, status} = await getRequestSync(`${serverURL}/load/${login}/${saving}`, {
        outputType: "text"
    });
    // if (status === 200) return JSON.parse(data);
    // else return data;
    return new Promise((resolve, reject) => {
        if (status === 200) resolve(JSON.parse(data));
        else reject(data);
    });
}

async function getSavings(login) {
    let {data, status} = await getRequestSync(`${serverURL}/get_savings/${login}`, {
        outputType: "text"
    });
    // if (status === 200) return JSON.parse(data);
    // else return data;
    return new Promise((resolve, reject) => {
        if (status === 200) resolve(JSON.parse(data));
        else reject(data);
    });
}

async function save(login, password, data) {
    let {d, status} = await postRequestSync(`${serverURL}/save`, {login, password, data}, {
        outputType: "text"
    });
    // if (status === 200) return true;
    // else return d;
    return new Promise((resolve, reject) => {
        if (status === 200) resolve(true);
        else reject(d);
    });
}