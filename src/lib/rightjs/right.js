var jsdom = require('jsdom'),
  qs = require('qs');


function mime(req) {
  var str = req.headers['content-type'] || '';
  return str.split(';')[0];
}

exports = module.exports = function rightHandler() {

  return function rightHandler(req, res, next) {
    console.log("i am in");
    console.log((res));
    return next();
  };

};
