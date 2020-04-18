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

router.get("/:id", (req, res) => {
    const resourceId = req.params.id;

    ProjectSchemes.getResourceById(resourceId)
        .then((resource) => res.status(200).json(resource))
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Error fetching resource ${resourceId}` })
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

router.put("/:id", (req, res) => {
    const resourceId = req.params.id;
    const updatedResource = req.body;

    ProjectSchemes.updateResource(resourceId, updatedResource)
        .then((response) => res.status(200).json(response))
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Error updating resource ${resourceId}` })
        );
});

router.delete("/:id", (req, res) => {
    const resourceId = req.params.id;

    ProjectSchemes.removeResource(resourceId)
        .then((response) => res.status(200).json(response))
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Error deleting resource ${resourceId}` })
        );
});

module.exports = router;
