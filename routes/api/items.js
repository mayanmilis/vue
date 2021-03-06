const express = require('express');
const router = express.Router();


const Item = require('../../models/item');

router.get('/', (req, res) => {
    Item.find()
    .then(items => res.json(items))
});


router.post('/', (req, res) => {
    const newItem = new Item({
        id: req.body.id,
        title: req.body.title,
        image: req.body.image,
        labels: req.body.labels,
        price: req.body.price,
        quantity: req.body.quantity,
    });
    newItem.save().then(item => res.json(item));
});


router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true})))
        .catch(err => res.status(404).json({ success: false}));
});

router.put('/:id', (req, res) => {
    Item.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(() =>{
        Item.findOne({_id: req.params.id})
        .then((item) => {
            res.send(item)
        })
    })
});

module.exports = router;