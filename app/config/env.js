const env = {
    database: 'teste',
    username: 'root',
    password: 'epsoft123',
    host: 'dev.kanban360.com.br',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
module.exports = env;
  