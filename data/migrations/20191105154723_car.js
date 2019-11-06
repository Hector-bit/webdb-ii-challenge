
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table){
        table.increments();
        table.string('VIN', 128).notNullable();
        table.string('make', 128).notNullable();
        table.string('model', 128).notNullable();
        table.float('mileage');
        //optional info
        table.string('transmission type', 128);
        table.string('status', 500);
        //timestamps
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
  };
  
  
  // The critical information for each car is the VIN, make, model, and mileage.
  // They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.