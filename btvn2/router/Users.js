const express = require('express');
const Users = express.Router();

//create manga list
const users = [
    { id: 1, name:"Nguyen Trong Phu"},
    { id: 2, name:"Edogawa Conan"},
    { id: 3, name:"Kurosaki Ichigo"}
];

Users.get('/',function(req,res){
    res.send(users)
});

Users.post('/',function(req,res){
    const newUser = {
        id: users[users.length-1].id+1,
        name : req.body.name
    };
    users.push(newUser);
    res.send(users);
});

Users.put('/', (req, res) => {

   
    for (let i = 0; i < users.length; i++){
        if (users[i].id === req.body.id){
            const newUser = {
                id: req.body.id,
                name: req.body.name,
            }

            users.splice(i,1,newUser);
           
        }
    }
  
    res.send(users);
})

Users.delete('/', (req, res) => {
    for (let i = 0; i < users.length; i++){
        if (users[i].id === req.body.id){
    
            users.splice(i,1);
           
        }
    }
    res.send(users);
})

module.exports = Users;