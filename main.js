import SGameBackend from "./sGameBackend/index.mjs";
import {readObject} from "sbackend/files.mjs";
import path from "path";

let app = new SGameBackend(path.resolve('.'), {
    port: 8888,
    name: "test",
    version: "0.0.0",
    logPath: "./latest.log",
    stopCommand: "stop"
});

// app.addKeyboardCommand("stop", () => app.stop());

// app.addHandlers(users);
// app.addHandlers(savings);
// app.addFolder("/files", path.resolve("./files"));

app.addFilesJson(readObject("./files.json"), p => path.resolve(p));

app.start(() => {
    app.logger.message(app.routes);
});