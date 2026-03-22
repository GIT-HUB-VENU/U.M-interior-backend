import interiorModel from "../models/interiorModel.js";

const getinteriors = async (req, res) => {
    const interiors = await interiorModel.find();
    res.render("interiors/index", { interiors });
};

const getInteriorsJSON = async (req, res) => {
    try {
        const interiors = await interiorModel.find();
        res.json(interiors); // return JSON
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch interiors" });
    }
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
    const { id } = req.params;
    const { name, desc, price, image } = req.body;

    await interiorModel.findByIdAndUpdate(id, {
        name,
        desc,
        price: Number(price),
        image
    }, { new: true, runValidators: true });

    res.redirect("/interiors");
};


export {
    getinteriors,
    getInteriorsJSON,
    addInterior,
    addInteriorForm,
    deleteInterior,
    editInteriorForm,
    saveInterior
};