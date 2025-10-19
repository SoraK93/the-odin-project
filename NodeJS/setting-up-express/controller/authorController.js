const getAuthorModel = require("../models/authorModel")
const CustomNotFoundError = require("../errors/CustomNotFoundError");

async function getAuthorById(req, res) {
  const { authorId } = req.params;

  const author = await getAuthorModel(Number(authorId));

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author Name: ${author.name}`);

  // or we can call next(error) instead of sending a response here
  // Using `next(error)` however will only render an error page in the express' default view and respond with the whole html to the client.
  // So we will need to create a special type of middleware function if we want a different response and we will get to that... next.
}

module.exports = { getAuthorById };
