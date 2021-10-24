// (function(exports, require, module, __filename, __dirname) {
var url = 'https://www.youtube.com/endpoint'

function login(mes) {
console.log("message is", mes)
}

module.exports.endPoint = url 
//we can us this if we need it anyOther module, but mostly url dont need to be exported.

module.exports.login = login 
// we are using modules.exports.login = login, this exports as an object
// but we also can export as a function like this module.exports = login



// })