const express = require('express');
const router = express.Router();
const trekking = require('../model/trekking');
router.route('/')
.get((req,res,next)=>{
    trekking.find()
        .then((treks)=>{
            res.json(treks);
        }).catch(next);
})

.post((req,res,next)=>{
    trekking.create(req.body)
    .then((treks)=>{
        res.json(treks);
    }).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    trekking.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    trekking.findById(req.params.id)
    .then((treks) =>{
    res.json(treks);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    trekking.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((treks) =>{
    res.json(treks);
}).catch(next);
})

.delete((req,res,next)=>{
    trekking.findByIdAndDelete(req.params.id)
    .then((treks) => {
        res.json(treks);
}).catch(next);
});

module.exports = router;