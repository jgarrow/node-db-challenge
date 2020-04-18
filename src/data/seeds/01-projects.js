exports.seed = function (knex) {
    return knex("projects")
        .truncate()
        .then(function () {
            return knex("projects").insert([
                { name: "Spring Cleaning", completed: false },
                {
                    name: "Make website",
                    description: "Make personal website to host portfolio",
                    completed: false,
                },
                { name: "Babysit for neighbors", completed: true },
            ]);
        });
};
