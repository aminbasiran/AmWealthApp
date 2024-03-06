const express = require("express")
const morgan = require("morgan")
const v1Routes = require("./src/routes/v1Routes/v1Routes")
const {swaggerDocs} = require("./src/routes/v1Routes/swagger")

const PORT = 3000


const app = express()
app.use(morgan('combined', {
    immediate:true
  }))


app.use(express.json())

app.use("/api/v1",v1Routes)
swaggerDocs(app,PORT)


app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})