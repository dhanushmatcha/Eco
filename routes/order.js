// routes/order.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { name, phone, address, place, payment_method } = req.body;

  const sql = `INSERT INTO orders (name, phone, address, place, payment_method)
               VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [name, phone, address, place, payment_method], (err, result) => {
    if (err) {
      console.error('Error inserting order:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.status(200).json({ message: 'Order placed successfully' });
  });
});

module.exports = router;
