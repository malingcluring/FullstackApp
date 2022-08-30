import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

const app = express();
mongoose.connect('mongodb://localhost:27017/fullstack_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', function(error){
    console.log(error);
});
db.once('open', function(){
    console.log('Database connected...');
});

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, function(){
    console.log('Server up and running...');
});