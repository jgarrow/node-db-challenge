const express = require("express");
const ProjectSchemes = require("../../schemes/projectsModel");
const router = express.Router();

// get all projects
router.get("/", (req, res) => {
    ProjectSchemes.getProjects()
        .then((projects) => res.status(200).json(projects))
        .catch((err) =>
            res.status(500).json({ message: "Error fetching projects" })
        );
});

// get project by id
router.get("/:id", (req, res) => {
    const { id } = req.params;

    ProjectSchemes.getProject(id)
        .then((project) => {
            ProjectSchemes.getTasksByProject(id)
                .then((tasks) => {
                    res.status(200).json({ ...project[0], tasks });
                })
                .catch((err) =>
                    res.status(500).json({
                        message: `Error fetching tasks for project ${id}`,
                    })
                );
        })
        .catch((err) =>
            res.status(500).json({ message: `Error fetching project ${id}` })
        );
});

// create new project
router.post("/", (req, res) => {
    const project = req.body;

    ProjectSchemes.addProject(project)
        .then((response) => res.status(201).json({ response }))
        .catch((err) =>
            res.status(500).json({ message: "Error creating project" })
        );
});

router.put("/:id", (req, res) => {
    const projectId = req.params.id;
    const updatedProject = req.body;

    ProjectSchemes.updateProject(projectId, updatedProject)
        .then((response) => res.status(200).json(response))
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Error updating project ${projectId}` })
        );
});

router.delete("/:id", (req, res) => {
    const projectId = req.params.id;

    ProjectSchemes.removeProject(projectId)
        .then((response) => res.status(200).json(response))
        .catch((err) =>
            res
                .status(500)
                .json({ message: `Error deleting project ${projectId}` })
        );
});

module.exports = router;
