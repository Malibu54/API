const express = require('express');
const router = express.Router();

// Ruta de ejemplo: GET /api/mensaje
router.get('/mensaje', (req, res) => {
  res.json({ mensaje: 'Esta es una respuesta desde la API' });
});

module.exports = router;
