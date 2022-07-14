const express = require('express');
const mangaRouter = express.Router();

//create manga list
const mangas = [
    { id: 1, name:"One piece"},
    { id: 2, name:"Conan"},
    { id: 3, name:"Negima"}
];

mangaRouter.get('/',function(req,res){
    res.send(mangas)
});

mangaRouter.post('/',function(req,res){
    const newManga = {
        id: mangas[mangas.length-1].id+1,
        name : req.body.name
    };
    mangas.push(newManga);
    res.send(mangas);
});

mangaRouter.put('/', (req, res) => {

   
    for (let i = 0; i < mangas.length; i++){
        if (mangas[i].id === req.body.id){
            const newManga = {
                id: req.body.id,
                name: req.body.name,
            }

            mangas.splice(i,1,newManga);
           
        }
    }
  
    res.send(mangas);
})

mangaRouter.delete('/', (req, res) => {
    for (let i = 0; i < mangas.length; i++){
        if (mangas[i].id === req.body.id){
    
            mangas.splice(i,1);
           
        }
    }
    res.send(mangas);
})

module.exports = mangaRouter;