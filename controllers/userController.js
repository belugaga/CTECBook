"use strict"

const UsersDB = require('../models/UsersDB');

var usersDB = new UsersDB();
var jwt = require('jsonwebtoken')
var secret = "somesecretkey"

function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function addUser(request, respond){
    
    var username = request.body.username;
    var name = request.body.name;
    var password = request.body.password;
    var email = request.body.email;
    
    usersDB.addUser(username, name, password, email, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function loginUser(request, respond){
    
    var username = request.body.username;
    var password = request.body.password;
    
    usersDB.loginUser(username, function(error, result){
        if (error){
            console.log(result)
            respond.json(error);
            
        }
        else{
            console.log(result[0].password)
            var flag = result[0].password;
            if (flag == password) {
                var token = jwt.sign(username, secret)
                respond.json({result:token});
            }
            else {
                respond.json({result:"invalid"});
            }
        }
    });
}

function updateUser(request, respond){
    var username = request.body.username;
    var name = request.body.name;
    var email = request.body.email;
    var token = request.body.token;

    try {
        var decoded = jwt.verify(token, secret);
        usersDB.updateUser(username, name, email, function(error, result){
            if(error){
                respond.json(error);
            }
            else{
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json({result:"invalid"});
    }

}

function deleteUser(request, respond){
    var userID = request.params.id;
    usersDB.deleteUser(userID, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getUser(request, respond) {
    var token = request.body.token;
  
    try {
      var decoded = jwt.verify(token, secret);
      usersDB.getUser(decoded, function (error, result) {
        if (error) {
          respond.json(error);
        } else {
          respond.json(result);
        }
      });
      
    } catch (err) {
      respond.json({ result: "invalid token" });
    }
    
  }

module.exports = {getAllUsers, addUser, updateUser, deleteUser, loginUser, getUser};