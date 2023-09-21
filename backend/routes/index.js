const express = require('express');
const router = express.Router();

router.get('/api/csrf/restore', function(req, res) {
    const csrfToken = req.csrfToken()
    res.cookie('XSRF-TOKEN', req.csrfToken())
    res.status(200).json({
        'XSRF-Token':csrfToken
    })
    res.send('Hello World!')
})

module.exports = router;