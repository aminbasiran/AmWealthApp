const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const path = require("path")
const v1Routes = require("./src/routes/v1Routes/v1Routes")
const {swaggerDocs} = require("./src/routes/v1Routes/swagger")
require("dotenv").config()

const PORT = process.env.PORT || 3001


const app = express()
app.use(cors())
app.use(morgan('combined', {
    immediate:true
}))

app.use(express.json())


// alternative, use fs module to read
app.use(express.static(path.join(__dirname,"public")))
app.use("/api/v1",v1Routes)
swaggerDocs(app,PORT)


app.listen(PORT,()=>{
    console.log(PORT)
})