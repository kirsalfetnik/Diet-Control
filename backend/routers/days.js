const express = require('express');
const {
    getDays,
    getDay,
    createDay,
    deleteDay,
    updateDay
} = require('../controllers/dayController');
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();

// require auth for all day routes
router.use(requireAuth);

// GET all days
router.get('/', getDays);

// GET a single day
router.get('/:id', getDay);

// POST a new day
router.post('/', createDay);

// DELETE a day
router.delete('/:id', deleteDay);

// UPDATE a day
router.patch('/:id', updateDay);

module.exports = router;