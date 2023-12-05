import React from 'react'
import '../site.css'

const EditAnimal = ({ onSubmit, onCancel }) => {
  return (
    <form>
      <input type="text" placeholder="Enter updated animal details" />
      
      <button onClick={onSubmit}>Update Animal</button>
      <a className='simpleLink' onClick={onCancel}>Cancel</a>
    </form>
  );
};

export default EditAnimal