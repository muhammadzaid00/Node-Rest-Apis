// var x = ;
// In Node, window object is not available,
// we can do window.console.log() in windows but in Node, we can use global.console.log()
// variables like var message = 0, also write as global.message but in Node, variables are not global.
//jo js me window ka kam kr rha tha,, wo node me module krta ha
// Every js file in node is a Module
// Functions and variables which are used in one Module cannot be used in another module,
// To use variables and functions of other modules, we have to export them in one main Module.
//See module Object in console before and after exporting any variable or function by using console.log(module)
// jshint app.js gives us error details
// Node does not executes our code directly it wraps all the code in the folowing function.
// you can see this function by making syntax error in first line like x=;
// error is (function(exports, require, module, __filename, __dirname) {})
//node my function ha ,, instead of window,, run all code inside it
// Asynchronous program: A program which uses Non blocking calls
// we are using ASYNCHRONOUS in fs module
// In events, listener is written before the emit function, otherwise it will not run due to synchrnous behaviour

// p1
// function sayHello(x) { 
//     console.log("Name is", x)
//     console.log(module)
// }
// sayHello("Mosh")

// p2 
// const logger = require("./logger")
// logger.login("Zaid Bhai")

//p3
// const path = require('path')
// const abc="kkkkkkkkkk"
// console.log("File Name", path.parse(__filename))
// console.log("File Name", path.parse(abc))

// p4
// const os = require('os')
// console.log("OS1", os.freemem())
// console.log("OS2", os.totalmem())

// p5
// const fs = require('fs')
// console.log("Read Dir", fs.readdirSync('./'))

// fs.readdir('./', (err, res) => {
// if (err) console.log("Errorrrr", err)
// else console.log("Res", res)
// })

//p6
// const Emitter = require('events')
// const ent = new Emitter()

// ent.on('greetings', () => {
// console.log('Morning')
// })

// ent.on('greetings', () => {
//     console.log('Evening')
//     })
    
// ent.emit('greetings')

// p7
// const Emitter = require('events')
// const ent = new Emitter()

// ent.on('greetings', (e) => {
// console.log('Morning', e)
// })

// ent.on('greetings', (e) => {
//     console.log('Evening', e.id)
//     })
    
// ent.emit('greetings', {id : '1'})