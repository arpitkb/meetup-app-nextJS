import React from "react";

import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map((m) => (
        <MeetupItem
          key={m.id}
          id={m.id}
          img={m.image}
          title={m.title}
          address={m.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
