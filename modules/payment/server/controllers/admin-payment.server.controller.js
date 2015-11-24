'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    Order = mongoose.model('Order'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.list = function (req, res) {
    var state = req.query.state;

    Order.find({ status: state }).populate('user').sort('-created').exec(function (err, data) {
        if (err) {
            return res.status(400).send({
                message: 'could not query database'
            });
        } else {
            res.json(data);
        }
    });
};

exports.update = function (req, res) {
    if (!req.order) {
        return res.status(400).send({
            message: "Order undefined"
        });
    }

    req.order.status = req.body.newStatus;
    req.order.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(req.order);
        }
    });
};
