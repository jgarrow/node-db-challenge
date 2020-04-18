exports.seed = function (knex) {
    return knex("resources")
        .truncate()
        .then(function () {
            // Inserts seed entries
            return knex("resources").insert([
                { name: "vaccuum" },
                { name: "dish soap" },
                { name: "sponge" },
                { name: "laundry detergent" },
                { name: "dryer sheets" },
                { name: "computer" },
            ]);
        });
};
