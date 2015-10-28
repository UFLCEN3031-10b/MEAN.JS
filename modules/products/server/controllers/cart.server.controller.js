'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.cartChecker = function (req, res, next) {
    if (!req.session.cart) {
        req.session.cart = [];
    }

    next();
};

exports.list = function (req, res) {
    res.json(req.session.cart);
};

exports.remove = function (req, res) {
    req.session.cart = [];
    res.json(req.session.cart);
};

exports.update = function (req, res) {
    req.session.cart.push({
        product: req.product,
        quantity: req.body.quantity
    });

    res.json(req.session.cart);
};

exports.removeProduct = function (req, res) {
    var index = -1;
    req.session.cart.forEach(function (prodWrap, i) {
        if (String(req.product._id) === prodWrap.product._id) {
            index = i;
        }
    });

    if (index === -1) {
        return res.status(400).send({
            message: errorHandler.getErrorMessage('Cannot remove product from cart')
        });
    }

    req.session.cart.splice(index, 1);

    res.json(req.session.cart);
};

exports.getLength = function (req, res) {
    res.json({
        length: req.session.cart.length
    });
};