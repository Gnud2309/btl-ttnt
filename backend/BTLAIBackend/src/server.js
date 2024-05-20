'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const initialDatabase = require('./config/database/initialDatabase');
const { buildTree} = require('./Controller') ;
const DataTrainingModel = require('./models/DataTrainingModel');
initialDatabase();  
app.use(express.json());// json
app.use(express.urlencoded({ extended: true }));//html form 
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// config middleware cors 


app.get('/' , async (req ,  res) => {
    return res.status(200).json( await buildTree());
});
 app.get('/getInput' , async(req , res) => {
    const data =  await DataTrainingModel.findAll() ; 
    return res.status(200).json( data);
}); 
app.post('/query' , async(req , res) => {
    const data =  await DataTrainingModel.findAll() ; 
    return res.status(200).json( data);
});
app.post('/queryy' , async(req , res) => {
    const [monChinh , salad , soup , trangMieng , doUong , noodles , gao] = [req.body.monChinh ,req.body.salad, req.body.soup, req.body.trangMieng, req.body.doUong,req.body.noodles,req.body.gao];
    const LabelYESS = await DataTrainingModel.findAll({where : {label : true}});
    const LabelNOO = await DataTrainingModel.findAll({where : {label : false}});
    const yes = LabelYESS.length ;
    const no  = LabelNOO.length ;
    const all = yes + no ;
    const obj1 = {monChinh : monChinh , label : true};
    const obj2 = {salad : salad, label : true};
    const obj3 = {soup : soup, label : true};
    const obj4 = {trangMieng : trangMieng, label : true};
    const obj5 = {doUong : doUong, label : true};
    const obj6 = {noodles : noodles, label : true};
    const obj7 = {gao : gao, label : true};
    const res1 = await DataTrainingModel.findAll({where : obj1});
    const res2 = await DataTrainingModel.findAll({where : obj2});
    const res3 = await DataTrainingModel.findAll({where : obj3});
    const res4 = await DataTrainingModel.findAll({where : obj4});
    const res5 = await DataTrainingModel.findAll({where : obj5});
    const res6 = await DataTrainingModel.findAll({where : obj6});
    const res7 = await DataTrainingModel.findAll({where : obj7});
    const H1 = res1/yes*res2/yes*res3/yes*res4/yes*res5/yes*res6/yes*res7/yes * yes/all ;
    /////////////////////////////////////////////////////
    const obj11 = {monChinh : monChinh , label : false};
    const obj22= {salad : salad, label : false};
    const obj33 = {soup : soup, label : false};
    const obj44 = {trangMieng : trangMieng, label : false};
    const obj55 = {doUong : doUong, label : false};
    const obj66 = {noodles : noodles, label : false};
    const obj77 = {gao : gao, label : false};
    const res11 = await DataTrainingModel.findAll({where : obj11});
    const res22 = await DataTrainingModel.findAll({where : obj22});
    const res33 = await DataTrainingModel.findAll({where : obj33});
    const res44 = await DataTrainingModel.findAll({where : obj44});
    const res55 = await DataTrainingModel.findAll({where : obj55});
    const res66 = await DataTrainingModel.findAll({where : obj66});
    const res77 = await DataTrainingModel.findAll({where : obj77});
    const H2 = res11/no*res22/no*res33/no*res44/no*res55/no*res66/no*res77/no * no/all ;
    const messages = H1 - H2 >= 0 ? true : false;
    return res.status(200).json({message : messages});
});
app.use((req, res) => {
    res.status(404).send('Sai url');
})
app.listen(8888, 'localhost', (req, res) => {
    console.log(`Server is running on port ${8888 + ' ' + 'localhost'}`);
});   

  