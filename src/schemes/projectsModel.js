const db = require("../data/dbConfig");

function getProjects() {
    return db("projects");
}

function getResources() {
    return db("resources");
}

function getTasks() {}

module.exports = {
    getProjects,
    getResources,
};
