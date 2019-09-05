import React from 'react';

import { UpdateItem } from '../update-item';

const ShowUpdates = ({ updates }) => {
  return updates.map(u => <UpdateItem key={u.id} update={u} />);
};

export default ShowUpdates;
