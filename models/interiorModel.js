import mongoose from "mongoose";
const interiorSchema = mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String },
});
const interiorModel = mongoose.model("interiors", interiorSchema);

export default interiorModel;