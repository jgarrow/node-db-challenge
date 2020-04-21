exports.seed = function (knex) {
    return knex("resources")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("resources").insert([
                { resource_name: "vaccuum" },
                { resource_name: "dish soap" },
                { resource_name: "sponge" },
                { resource_name: "laundry detergent" },
                { resource_name: "dryer sheets" },
                { resource_name: "computer" },
                { resource_name: "toys" },
            ]);
        });
};
