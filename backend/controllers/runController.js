const Run = require('../models/runModel');
const mongoose = require('mongoose');

// GET all runs
const getRuns = async (req, res) => {
    const runs = await Run.find({}).sort({createdAt: -1});

    res.status(200).json(runs);
}


// GET a single run
const getRun = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such run"});
    }

    const run = await Run.findById(id);

    if (!run) {
        return res.status(400).json({error: "No such run"});
    }

    res.status(200).json(run);
}

// POST a new run
const createRun = async (req, res) => {
    const { dayName, dayDate, year, runTime, runDist } = req.body;

    let emptyFields = [];

    if (!dayName) {
        emptyFields.push('dayName');
    }
    if (!dayDate) {
        emptyFields.push('dayDate');
    }
    if (!year) {
        emptyFields.push('year');
    }
    if (!runTime) {
        emptyFields.push('runTime');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
    }

    // add a document to database
    try {
        const run = await Run.create({dayName, dayDate, year, runTime, runDist});
        res,status(200).json(run);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// DELETE a run
const deleteRun = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: "No such run"});
    }

    const run = await Run.findOneAndDelete({_id: id});

    if (!run) {
        return res.status(400).json(run);
    }

    res.status(200).json(run);

}


// UPDATE a run
const updateRun = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such run"});
    }

    const run = await Run.findOneandUpdate({_id: id}, {
        ...req.body
    });

    if (!run) {
        return res.status(400).json({error: "No such run"});
    }

    res.status(200).json(run);
}

module.exports = {
    getRuns,
    getRun,
    createRun,
    deleteRun,
    updateRun
}