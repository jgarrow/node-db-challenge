const express = require("express");
const ProjectSchemes = require("../../schemes/projectsModel");
const router = express.Router();

// get all tasks
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

// create tasks for specific project
router.post("/projects/:id/tasks", (req, res) => {
    const task = req.body;

    ProjectSchemes.addTasksToProject(task)
        .then((response) => res.status(201).json({ response }))
        .catch((err) =>
            res.status(500).json({
                message: `Error creating tasks for project ${projectId}`,
            })
        );
});

module.exports = router;
