const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
  };

  function find() {
    return db('users')
  }

  function findBy(search) {
      return db('users')
        .select('id', 'username', 'password', 'department')
        .where(search)
  }

  function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }

 
function add(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            return findById(ids[0]);
          });
}
