// cosntrollers/Article/article_short.js

const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../../errors");

const send_20_Short_Article = (req, res)=> {
  // Your logic for handling the request
  res.status(StatusCodes.OK).json({ message: "Send 20 Short Article" });
}
const send_Short_Article_By_Id = (req, res)=> {
  // Your logic for handling the request
  res.status(StatusCodes.OK).json({ message: "Send Short Article by id" });
}

module.exports = { send_20_Short_Article, send_Short_Article_By_Id };