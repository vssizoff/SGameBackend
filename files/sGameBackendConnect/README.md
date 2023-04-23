# Importing
## CDN
```html
<script src="https://cdn.jsdelivr.net/gh/vssizoff/SRequest/cdn.js"></script>
<script src="./sGameBackendConnect/cdn.js"></script>
```
## NPM
```
npm i @sizoff/s_game_backend_connect
```
# Setting URL
```javascript
setServerURL("http://localhost:8080");
```
# Login
```javascript
login("test", "1234"); // login(login, password)
```
# Registration
```javascript
reg("test", "1234"); // reg(login, password, data = undefined)
```
# Setting user data
```javascript
setUserData("test", "1234", {}); // setUserData(login, password, data)
```
# Loading saving
```javascript
load("test", "2023.4.23 10:10:59"); // load(login, saving)
```
# Getting savings
```javascript
getSavings("test"); // getSavings(login)
```
# Saving
```javascript
save("test", "1234", {}); // save(login, password, data)
```