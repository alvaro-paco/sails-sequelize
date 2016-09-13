/**
 * PetController
 *
 * @description :: Server-side logic for managing pets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	tx : function (req, res) {
        User.sequelize.transaction(function (t) {
        // chain all your queries here. make sure you return them.
            return Owner.create({
                name: 'Abraham Lincoln',
                city: 'San Francisco'
            })
            .then(function (abrahan) {
                return Pet.create({name: 'Bob', age:1, owner:abrahan.id})
                .then(function (bob) {
                    return abrahan.addPet(bob, {transaction:t})
                })
            })
            .catch(function (err) {
                // Transaction has been rolled back
                // err is whatever rejected the promise chain returned to the transaction callback
                t.rollback();
                return err;
            });
        }).then(function (result) {
            // Transaction has been committed
            // result is whatever the result of the promise chain returned to the transaction callback
            return res.json(200, result)
        }).catch(function (err) {
            // Transaction has been rolled back
            // err is whatever rejected the promise chain returned to the transaction callback
            return res.json(500, err);
        });
    }
};

