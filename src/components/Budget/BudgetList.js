import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
export const BudgetList = ({costs, clearCosts, removeCost,editCost}) => {
  return (
    <div className='list-container'>
      {costs.map((item) => {
        const { id, name, sum} = item;
          return (
            <article className='item-list' key={id}>
              <p className='description'>{name}</p>
              <p className='description'>${sum}</p>  
              <div className='btn-container'>
                <button 
                  className='edit-btn' 
                  type='button'
                  onClick={() => editCost(id)}
                >
                  <FaEdit />
                </button>
                <button 
                  className='delete-btn' 
                  type='button'
                  onClick={() => removeCost(id)}
                >
                  <FaTrash/>
                </button>
              </div>
            </article>
          )
        })}
                {costs.length > 0 && (
          <button className='clear-btn' onClick={clearCosts}>
            clear costs
          </button>
      )}
    </div>
  )
}
