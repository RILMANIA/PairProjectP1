'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    
    get formattedPhone() {
      if (this.phoneNumber && this.phoneNumber.startsWith('0')) {
        return '+62' + this.phoneNumber.slice(1);
      }
      return this.phoneNumber;
    }

    static associate(models) {
      Profile.belongsTo(models.User)
    }
    
  }
  Profile.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { 
          msg: "Nama lengkap harus diisi!" 
        },
        notNull: {
          msg: "Nama lengkap harus diisi!"
        }
      }
    },
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};