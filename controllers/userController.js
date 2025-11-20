const { User, Profile } = require('../models/index');
const bcrypt = require('bcryptjs');

class UserController{

    //! Form Register
    static registerForm(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //! Proses Register
    static async register(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //! Form Login
    static async loginForm(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //! Proses Login
    static async login(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    static async logout(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }
}

module.exports = UserController;