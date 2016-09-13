// user.js
module.exports = {
  attributes: {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city: {
      type: Sequelize.STRING
    }
  },
  associations: function() {
    Owner.hasMany(Pet, {
      foreignKey: {
        name: 'pet',
        allowNull: true
      }
    });
  },
  options: {
    tableName: 'owner',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};