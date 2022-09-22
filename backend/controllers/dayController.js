const Day = require('../models/dayModel');
const mongoose = require('mongoose');

// GET all days
const getDays = async (req, res) => {
    const user_id = req.user._id
    const days = await Day.find({ user_id }).sort({createdAt: -1});
    
    res.status(200).json(days);
}


// GET a single day
const getDay = async (req, res) => {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such day"});
    }
    
    const day = await Day.findById(id);

    if (!day) {
        return res.status(400).json({error: "No such day"});
    }

    res.status(200).json(day);
}


// POST a new day
const createDay = async (req, res) => {
    const { name, date, year, comment } = req.body;

    let emptyFields = [];

    if (!name) {
        emptyFields.push('name');
    }
    if (!date) {
        emptyFields.push('date');
    }
    if (!year) {
        emptyFields.push('year');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
    }

    // add a document to database
    try {
        const user_id = req.user._id;
        const day = await Day.create({name, date, year, comment, user_id});
        res.status(200).json(day);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


// DELETE a day
const deleteDay = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such day"});
    }

    const day = await Day.findOneAndDelete({_id: id});

    if (!day) {
        return res.status(400).json({error: "No such day"});
    }

    res.status(200).json(day);
}


// UPDATE a day
const updateDay = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "No such day"});
    }

    const day = await Day.findOneAndUpdate({_id: id}, {
        ...req.body
    });

    if (!day) {
        return res.status(400).json({error: "No such day"});
    }

    res.status(200).json(day);
}


module.exports = {
    getDays,
    getDay,
    createDay,
    deleteDay,
    updateDay
}