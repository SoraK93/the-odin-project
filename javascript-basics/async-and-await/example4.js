let database;

function connect() {
  database = {
    async query(isOk) {
      if (!isOk) throw new Error("Query failed");
    },
  };
}

function disconnect() {
  database = null;
}

// Helper function to call async function `fn` after `ms` milliseconds
function delay(fn, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => fn().then(resolve, reject), ms);
  });
}

async function run() {
  connect();
  let result = await allOrAggregateError([
    // these 3 parallel jobs take different time: 100, 200 and 300 ms
    // we use the `delay` helper to achieve this effect
    delay(() => database.query(true), 100),
    delay(() => database.query(false), 200),
    delay(() => database.query(false), 300),
  ]);
  disconnect();
  return result;
}

// wait for all promises to settle
// return results if no errors
// throw AggregateError with all errors if any
function allOrAggregateError(promises) {
  return Promise.allSettled(promises).then(results => {
    const errors = [];
    const values = [];

    results.forEach((res, i) => {
      if (res.status === 'fulfilled') {
        values[i] = res.value;
      } else {
        errors.push(res.reason);
      }
    });

    if (errors.length > 0) {
      throw new AggregateError(errors, 'One or more promises failed');
    }

    return values;
  });
}

run();