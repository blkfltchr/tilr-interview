exports.seed = async (knex) => {
  await knex.batchInsert('questions', [
    { text: 'Can you tell me a little about yourself?' },
    { text: 'What are you looking for in a new position?' },
    { text: 'What would your first 30, 60, or 90 days look like in this role?' }
  ])
}
