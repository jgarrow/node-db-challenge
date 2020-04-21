exports.seed = function (knex) {
    return knex("projects")
        .truncate()
        .then(function () {
            return knex("projects").insert([
                { project_name: "Spring Cleaning", project_completed: false },
                {
                    project_name: "Make website",
                    project_description:
                        "Make personal website to host portfolio",
                    project_completed: false,
                },
                {
                    project_name: "Babysit for neighbors",
                    project_completed: true,
                },
            ]);
        });
};
