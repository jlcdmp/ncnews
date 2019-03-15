exports.handle400s = (err, req, res, next) => {
  const codes = {
    '22P02': 'Invalid input syntax for integer',
    42703: 'Columns do not exsist',
  };
  if (codes[err.code]) res.status(400).send({ message: codes[err.code] });
  else next(err);
};

exports.handle422s = (err, req, res, next) => {
  const codes = {
    23502: 'Null value in collum viollates non-null contraint',
    23505: 'Duplicate key value violates unique constraint',
  };
  if (codes[err.code]) res.status(422).send({ message: codes[err.code] });
  else next(err);
};

exports.handle404s = (err, req, res, next) => {
  res.status(404).send({ message: 'Page not found' });
  next(err);
};
