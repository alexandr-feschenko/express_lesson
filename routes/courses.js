const { Router } = require('express');
const Course = require('../models/course');
const router = Router();

router.get('/', async(req, res) => {
    const courses = await Course.getAll();
    res.render('courses', {
        title: "Courses",
        isCourses: true,
        courses
    });

});

router.get(':/id/edit', async (req, res) => {
    console.log(req)
    if(!req.query.allow) {
        return res.redirect('/')
    }
    const course = await Course.getCourseById(req.params.id)
    res.render('course-edit', {
        title: course.title,
        cousre
    })
})

router.get('/:id', async(req, res) => {
    const course = await Course.getCourseById(req.params.id);
    res.render('course',{
        layout: 'empty',
        title: `Course ${course.title}`,
        course
    });
})

module.exports = router;