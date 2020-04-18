const express = require("express");
const ProjectSchemes = require("../../schemes/projectsModel");
const router = express.Router();

router.get("/projects", (req, res) => {
    ProjectSchemes.getProjects()
        .then((projects) => res.status(200).json(projects))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching projects" })
        );
});

module.exports = router;
