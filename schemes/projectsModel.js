const db = require("../data/dbConfig");

function getProjects() {
    return db("projects");
}

function getProject(projectId) {
    return db("projects").where({ id: projectId });
}

function getResources() {
    return db("resources");
}

function getTasks() {
    return db
        .select(
            "projects.project_name",
            "projects.project_description",
            "tasks.task_name",
            "tasks.task_notes",
            "tasks.task_completed"
        )
        .from("tasks")

        .innerJoin("projects", "projects.id", "tasks.project_id");
}

function getTasksByProject(projectId) {
    return db
        .select(
            "projects.project_name",
            "projects.project_description",
            "tasks.task_name",
            "tasks.task_notes",
            "tasks.task_completed"
        )
        .from("tasks")
        .where({ project_id: projectId })
        .innerJoin("projects", "projects.id", "tasks.project_id");
}

function addProject(project) {
    return db("projects").insert(project);
}

function addTasksToProject(task) {
    return db("tasks").insert(task);
}

function addResource(resource) {
    return db("resources").insert(resource);
}

module.exports = {
    getProjects,
    getProject,
    getResources,
    getTasksByProject,
    getTasks,
    addProject,
    addTasksToProject,
    addResource,
};
