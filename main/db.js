const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "fabex-db",
//   password: "cookies",
//   port: 5432,
// });

const pool = new Pool({
  user: "fabex_db_user",
  host: "dpg-cvea8tpu0jms73be2110-a.oregon-postgres.render.com",
  database: "fabex_db",
  password: "ZA3GpWV5d4SnQRpo0ljtz1EM0dVtJdUD",
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // Ensure secure connection
  },
});

module.exports = pool;
