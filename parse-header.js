function getHeaderInfo(req, res, next) {
  // console.log("In getHeaderInfo");
  let header = req.headers;
  // console.log("Headers: ", header);
  
  let returnJSON = {
    ipaddress: header["x-forwarded-for"].split(',')[0],
    language: header["accept-language"],
    software: header["user-agent"]
  };

  // console.log("Returning JSON: ", returnJSON);
  res.json(returnJSON);
  
  next();
}



module.exports = { getHeaderInfo: getHeaderInfo };