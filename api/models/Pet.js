// user.js
module.exports = {
  attributes: {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER
    }
  },
  associations: function() {
    Pet.belongsTo(Owner, {
      foreignKey: {
        name: 'owner',
        allowNull: false
      }
    });
  },
  options: {
    tableName: 'pet',
    classMethods: {},
    instanceMethods: {},
    hooks: {}
  }
};