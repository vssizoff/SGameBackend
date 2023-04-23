# Installation
* Init node project
* Type this in console
```

```
# Creating an app
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
```
# Adding files.json
```javascript
app.addFilesJson(readObject("./files.json"), p => path.resolve(p));
```
# Starting
```javascript
app.start(() => {
    app.logger.message(app.routes);
});
```