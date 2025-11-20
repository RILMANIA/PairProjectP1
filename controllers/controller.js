const { Category, Service, User, Profile } = require('../models/index');
const { Op } = require('sequelize');

class Controller{

    //! Landing Page (Home)
    static async home(req,res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //! List Services (Halaman Katalog Jasa)
    static async listServices(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //! Detail Service (Untuk memesan)
    static async serviceDetail(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //! Admin: Add Service Form
    static async addServiceForm(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }

    //! Admin: Create Service (POST)
    static async createService(req, res){
        try {
            
        } 
        
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }
}

module.exports = Controller;