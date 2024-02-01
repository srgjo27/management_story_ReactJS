/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('chapters', function (table) {
        table.increments('id');
        table.integer('story').unsigned().notNullable();
        table.foreign('story').references('id').inTable('stories');
        table.string('title').notNullable();
        table.text('content').notNullable();
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('chapters');
};
