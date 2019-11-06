const express = require('express');

const db = require('../dbConfig');

const router = express.Router();


router.get('/', (req, res) => {
    db
    .select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(error => {
        res.status(500).json({ error: 'Failed to get info about cars'})
    })
})

router.get('/:id', (req, res) => {
    db
    .select('*')
    .from('cars')
    .where( 'id', '=', req.params.id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(error => {
        res.status(404).json({ error: 'could not display car'})
    })
})

router.post('/', (req, res) => {
    db
    .insert(req.body)
    .into('cars')
    .then( car => {
        res.status(200).json('car was added');
    })
    .catch(error => {
        res.status(400).json({ error: 'could not post car'})
    })
})

router.delete('/:id', (req, res) => {
    db('cars')
    .where('id', '=', req.params.id)
    .del()
    .then(car => {
        res.status(200).json('car was deleted');
    })
    .catch(error => {
        res.status(400).json({ error: 'could not delete car'})
    })
})

router.put('/:id', (req, res) => {
    db
    .update(req.body)
    .into('cars')
    .where('id', '=', req.params.id)
    .then(car => {
        res.status(200).json('car was updated');
    })
    .catch(error => {
        res.status(400).json({ error: 'could not update car'})
    })
})

module.exports = router;
