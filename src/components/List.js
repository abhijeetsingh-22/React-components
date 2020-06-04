import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';

const List = ({ itemsList, title, setCurrentSelection, fixed, selected }) => {
  useEffect(() => {
    setItems(itemsList);
  }, [itemsList]);

  const handleActiveChange = (itemClicked) => {
    fixed
      ? setCurrentSelection({ add: itemClicked, delete: null })
      : setCurrentSelection({ delete: itemClicked, add: null });
  };
  var [items, setItems] = useState(itemsList);
  var ListItems = items.map((item) => {
    return (
      <ListItem
        title={item}
        key={item}
        isactive={selected === item ? 'active' : ''}
        handleActiveChange={handleActiveChange}
      />
    );
  });
  console.log(title);
  return (
    <>
      <div className="col-md-5">
        <h2> {title}</h2>
        <div className="list-group">{ListItems}</div>
      </div>
    </>
  );
};

export default List;
