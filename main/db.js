const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "fabex-db",
  password: "cookies",
  port: 5432,
});

// const pool = new Pool({
//   user: "fabex_user",
//   host: "dpg-cri03tbv2p9s73bhlm2g-a.oregon-postgres.render.com",
//   database: "fabex",
//   password: "1x4FE04fBLVaiF9XafApKiQGi5zMvZpM",
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false, // Ensure secure connection
//   },
// });

module.exports = pool;
