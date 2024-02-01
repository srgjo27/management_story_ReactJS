/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('tags', function (table) {
        table.increments('id');
        table.string('tag').notNullable();
        table.integer('story').unsigned().notNullable();
        table.foreign('story').references('id').inTable('stories');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('tags');
};
