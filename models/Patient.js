const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    disease:String,
    doctorname:String,
    fees:Number,
});
module.exports = mongoose.model("Patient", patientSchema);
