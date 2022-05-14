import React, { useEffect } from 'react';

export const Alert = ({ type, message, removeAlert, costs }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 3000);
        return () => clearTimeout(timeout);
    }, [costs]);
    return <p className={`alert alert-${type}`}>{message}</p>;
};
