# Installation

### First install mongodb driver:

`npm i mongodb`

### Then install wrapper:

`npm i basic-mongo`

# Using

#### This package is promise based. It means you must use `await` or `.then` to get results

## Starting

#### Declare package

```JS
const Interface = require("basic-mongo");
```

#### Creating instance of

```JS
let database = new Interface(url, dbname);
```

##### Where url: connection string, dbname: database name

#### Getting information from database

```JS
const Interface = require("basic-mongo");
let database = new Interface(url, dbname);

await database.findOne("users", { name: 'Fox', status: 'Premium' }).then((data) => {
  console.log(data);
  return;
});
```

# Functions

##### Find - return promise with array of all results

```JS
database.find(collectionname, params);
```

##### findOne - return promise with object

```JS
database.findOne(collectionname, params);
```

##### findOneAndUpdate - return promise with updated object

```JS
database.findOneAndUpdate(collectionname, paramsfind, paramsupdate);
```

##### updateOne - return promise with array of all results

```JS
database.updateOne(collectionname, paramsfind, paramsupdate);
```
