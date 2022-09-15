const express = require('express');
const {
    getRuns,
    getRun,
    createRun,
    deleteRun,
    updateRun
} = require('../controllers/runController');


const router = express.Router();

// GET all runs
router.get('/', getRuns);

// GET a single run
router.get('/:id', getRun);

// POST a new run
router.post('/', createRun);

// DELETE a run
router.delete('/:id', deleteRun);

// UPDATE a run
router.patch('/:id', updateRun);

module.exports = router;