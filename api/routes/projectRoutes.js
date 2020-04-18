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

router.post("/projects", (req, res) => {
    const project = req.body;

    ProjectSchemes.addProject(project)
        .then((response) => res.status(201).json({ response }))
        .catch((err) =>
            res.status(500).json({ message: "Error creating project" })
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

router.post("/resources", (req, res) => {
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
