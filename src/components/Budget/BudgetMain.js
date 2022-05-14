import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { Alert } from './Alert';
import { BudgetForm } from './BudgetForm';
import { BudgetList } from './BudgetList';


const getLocalStorage = localStorage.getItem('costs') 
? JSON.parse(localStorage.getItem('costs')) 
: [];

export const BudgetMain = () => {
  const [costs, setCosts ] = useState(getLocalStorage);
  const [name, setName] = useState('');
  const [sum, setSum] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // functionality
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSum = (e) => {
    let sum = e.target.value;
    if (sum === '') {
      setSum(sum);
    } else {
      setSum(parseInt(sum))
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== "" && sum > 0) {
      if (isEditing) {
        setCosts(
          costs.map((item) => {
            return (
              item.id === editId ? {...item, name, sum} : item
            )
          })
        );
        setIsEditing(false);
        showAlert(true, 'success', 'cost changed')
      } else {
        const newCosts = {
          id: uuid(),
          name,
          sum
        };
        setCosts([...costs, newCosts]);
        showAlert(true, 'success', 'cost added')
      }
      setName('');
      setSum('');
    } else {
      showAlert(
        true,
        'danger', 
        `Name can't be empty value and sum value must be greater than zero`);
    }
  };
  const showAlert = (show = false, type = '', message = '') => {
          setAlert({ show, type, message });
      };
  const clearCosts = () => {
    setCosts([]);
    showAlert(true, 'danger', 'all costs removed')
  }
  const removeCost = (id) => {
    setCosts(costs.filter(item => item.id !== id));
    showAlert(true, 'danger', 'cost removed' );
  };
  const editCost = (id) => {
    let expense = costs.find(item => item.id === id );
    let { name, sum } = expense;
    setName(name);
    setSum(sum);
    setIsEditing(true);
    setEditId(id);
  }
  useEffect(() => {
  localStorage.setItem('costs', JSON.stringify(costs))
},[costs])
  return (
    <section className='section-center'>
      {alert.show && <Alert {...alert} removeAlert={showAlert} costs={costs} />}
      <h3>budget</h3>
      <BudgetForm 
        name={name} 
        sum={sum} 
        handleSum={handleSum}
        handleName={handleName}
        handleSubmit={handleSubmit}
        isEditing={isEditing}
      />
      <BudgetList 
        costs={costs}
        removeCost={removeCost}
        editCost={editCost}
        clearCosts={clearCosts}
      />
      <h3> 
        total spending :  
        <span>
          $ 
          {costs.reduce((acc,curr) => {
            return acc += curr.sum
          },0)}
        </span>
      </h3>
    </section>
  )
}
