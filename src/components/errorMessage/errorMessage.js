import React from 'react';
import './errorMessage.css';
import img from './error404.jpg';
const ErrorMessage = () => {
    return (
        <div className="error">
            <img src={img} alt='error'></img>
            <p>Ошибка запроса</p>
        </div>
    )
}

export default ErrorMessage;