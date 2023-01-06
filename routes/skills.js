import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

//! GET /skills
router.get('/', skillsCtrl.index)

//! GET /slills/new
router.get('/new', skillsCtrl.new)

//! GET /slills/:id
router.get('/:id', skillsCtrl.show)

//! POST /skills
router.post('/', skillsCtrl.create)

//! DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete)

export {
  router
}
