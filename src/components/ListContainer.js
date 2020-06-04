import React, { useState } from 'react';
import List from './List';

const ListContainer = () => {
  var [selected, setSelected] = useState({ add: null, delete: null });
  var [secondListItems, setSecondListItems] = useState(['npm']);

  const handleAdd = (e) => {
    e.preventDefault();
    setSecondListItems([...secondListItems, selected.add]);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    var updatedlist = secondListItems.filter(
      (item) => item !== selected.delete
    );
    setSecondListItems(updatedlist);
  };

  const setCurrentSelection = (activeItem) => {
    setSelected(activeItem);
  };
  return (
    <>
      {/* <div className="container d-flex vh-100 justify-content-around align-items-center"> */}
      <div className=" container   ">
        <div className="row align-items-center vh-100">
          <List
            title={'Fixed List'}
            itemsList={[
              'Learn React',
              //   'Learn Node.js,Learn React',
              //   'Learn Node.jsLearn React',
              //   'Learn Node.js',
              //   'Learn Node.js',
              //   'Learn React',
              'Learn Node.js',
            ]}
            setCurrentSelection={setCurrentSelection}
            selected={selected.add}
            fixed
          />
          <div className="col-md-2 d-flex flex-column">
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
            title={'Editable List'}
            selected={selected.delete}
            setCurrentSelection={setCurrentSelection}
          />
        </div>
      </div>
    </>
  );
};

export default ListContainer;
