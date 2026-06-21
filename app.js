const express=require ("express");
const connectDB = require("./config/db");
const patientRoutes = require("./routes/patientRoutes");
const logger = require("./middleware/logger");
const authHandler = require("./middleware/authHandler");

const app=express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");


app.use(logger);   //global middleware for loggerdata
app.use(authHandler); //global middleware for authentication
app.use("/",patientRoutes);
// app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});