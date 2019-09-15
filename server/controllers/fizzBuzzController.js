const fizzBuzzController = {};

fizzBuzzController.fizzBuzz = (req, res, next) => {
  let output = [];
  let m = Number(req.query.m);
  let n = Number(req.query.n);

  // if (req.query.m === '' || req.query.n === '' || isNaN(m) || isNaN(n)) {
  //   res.locals = {
  //     Error: 'Incorrect format for query'
  //   };
  //   return next();
  // }

  if (req.query.m === '' || req.query.n === '' || isNaN(m) || isNaN(n)) {
    const err = new Error('Incorrect format for query');
    return next(err);
  }

  // if (m >= n) {
  //   res.locals = {
  //     Error: 'Incorrect inputs; m must be less than n'
  //   };
  //   return next();
  // }

  if (m >= n) {
    const err = new Error('Incorrect inputs; m must be less than n');
    return next(err);
  }

  while(m < n) {
    if (m % 3 === 0 && m % 5 === 0) {
      output.push('FizzBuzz');
    } else if (m % 5 === 0) {
      output.push('Buzz');
    } else if (m % 3 === 0) {
      output.push('Fizz');
    } else {
      output.push(m);
    }
    m++;
  }

  res.locals = { 
    data: output.join(','),
    input: `m: ${req.query.m}, n: ${req.query.n}`,
  };

  next();
}

module.exports = fizzBuzzController;
