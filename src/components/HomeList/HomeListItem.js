import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
export const HomeListItem = ({ items, removeTask, editTask }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='item-list' key={id}>
            <p className='title'>{title}</p>
            <div>
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
