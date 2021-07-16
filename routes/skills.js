import { Router } from 'express'
const router = Router()
import * as skillsCtrl from '../controllers/skills.js'


/* GET users listing. */
router.get('/', skillsCtrl)
router.get('/:id', skillsCtrl.show)
router.get('/new', skillsCtrl.new)
router.get('/.post', skillsCtrl.create)
router.get('/delete', skillsCtrl.delete)

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource')
// })

export {
  router
}
