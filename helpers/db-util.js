import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://amihapsari:SIkkDsICo9iFUSBR@cluster0.wq6iu.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort){
    const db = client.db();
    // -1 = decending orders
    const documents = await db
      .collection(collection)
      .find()
      .sort(sort)
      .toArray();

    return documents;
}
