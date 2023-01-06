import mongoose from "mongoose";

const Schema = mongoose.Schema

const skillSchema = new Schema({
  language: String,
  knowledge: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}