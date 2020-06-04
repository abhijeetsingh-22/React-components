import React, { useState } from 'react';
import List from './List';

const ListContainer = () => {
  var [selected, setSelected] = useState({ add: null, delete: null });
  var [secondListItems, setSecondListItems] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    setSecondListItems([...secondListItems, selected.add]);
    setSelected({ add: null, delete: null });
  };
  const handleDelete = (e) => {
    e.preventDefault();
    var updatedlist = secondListItems.filter(
      (item) => item !== selected.delete
    );
    setSecondListItems(updatedlist);
    setSelected({ add: null, delete: null });
  };

  const setCurrentSelection = (activeItem) => {
    setSelected(activeItem);
  };
  return (
    <>
      {/* <div className="container d-flex vh-100 justify-content-around align-items-center"> */}
      <div className=" container vh-100">
        <div className="row h-100 ">
          <List
            title={'All Roles or skill sets'}
            itemsList={['Admin', 'Superviser', 'User', 'Spanish speaking']}
            setCurrentSelection={setCurrentSelection}
            selected={selected.add}
            fixed
          />
          <div className="col-md-2 d-flex flex-column my-auto">
            <button
              className="btn btn-primary m-2"
              disabled={selected.add ? false : true}
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              className="btn btn-danger m-2"
              disabled={selected.delete ? false : true}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <List
            itemsList={secondListItems}
            title={'Available roles'}
            selected={selected.delete}
            setCurrentSelection={setCurrentSelection}
          />
        </div>
      </div>
    </>
  );
};

export default ListContainer;
