const express = require('express');
const router = express.Router();
router.get('/test', (req, res) => { return res.send("reihruierhiueryuei") })


module.exports = router;