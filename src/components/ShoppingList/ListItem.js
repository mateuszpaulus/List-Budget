import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
export const ListItem = ({ items, removeTask, editTask }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='item-list' key={id}>
            <p className='description'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => editTask(id)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => removeTask(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
          );
        })}
    </div>
  );
};
