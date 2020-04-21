exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tasks")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("tasks").insert([
                { task_name: "vaccuum", project_id: 1, task_completed: false },
                {
                    task_name: "wash dishes",
                    project_id: 1,
                    task_completed: true,
                },
                {
                    task_name: "laundry",
                    project_id: 1,
                    task_notes:
                        "wash and fold laundry, including bedsheets and towels",
                    task_completed: false,
                },
                {
                    task_name: "nail down site design",
                    project_id: 2,
                    task_notes:
                        "find design from internet or make one on Figma",
                    task_completed: false,
                },
                {
                    task_name: "pick framework and libraries",
                    project_id: 2,
                    task_completed: true,
                },
                {
                    task_name: "pick up kids at 10:00",
                    project_id: 3,
                    task_completed: true,
                },
            ]);
        });
};
