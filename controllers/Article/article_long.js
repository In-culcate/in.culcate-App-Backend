// controllers/Article/article_long.js


const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../../errors");

const send_long_Article_By_Id = (req,res) => {
    // Your logic for handling the request
    res.status(StatusCodes.OK).json({message: "Send long Article by id"});
}

module.exports = { send_long_Article_By_Id };