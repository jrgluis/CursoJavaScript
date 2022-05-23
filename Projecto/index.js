const express = require('express')
const app = express()
 
app.use(express.static('assets'));
app.use(express.static('node_modules'));
app.use(express.static('maintenance'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.get('/dashboard', function(req, res) {
    res.sendFile(__dirname + "/dashboard.html")
})
app.get('/user', function(req, res) {
    res.sendFile(__dirname + "/maintenance/user.html")
})

app.get('/view/costumer', function(req, res) {
    res.sendFile(__dirname + "/views/costumer.html")
})

app.get('/costumer', function(req, res) {
    res.sendFile(__dirname + "/maintenance/costumer.html")
})

app.listen(3000)
console.log("Express esta corriendo en el puerto: 3000");
console.log("http://localhost:3000")

