import express, { json, urlencoded } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { getCouple } from './couple.js';



dotenv.config();


var app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(json())
app.use(urlencoded({extended: true}))


app.post('/getCouple',async (req, res) => {

    const couple = await getCouple(req.body.name);
   
    if(couple == 404){
        res.status(404).send('Couple not found');
    }else{
        res.status(200).send(couple);
    }

});

app.listen(3000, () => {

    console.log(`Server is running on port 3000`);
});