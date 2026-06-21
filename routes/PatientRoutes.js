const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patientController.js");


router.get("/", patientController.home);

router.get("/viewdata", patientController.viewPatient);

router.get("/insertdata", patientController.insertPage);

router.post("/createdata", patientController.createPatient);

router.get("/edit/:userid", patientController.editPage);

router.post("/update/:userid", patientController.updatePatient);

router.get("/delete/:userid", patientController.deletePatient);

module.exports = router;