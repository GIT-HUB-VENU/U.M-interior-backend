import interiorModel from "../models/interiorModel.js";

const getinteriors = async (req, res) => {
    const interiors = await interiorModel.find();
    res.render("interiors/index", { interiors });
};

const addInterior = async (req, res) => {
    const interior = req.body;
    await interiorModel.create(interior);
    res.redirect("/interiors");
};

const addInteriorForm = async (req, res) => {
    res.render("interiors/add");
};

const deleteInterior = async (req, res) => {
    const id = req.params.id;
    await interiorModel.findByIdAndDelete(id);
    res.redirect("/interiors");
};

const editInteriorForm = async (req, res) => {
    const id = req.params.id;
    const interior = await interiorModel.findOne({ _id: id });
    res.render("interiors/edit", { interior });
};

const saveInterior = async (req, res) => {
    const id = req.params.id;
    await interiorModel.findByIdAndUpdate(id, req.body);
    res.redirect("/interiors")
};

export {
    getinteriors,
    addInterior,
    addInteriorForm,
    deleteInterior,
    editInteriorForm,
    saveInterior
};