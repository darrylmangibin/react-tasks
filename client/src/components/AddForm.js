import React from 'react';

const AddForm = () => {
  return (
    <form id="new-task">
      <input 
        type="text" 
        className="input" 
        placeholder="Something" 
        name="text"
      />
      <button className="button">Add Task</button>
    </form>
  )
}

export default AddForm;