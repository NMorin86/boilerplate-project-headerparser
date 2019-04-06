function getHeaderInfo(req, res, next) {
  console.log("In getHeaderInfo");
  let header = req.headers;
  console.log("Headers: ", header);
  
  next();
}



module.exports = { getHeaderInfo: getHeaderInfo };