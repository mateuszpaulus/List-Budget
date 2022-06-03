import React from 'react';
export const BudgetForm = ({
  name,
  sum,
  onChangeName,
  onChangeSum,
  onSubmit,
  isEditing
}) => { 
  return (
    <form onSubmit={onSubmit} className='form'> 
      <div className='form-action'>
        <input 
          type='text' 
          className='input-bud' 
          id='name'
          name='name'
          placeholder='e.g. expenses'
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div className='form-action'>
        <input 
          type='number' 
          className='input-bud' 
          id='sum'
          name='sum'
          placeholder='e.g. 100'
          value={sum}
          onChange={onChangeSum}
        />
      </div>
      <button 
        type='submit' 
        className='submit-btn-bud'
        >
          {isEditing ? 'edit' : 'submit'}
        </button>
    </form> 
  );
};
