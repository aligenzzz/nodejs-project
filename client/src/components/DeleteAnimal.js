import React from 'react'
import '../site.css'

const DeleteAnimal = ({ onSubmit, onCancel }) => {
  return (
    <form>
      <p>Are you sure you want to delete this animal?</p>
      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="button" onClick={onSubmit}>Delete Animal</button>
    </form>
  );
};

export default DeleteAnimal