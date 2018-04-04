import React from 'react';

import Card from './Card';

const CardsList = ({clients}) => {
  return clients.map((item, i) => {
    return <Card key={i} general={item.general} job={item.job} />
  });
}

export default CardsList;
