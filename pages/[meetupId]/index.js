import React from "react";
import { MongoClient, ObjectId } from "mongodb";

function meetupDetail(props) {
  return (
    <>
      <h2>Details</h2>
      <h5>Title : {props.title}</h5>
      <h5>Description : {props.description}</h5>
      <h5>Address : {props.address}</h5>
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://arpitkb:qJtHY6V3ydVpA0LZ@cluster0.whrlr.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const ids = await meetupCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    paths: ids.map((el) => ({ params: { meetupId: el._id.toString() } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://arpitkb:qJtHY6V3ydVpA0LZ@cluster0.whrlr.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollection = db.collection("meetups");

  const meetup = await meetupCollection.findOne({ _id: ObjectId(meetupId) });
  console.log(meetup);

  return {
    props: {
      title: meetup.title,
      address: meetup.address,
      description: meetup.description,
    },
  };
}

export default meetupDetail;
