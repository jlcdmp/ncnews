const connection = require('../db/connection');

console.log('article model');

exports.fetchArticleData = (query) => {
  const knexQuery = connection
    .select('*')
    .from('articles');

  if (query.hasOwnProperty('author') === true) {
    knexQuery.where('author', query.author);
  }
  if (query.hasOwnProperty('topic') === true) {
    knexQuery.where('topic', query.topic);
  }
  if (query.sortby === 'created_at') {
    knexQuery.orderBy('created_at', 'asc');
  } else if (query.sortby !== 'created_at') {
    knexQuery.orderBy('votes', 'asc');
  }
  return knexQuery;
};

exports.addArticle = article => connection('articles')
  .insert(article)
  .returning('*');


exports.fetchArticleDataByID = article_id => connection('articles')
  .where('article_id', '=', article_id)
  .returning('*');


exports.patchArticle = article_id => connection;