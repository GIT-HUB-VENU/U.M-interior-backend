import interiorModel from "../models/interiorModel.js";

const showInteriors = async (req, res) => {
    const interiors = await interiorModel.find()
    // res.render("store/interiors",{interiors})
    res.json(interiors)
}

export { showInteriors }