const jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://localhost:3000";
var METABASE_SECRET_KEY = "b7241c6fbfd2508be697289aa92842077027e6cc83559e808cc78a08774e0a36";

var payload = {
  resource: { dashboard: 1 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};

var finance = {
  resource: { dashboard: 2 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60)
}

var token = jwt.sign(payload, METABASE_SECRET_KEY);

var tokenFinance = jwt.sign(finance, METABASE_SECRET_KEY);
var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token +
  "#bordered=true&titled=true";

var financeUrl = METABASE_SITE_URL + "/embed/dashboard/" + tokenFinance +
  "#bordered=true&titled=true";


console.log(iframeUrl);
console.log("financeUrl", financeUrl);
module.exports.iframeUrl = iframeUrl;
