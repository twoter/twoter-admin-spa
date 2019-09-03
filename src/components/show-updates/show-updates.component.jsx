import React from "react";

import { UpdateItem } from "../update-item";

const ShowUpdates = ({ updates }) => {
  return 0 === updates.length ? (
    <div>No updates found.</div>
  ) : (
    updates.map(u => <UpdateItem key={u.id} update={u} />)
  );
};

export default ShowUpdates;
