import React from 'react';

const PasswordValidator = ({ password }) => {
    const validations = [
        {
            regex: /[a-z]/,
            message: 'At least 1 lowercase letter',
            valid: false,
        },
        {
            regex: /[A-Z]/,
            message: 'At least 1 uppercase letter',
            valid: false,
        },
        {
            regex: /\d/,
            message: 'At least 1 number',
            valid: false,
        },
        {
            regex: /[!@#$%^&*(),.?":{}|<>]/,
            message: 'At least 1 special character',
            valid: false,
        },
        {
            regex: /^.{8,42}$/,
            message: 'Must have 8-42 characters',
            valid: false,
        }
    ];

    validations.forEach(validation => {
        validation.valid = validation.regex.test(password);
    });

    return (
        <div className="password-validator">
            <h4>Password requirements:</h4>
            <ul>
                {validations.map((validation, index) => (
                    <li key={index} className={validation.valid ? 'text-success' : 'text-danger'}>
                        <i className={`fas ${validation.valid ? 'fa-check' : 'fa-times'}`}></i> {validation.message}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PasswordValidator;
