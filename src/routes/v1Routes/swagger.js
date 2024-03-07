const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {

    definition: {
        openapi : "3.0.0",
        info : {
            title : "Am Wealth App",
            version: "1.0.0",
            description:"This is an application made with Express and documented with Swagger",
            contact: {
                name: "Am Wealth",
                url: "https://AmWealth.com",
                email: "AMWealth@email.com",
            },
        },
        servers: [
            {
                url: ["http://localhost:3000", "https://amwealthapp-mock-api.onrender.com"],
                description: 'Development server',
            },
        ],
        
    },
    apis : ["./src/routes/**/*.js"]

}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app,port) => {
    app.use("/api/v1/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
    console.log(
        `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
    );
}

module.exports = {swaggerDocs}