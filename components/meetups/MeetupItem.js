import React from "react";

import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  const detailHandler = () => {
    router.push(`/${props.id}`);
  };

  return (
    <li>
      <div>
        <div>
          <img src={props.img} alt="image not available" />
        </div>
        <div>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div>
          <button onClick={detailHandler}>Show details</button>
        </div>
      </div>
    </li>
  );
}

export default MeetupItem;
