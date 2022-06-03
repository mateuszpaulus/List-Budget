import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'
import { HomeListItem } from './HomeListItem';
import { Alert } from './Alert';

const getLocalStorage = localStorage.getItem('list') 
? JSON.parse(localStorage.getItem('list')) 
: [];

export const HomeListMain = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState(getLocalStorage);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    // functionality
    const onSubmit = (e) => {
        e.preventDefault();
        if (!task) {
        showAlert(true, 'danger', 'please enter task');
        } else if (isEditing) {
        setList(
            list.map((item) => {
            if (item.id === editId) {
                return { ...item, title: task };
            }
            return item;
            })
        );
        setTask('');
        setEditId(null);
        setIsEditing(false);
        showAlert(true, 'success', 'task changed');
        } else {
        showAlert(true, 'success', 'task added');
        const newTask = { id: uuid(), title: task };
        setList([...list, newTask]);
        setTask('');
        }
    };
    const showAlert = (show = false, type = '', message = '') => {
        setAlert({ show, type, message });
    };
    const clearList = () => {
        showAlert(true, 'danger', 'all list removed');
        setList([]);
    };
    const removeTask = (id) => {
        showAlert(true, 'danger', 'item removed');
        setList(list.filter((item) => item.id !== id));
    };
    const editTask = (id) => {
        const specificTask = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditId(id);
        setTask(specificTask.title);
    };
    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);
    return (
        <section className='section'>
            <form className='form' onSubmit={onSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                <h3>Home List</h3>
                <div className='form-action'>
                    <input
                        type='text'
                        className='input'
                        placeholder='e.g. task'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type='submit' className='submit-btn'>
                        {isEditing ? 'edit' : 'submit'}
                    </button>
                </div>
            </form>
            {list.length > 0 && (
                <div className='list'>
                    <HomeListItem items={list} removeTask={removeTask} editTask={editTask} />
                    <button className='clear-btn' onClick={clearList}>
                        Clear Tasks
                    </button>
                </div>
            )}
        </section>
    );
}
