import SBackend from "sbackend";
import users, {setUsersDir} from "./users.mjs";
import savings, {setUsersDirS} from "./savings.mjs";

let defaultConfig = {
    port: 8080,
    name: "app",
    version: "0.0.0",
    logPath: null,
    readlinePrompt: ">> ",
    handlerConfig: {
        wrapper: "auto",
        inputFormat: "object",
        outputFormat: "object",
        parseQuery: false,
        stringQuery: false,
        stringRouteParams: false,
        logging: true,
        logRequest: true,
        logResponse: true,
        ifErr: ""
    },
    filesFolder: "files",
    filesRoute: "files",
    usersDir: "users",
    stopCommand: "stop"
}

export default class SGameBackend extends SBackend {
    constructor(rootPath, config = defaultConfig) {
        super(config);
        setUsersDir(`${rootPath}/${config.usersDir || "users"}`);
        setUsersDirS(`${rootPath}/${config.usersDir || "users"}`);
        this.addHandlers(users);
        this.addHandlers(savings);
        this.addFolder(config.filesRoute || "files", `${rootPath}/${config.filesFolder || "files"}`);
        if (config.stopCommand !== undefined && config.stopCommand !== "") {
            this.addKeyboardCommand("stop", () => this.stop());
        }
    }
}