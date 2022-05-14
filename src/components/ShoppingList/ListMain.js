import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid'
import { ListItem } from './ListItem';
import { Alert } from './Alert';

const getLocalStorage = localStorage.getItem('list') 
? JSON.parse(localStorage.getItem('list')) 
: [];

export const ListMain = () => {
    const [task, setTask] = useState('');
    const [list, setList] = useState(getLocalStorage);
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);
    const [alert, setAlert] = useState({ show: false, message: '', type: '' });

    // functionality
    const handleSubmit = (e) => {
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
        <section className='section-center'>
            <form className='form' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                <h3>home list</h3>
                <div className='form-control'>
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
                <div className='list-container'>
                    <ListItem items={list} removeTask={removeTask} editTask={editTask} />
                    <button className='clear-btn' onClick={clearList}>
                        clear tasks
                    </button>
                </div>
            )}
        </section>
    );
}
