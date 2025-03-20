var express = require("express");

var router = express.Router();

var pool = require("./db");

router.post("/api/post/login", (req, res, next) => {
  const { email, password } = req.body;

  pool.query(
    `SELECT * FROM login WHERE email = $1`,
    [email],
    (q_err, q_res) => {
      if (q_err) return res.status(500).json("Internal Server error");
      const user = q_res.rows[0];
      if (!user || user.password !== password) {
        return res.status(401).json("Invalid email or password");
      }

      // Successful login
      res.json({
        user: {
          uid: user.uid,
          username: user.username,
          email: user.email,
          job_description: user.job_description,
        },
      });
    }
  );
});

router.get("/api/get/trx", (req, res, next) => {
  pool.query(`SELECT * FROM transactions`, (q_err, q_res) => {
    if (q_err) return res.status(500).json("Internal Server error");
    const user = q_res.rows;
    if (!user) {
      return res.status(401).json("Internal Server Error");
    }

    // Successful login
    res.json(user);
  });
});
// Approve Transaction Route
router.post("/api/approve-transaction", (req, res) => {
  const { tid, currentUser } = req.body;
  // Update the transaction state to 'approved' and set 'approved_by' to the current user
  pool
    .query(
      "UPDATE transactions SET tx_state = $1, approved_by = $2 WHERE tid = $3 RETURNING *",
      ["approved", currentUser, tid]
    )
    .then((result) => res.json(result.rows)) // Return the updated transaction
    .catch((error) =>
      res.status(500).json({ error: "Failed to approve transaction" })
    );
});

// Reject Transaction Route
router.post("/api/reject-transaction", (req, res) => {
  const { tid, currentUser } = req.body;
  console.log(req.body.tid, req.body.currentUser);
  // Update the transaction state to 'rejected' and set 'approved_by' to the current user
  pool
    .query(
      "UPDATE transactions SET tx_state = $1, approved_by = $2 WHERE tid = $3 RETURNING *",
      ["rejected", currentUser, tid]
    )
    .then((result) => {
      console.log(result.rows)
      res.json(result.rows);
    })

    .catch((error) =>
      res.status(500).json({ error: "Failed to reject transaction" })
    );
});

// GET ALL USERS
router.get("/api/get/users", (req, res, next) => {
  pool.query(`SELECT * FROM users`, (q_err, q_res) => {
    if (q_err) return res.status(500).json("Internal Server error");
    const user = q_res.rows;
    if (!user) {
      return res.status(401).json("Internal Server Error");
    }

    res.json(user);
  });
});

//Route to get specific user from the users table.

module.exports = router;
