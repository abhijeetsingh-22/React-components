import React from 'react';

const ListItem = ({ title, isactive, handleActiveChange }) => {
  function handleClick(e) {
    e.preventDefault();
    handleActiveChange(e.target.textContent);
  }

  return (
    <>
      <button
        className={`list-group-item list-group-item-action ${isactive}`}
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};

export default ListItem;
