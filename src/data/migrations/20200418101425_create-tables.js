exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (tbl) => {
            tbl.increments();
            tbl.string("name", 16).notNullable();
            tbl.string("description", 128);
            tbl.boolean("completed").defaultTo(false);
        })
        .createTable("tasks", (tbl) => {
            tbl.increments();
            tbl.string("name", 16).notNullable();
            tbl.string("notes", 128);
            tbl.boolean("completed").defaultTo(false);
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects");
        })
        .createTable("resources", (tbl) => {
            tbl.increments();
            tbl.string("name", 16).notNullable();
            tbl.string("description", 128);
        })
        .createTable("project_resources", (tbl) => {
            tbl.integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects");
            tbl.integer("task_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("tasks");
            tbl.primary(["project_id", "task_id"]);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("projects");
};
