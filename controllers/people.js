const express = require("express");
const People = require("../models/people");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.json(await People.find({})).status(200)
    } catch(error) {
        res.status(400).json(error);
    }
});

router.post("/", async (req, res) => {
    try {
        res.json(await People.create(req.body))
    } catch(error) {
        res.status(400).json(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        res.json(await People.findByIdAndUpdate(req.params.id, req.body, { new: true }));
    } catch(error) {
        res.status(400).json(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        res.json(await People.findByIdAndRemove(req.params.id));
    } catch(error) {
        res.status(400).json(error);
    }
});

module.exports = router;