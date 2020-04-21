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

function getResourceById(resourceId) {
    return db("resources").where({ id: resourceId });
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

function getResourcesByProject(projectId) {
    return db
        .select(
            "resources.id",
            "resources.resource_name",
            "resources.resource_description"
        )
        .from("project_resources")
        .where({ project_id: projectId })
        .innerJoin("projects", "projects.id", "project_resources.project_id")
        .innerJoin(
            "resources",
            "resources.id",
            "project_resources.resource_id"
        );
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

function removeResource(resourceId) {
    return db("resources").where({ id: resourceId }).del();
}

function updateProject(projectId, project) {
    return db("projects").where({ id: projectId }).update(project);
}

function updateTask(taskId, task) {
    return db("tasks").where({ id: taskId }).update(task);
}

function updateResource(resourceId, resource) {
    return db("resources").where({ id: resourceId }).update(resource);
}

module.exports = {
    getProjects,
    getProject,
    getResources,
    getResourceById,
    getTasksByProject,
    getResourcesByProject,
    getTasks,
    getTaskById,
    addProject,
    addTasksToProject,
    addResource,
    removeProject,
    removeTask,
    removeResource,
    updateProject,
    updateTask,
    updateResource,
};
