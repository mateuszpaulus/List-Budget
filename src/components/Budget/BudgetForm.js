import React from 'react';
export const BudgetForm = ({
  name,
  sum,
  handleName,
  handleSum,
  handleSubmit,
  isEditing
}) => { 
  return (
    <form onSubmit={handleSubmit} className='form'> 
      <div className='form-control'>
        <input 
          type='text' 
          className='input' 
          id='name'
          name='name'
          placeholder='e.g. expenses'
          value={name}
          onChange={handleName}
        />
        
        
      </div>
      <div className='form-control'>
        <input 
          type='number' 
          className='input' 
          id='sum'
          name='sum'
          placeholder='e.g. 100'
          value={sum}
          onChange={handleSum}
        />
      </div>
      <button 
        type='submit' 
        className='submit-btn-bud'
        >
          {isEditing ? 'edit' : "submit"}
        </button>
    </form> 
  );
};
