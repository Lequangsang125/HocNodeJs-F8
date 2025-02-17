const express = require('express');
const CourseController = require('../app/controllers/CourseController');
const router = express.Router();

// newsController.index
router.get('/create', CourseController.create)
router.post('/store', CourseController.store)
router.get('/:id/edit', CourseController.edit)
router.post('/handle-form-actions', CourseController.handleFormActions)
router.put('/:id', CourseController.update)
router.patch('/:id/restore', CourseController.restore)
router.delete('/:id', CourseController.delete)
router.delete('/:id/force', CourseController.forceDelete)
router.get('/:slug', CourseController.show)

module.exports = router;