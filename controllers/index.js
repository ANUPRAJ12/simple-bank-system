// Express imports
const express = require('express'),
    router = express.Router()

// Middlewares for entire routes
const logMiddleware = require('../middlewares/logger.js')

// Routes in use
router.use('/bank', logMiddleware, )
router.use('/register', logMiddleware, )


// 404 setup
router.use('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

module.exports = router