const express = require('express');
const router = express.Router();
const apiRouter = require('./api')


router.get('/api/csrf/restore', function(req, res) {
    const csrfToken = req.csrfToken()
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.status(200).json({
        'XSRF-Token':csrfToken
    })
    // res.send('Hello World!')
})
router.use('/api', apiRouter)

module.exports = router;