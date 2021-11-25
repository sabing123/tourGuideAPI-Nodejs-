const express =  require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');
const hotelRouter = require('./routes/hotel');
const PlaceRouter = require('./routes/place');
const TouristguidesRouter = require('./routes/touristguide');
const TrekkingRouter = require('./routes/trekking');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/uploads');
const cors = require('cors');


mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((db) =>
{
console.log("Sucessfully connected mongodb server");
})

const app = express();
app.options('*',cors());
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use('/user',userRouter);
app.use('/upload', uploadRouter);
app.use('/hotel',hotelRouter);
app.use('/place' , PlaceRouter);
app.use('/touristguide',TouristguidesRouter);
app.use('/trekking', TrekkingRouter);




(err,req,res,next) => {
    err.status = 500;
    err.json(err.message);
}

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
})