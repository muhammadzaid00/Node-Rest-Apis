// const square = require ('./secondModule')
// console.log("area is " , square.area(4))

          //node

// const http = require("http")
// const localhost = "localhost"
// const port = 3000

// const server = http.createServer((req, res) => {

//     console.log("req url", req.url, req.method)

//     res.statusCode = 200
//     res.setHeader("Content-Type" , "text/html")
//     res.end("<html> <body> <h1> Server is Created. <h1> </body> </html>")
// })
// server.listen(port, localhost)


            //express

const express = require("express")
const app = express()

app.use(express.json())
const coursesName = require("./secondModule")

const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log("server is running at 3001")
})

app.get("/", (req, res) => {
    res.send ("Welcome Class")
})

app.get("/courses", (req, res) => {
    res.send(coursesName.myArray)
})

app.get("/courses/:id", (req, res) => {
    const found = coursesName.myArray.find(x => x.id === parseInt(req.params.id))

    if (!found) {
        res.status("404").send ("Course with given ID not Found.")
    }
    else {
        res.send(found)
    }
    
})

app.post("/courses", (req, res) => {
    if (!req.body) {
        res.status("400").send("INVALID")
    }
    else res.send("its working")
    const name = {
        id : req.body.id,
        name : req.body.name
    }
    coursesName.myArray.push(name)
})

app.put("/courses/:id", (req, res) => {
    const found = coursesName.myArray.find(x => x.id === parseInt(req.params.id))

    if (!found) {
        res.status("404").send ("Course with given ID not Found.")
    }
    else {
        found.name = req.body.name
        res.send(found)
    }
    
})

app.delete("/courses/:id", (req, res) => {
    const found = coursesName.myArray.findIndex(x => x.id === parseInt(req.params.id))

    if (!found) {
        res.status("404").send ("Course with given ID not Found.")
    }
    else {
        coursesName.myArray.splice(found, 1)
        res.send("Deletd")
    }
    
})