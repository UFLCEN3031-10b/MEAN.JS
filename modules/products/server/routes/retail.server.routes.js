/**
 * Created by memamdie on 11/23/15.
 */
'use strict';
var retailData = require('../controllers/retail.server.controller'),
  whoareyoupolicy = require('../policies/variousUsers.server.policy.js');


//Route for retail data
module.exports = function (app) {
    app.route('/api/retail/data').all(whoareyoupolicy.isAllowed)
        .get(retailData.find)
        .put(retailData.update);
};
