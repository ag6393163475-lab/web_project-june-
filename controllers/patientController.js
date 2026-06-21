const Patient = require("../models/patient");

exports.home = (req, res) => {
    res.render("home");
};

exports.viewPatient = async (req, res) => {
    const allpatient = await Patient.find();
    res.render("patient", {allpatient});
};

exports.insertPage = (req, res) => {
    res.render("form");
};

exports.createPatient = async (req, res) => {
    req.body.ip = req.ip;
    await Patient.create(req.body);
    res.redirect("/viewdata");
};

exports.editPage = async (req, res) => {
    const data = await Patient.findById(req.params.userid);
    res.render("edit", { data });
};

exports.updatePatient = async (req, res) => {
    await Patient.findByIdAndUpdate(req.params.userid, req.body, {
        new: true
    });

    res.redirect("/viewdata");
};

exports.deletePatient = async (req, res) => {
    await Patient.findByIdAndDelete(req.params.userid);
    res.redirect("/viewdata");
};

