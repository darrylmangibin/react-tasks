import React from 'react';

const Actions = () => {
  return (
    <div className="actions">
      <div className="actions__container">
        <input 
          className="input" 
          type="text" 
          placeholder="Filter Task"
        />
        <label className="checkbox">
          <input 
            type="checkbox"
          /> Hide completed
        </label>
      </div>
    </div>
  )
}

export default Actions;