const express = require("express");
const ProjectSchemes = require("../../schemes/projectsModel");
const router = express.Router();

// get all resources
router.get("/", (req, res) => {
    ProjectSchemes.getResources()
        .then((resources) => res.status(200).json(resources))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching resources" })
        );
});

// create new resource
router.post("/", (req, res) => {
    const resource = req.body;

    ProjectSchemes.addResource(resource)
        .then((response) => res.status(201).json({ response }))
        .catch((err) =>
            res.status(500).json({
                message: `Error creating resource`,
            })
        );
});

module.exports = router;
