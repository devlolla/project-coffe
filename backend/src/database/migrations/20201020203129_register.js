exports.up = function(knex) {
    return knex.schema.createTable('register', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('opcao').notNullable();
        table.string('acompanhamento').notNullable();
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('register')
  };
  