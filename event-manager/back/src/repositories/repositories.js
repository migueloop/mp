import { MongoClient, ObjectID } from 'mongodb';
import config from 'config';

let loaded = false;
let database = null;
const url = `mongodb://${config.get('db.url')}:${config.get('db.port')}/workflow`;

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  }
  loaded = true;
  database = db;
});

export function find(collectionName, params) {
  if (!loaded) {
    return new Promise((resolve, reject) => setTimeout(() => find(collectionName, params).then(resolve).catch(reject), 200));
  }
  return new Promise((resolve, reject) => {
    const collection = database.collection(collectionName);
    collection
      .find(params)
      .toArray((err, docs) => {
        if (err) {
          reject(err);
        }
        resolve(docs);
      });
  });
}

export function findOne(collectionName, params) {
  console.log('-----------------------', collectionName, params);
  return find(collectionName, params).then(docs => {
    if (docs.length === 0) {
      const error = new Error('not found');
      error.code = 404;
      return Promise.reject(error);
    }
    return Promise.resolve(docs[0]);
  });
}

export function insert(collectionName, document) {
  if (!loaded) {
    return new Promise((resolve, reject) => setTimeout(() => insert(collectionName, document).then(resolve).catch(reject), 200));
  }
  return new Promise((resolve, reject) => {
    const collection = database.collection(collectionName);
    collection.insert(document, (err, inserted) => {
      if (err) {
        reject(err);
        return;
      };
      resolve(Object.assign({
        _id: inserted.ops['0']._id,
      }, document));
    });
  });
}

export function updateOne(collectionName, filter, document) {
  if (!loaded) {
    return new Promise((resolve, reject) => setTimeout(() => updateOne(collectionName, filter, document).then(resolve).catch(reject), 200));
  }
  return new Promise((resolve, reject) => {
    const collection = database.collection(collectionName);
    collection.updateOne(filter, document, (err) => {
      if (err) return reject(err);
      resolve(document);
    });
  });
}

export function deleteOne(collectionName, filter) {
  if (!loaded) {
    return new Promise((resolve, reject) => setTimeout(() => deleteOne(collectionName, filter).then(resolve).catch(reject), 200));
  }
  return new Promise((resolve, reject) => {
    const collection = database.collection(collectionName);
    collection.deleteOne(filter, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}
