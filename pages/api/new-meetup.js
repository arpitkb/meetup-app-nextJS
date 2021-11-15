import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, address, image, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://arpitkb:qJtHY6V3ydVpA0LZ@cluster0.whrlr.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const resp = await meetupCollection.insertOne(data);
    // console.log(resp);
    client.close();
    res.status(201).json({ message: "Data inserted" });
  }
}

export default handler;
