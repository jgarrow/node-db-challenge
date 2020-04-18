exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tasks")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("tasks").insert([
                { name: "vaccuum", project_id: 1, completed: false },
                { name: "wash dishes", project_id: 1, completed: true },
                {
                    name: "laundry",
                    project_id: 1,
                    notes:
                        "wash and fold laundry, including bedsheets and towels",
                    completed: false,
                },
                {
                    name: "nail down site design",
                    project_id: 2,
                    notes: "find design from internet or make one on Figma",
                    completed: false,
                },
                {
                    name: "pick framework and libraries",
                    project_id: 2,
                    completed: true,
                },
                {
                    name: "pick up kids at 10:00",
                    project_id: 3,
                    completed: true,
                },
            ]);
        });
};
