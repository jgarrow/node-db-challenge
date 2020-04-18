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

function getTaskById(taskId) {
    return db("tasks").where({ id: taskId });
}

function getTasksByProject(projectId) {
    return db
        .select(
            "tasks.id",
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

function removeProject(projectId) {
    return db("projects").where({ id: projectId }).del();
}

function removeTask(taskId) {
    return db("tasks").where({ id: taskId }).del();
}

function updateProject(projectId, project) {
    return db("projects").where({ id: projectId }).update(project);
}

function updateTask(taskId, task) {
    return db("tasks").where({ id: taskId }).update(task);
}

module.exports = {
    getProjects,
    getProject,
    getResources,
    getTasksByProject,
    getTasks,
    getTaskById,
    addProject,
    addTasksToProject,
    addResource,
    removeProject,
    removeTask,
    updateProject,
    updateTask,
};
