// import { skills } from "../data/skills-data.js";
import { Skill } from "../models/skills.js";

function index(req, res){
  //   res.render('skills/index', {
  // skills: skills
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res){
  res.render('skills/new')
}

function create(req, res){
  console.log(req.body)
  req.body.knowledge = !!req.body.knowledge
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
  console.log(req.params)
  Skill.findById(req.params.id)
  .then(skill => {
    res.render('skills/show', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  // skills,
}