# Installation
* Init node project
* Type this in console
```
npm i @sizoff/s_game_backend
```
# Info
* Class SGameBackend extends SBackend. You can read [SBackend's documentation](https://github.com/vssizoff/SBackend#readme)
# Creating an app
## esm
```javascript
import SGameBackend from "./sGameBackend/index.mjs";
import path from "path";

let app = new SGameBackend(path.resolve('.'), {
    port: 8080,
    name: "test",
    version: "0.0.0",
    logPath: "./latest.log",
    stopCommand: "stop"
});

app.start(() => {
    app.logger.message(app.routes);
});
```
## cjs
```javascript
const SGameBackend = require("./sGameBackend/index.mjs");
const path = require("path");

let app = new SGameBackend(path.resolve('.'), {
    port: 8080,
    name: "test",
    version: "0.0.0",
    logPath: "./latest.log",
    stopCommand: "stop"
});

app.start(() => {
    app.logger.message(app.routes);
});
```
# Adding files.json
## esm
```javascript
import SGameBackend from "./sGameBackend/index.mjs";
import {readObject} from "sbackend/files.mjs";
import path from "path";

let app = new SGameBackend(path.resolve('.'), {
    port: 8080,
    name: "test",
    version: "0.0.0",
    logPath: "./latest.log",
    stopCommand: "stop"
});

app.addFilesJson(readObject("./files.json"), p => path.resolve(p));

app.start(() => {
    app.logger.message(app.routes);
});
```
## cjs
```javascript
const SGameBackend = require("./sGameBackend/index.mjs");
const {readObject} = require("sbackend/files.mjs");
const path = require("path");

let app = new SGameBackend(path.resolve('.'), {
    port: 8080,
    name: "test",
    version: "0.0.0",
    logPath: "./latest.log",
    stopCommand: "stop"
});

app.addFilesJson(readObject("./files.json"), p => path.resolve(p));

app.start(() => {
    app.logger.message(app.routes);
});
```