const express = require('express');
const router = express.Router();
const Place = require('../model/place');
router.route('/')
.get((req,res,next)=>{
    Place.find()
        .then((places)=>{
            res.json(places);
        }).catch(next);
})

.post((req,res,next)=>{
    Place.create(req.body)
    .then((places)=>{
        res.json(places);
    }).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    Place.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    Place.findById(req.params.id)
    .then((places) =>{
    res.json(places);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Place.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((places) =>{
    res.json(places);
}).catch(next);
})

.delete((req,res,next)=>{
    Place.findByIdAndDelete(req.params.id)
    .then((places) => {
        res.json(places);
}).catch(next);
});

module.exports = router;