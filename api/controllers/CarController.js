/**
 * CarController
 *
 * @description :: Server-side logic for managing Cars
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {


	    add: function(req, res){
        var driver = {Name: 'Juan'};
        Driver.create(driver).exec(function(err, result){
            Car.create({
                Name: 'My Car',
                Brand: 'Honda',
                Model: 'Civic',
                driver: result.id
            }).exec(function (e, r){
                Driver.update({id: result.id}, {car: r.id}).exec(function(e1, r1){
                    return res.json({result: r, error: e}); 
                });             
            });
        });
    },


        viewCar: function(req, res){
        Car.find().populate('driver').exec(function(e, r){
            return res.json({Car: r});
        });
    },
	
};

