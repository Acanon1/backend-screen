const express = require("express")
const bodyParser = require("body-parser")
const data = require("./test_data") // data de test
const cors = require("cors")

const PUERTO = 4444

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors())



app.get("/cursos", (req,resp) => {
    resp.send(data.cursos)
})
app.get("/ciclos", (req,resp) => {  
    resp.send(data.ciclos)
})


app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})

