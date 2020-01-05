import React from 'react';

const List = () => {
  return (
    <label className="list-item">
      <div className="list-item__container">
        <input 
          type="checkbox"
        />
        <span>task 1</span>
      </div>
      <button className="button button--text">remove</button>
    </label>
  )
}

export default List;