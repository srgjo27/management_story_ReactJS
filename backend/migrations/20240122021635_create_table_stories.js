/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('stories', function (table) {
        table.increments('id');
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.text('synopsis');
        table.string('storyCover');
        table.integer('category').unsigned().notNullable();
        table.foreign('category').references('id').inTable('categories');
        table.text('tags').defaultTo('[]');
        table.enum('status', ['Publish', 'Draft']).defaultTo('Draft');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('stories');
};
