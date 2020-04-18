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

router.get("/projects/:id", (req, res) => {
    const { id } = req.params;

    ProjectSchemes.getProject(id)
        .then((project) => res.status(200).json(project))
        .catch((err) =>
            res.status(500).json({ message: `Error fetching project ${id}` })
        );
});

router.get("/resources", (req, res) => {
    ProjectSchemes.getResources()
        .then((resources) => res.status(200).json(resources))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching resources" })
        );
});

router.get("/tasks", (req, res) => {
    ProjectSchemes.getTasks()
        .then((tasks) => res.status(200).json(tasks))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching tasks" })
        );
});

// get tasks for specific project
router.get("/projects/:id/tasks", (req, res) => {
    const projectId = req.params.id;

    ProjectSchemes.getTasksByProject(projectId)
        .then((tasks) => res.status(200).json(tasks))
        .catch((err) =>
            res.status(500).json({
                message: `Error fetching tasks for project ${projectId}`,
            })
        );
});

module.exports = router;
