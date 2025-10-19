const { authors } = require("../db")

async function getAuthorModel(authorId) {
  return authors.find((author) => author.id === authorId);
}

module.exports = getAuthorModel;
