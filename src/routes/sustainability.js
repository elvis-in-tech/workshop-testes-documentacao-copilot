const express = require('express');
const router = express.Router();
const service = require('../services/sustainabilityService');

router.get('/', (req, res) => {
  res.json(service.getAll());
});

router.get('/:id', (req, res) => {
  const initiative = service.getById(req.params.id);
  if (initiative) {
    res.json(initiative);
  } else {
    res.status(404).json({ message: 'Initiative not found' });
  }
});

router.post('/', (req, res) => {
  const newInitiative = req.body;
  const created = service.create(newInitiative);
  res.status(201).json(created);
});

router.put('/:id', (req, res) => {
  const updated = service.update(req.params.id, req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ message: 'Initiative not found' });
  }
});

router.delete('/:id', (req, res) => {
  const deleted = service.remove(req.params.id);
  if (deleted) {
    res.json(deleted);
  } else {
    res.status(404).json({ message: 'Initiative not found' });
  }
});

module.exports = router;