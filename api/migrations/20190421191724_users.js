exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table
      .increments('user_id')
    table
      .string('email')
      .unique()
      .notNullable()
    table.string('password')
    table.string('token');
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users')
}
