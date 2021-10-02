import React, { useState } from 'react';
import sendDataForm from '../axios/sendDataForm';

const INITARRAY = {
    name: '',
    email: 'hello@',
    date: '',
    hour: '',
    howP: Number(0),
    phone: ''
};

const OPTIONS = [
    {"id": 1, "value": "12:00"},
    {"id": 2, "value": "13:00"},
    {"id": 3, "value": "14:00"},
    {"id": 4, "value": "15:00"},
    {"id": 5, "value": "16:00"},
    {"id": 6, "value": "17:00"},
    {"id": 7, "value": "18:00"},
    {"id": 8, "value": "19:00"},
    {"id": 9, "value": "20:00"}
]

const Form = () => {

    const [values, setValues] = useState(INITARRAY);
    const [validations, setValidations] = useState({
        name: '',
        email: '',
        date: '',
        hour: '',
        howP: '',
        phone: ''
    });

    const validateAll = () => {
        let isValid = true;

        return isValid;
    };

    const validateOne = (e) => {
        const { name } = e.target;
        const value = values[name];
        let msgIssue = '';

        if (!value) {
            msgIssue = `${name} es necesario`;
        };

        if ( value && name === 'name' && (value.length <5 || value.length > 30) ) {
            msgIssue = 'Nombre debe contener entre 5 y 30 carácteres';
        };

        if ( value && name === 'email' && (!/\S+@\S+\.\S+/.test(value)) ) {
            msgIssue = 'Email debe ser como hello@mail.com';
        };

        if ( value && name === 'date' && (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) ) {
            msgIssue = 'Fecha no es válida';
        };

        if ( value && name === 'hour' && (value === 'Selecciona una hora') ) {
            msgIssue = 'Hora no valida';
        };

        if ( value && name === 'howP' && (Number(value) === 0) ) {
            msgIssue = 'Indica número valido de personas';
        };

        if ( value && name === 'phone' && (!(value.length === 10) || (!/^[0-9]+$/.test(value))) ) {
            msgIssue = 'Telefono debe ser número de 10 dígitos';
        };

        setValidations( {...validations, [name]: msgIssue} );
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setValues( {...values, [name]: value} );
    };

    const handleSubmit = e => {
        e.preventDefault();

        const isValid = validateAll();
        if (!isValid) return false;

        sendDataForm(values);
        setValues(INITARRAY);

        alert('¡Su reservación fue exitosa!');
    };

    const { name, email, date, hour, howP, phone } = values;
    const {
        name: nameValid,
        email: emailValid,
        date: dateValid,
        hour: hourValid,
        howP: howPValid,
        phone: phoneValid
    } = validations;

    return (
        <div className="px-6 mb-3">
            <div className="columns">
                <form onSubmit={handleSubmit} id="form-reserve" className="column is-half is-offset-one-quarter is-box-responsive">
                    <div className="is-box-mobile">
                        <div className="is-flex is-justify-content-center">
                            <h1 className="title is-3">RESERVACIONES</h1>
                            <br/>
                        </div>
                        <div className="field">
                            <label className="label">Nombre Completo</label>
                            <div className="control">
                                <input className="input is-primary is-rounded" type="text" name="name" value={name} onChange={handleChange} onBlur={validateOne} placeholder="Name input" />
                            </div>
                            <p className="help is-danger">{nameValid}</p>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input is-primary is-rounded" type="email" name="email" value={email} onChange={handleChange} onBlur={validateOne} placeholder="Email input" />
                            </div>
                            <p className="help is-danger">{emailValid}</p>
                        </div>

                        <div className="columns">
                            <div className="column field">
                                <label className="label">Fecha</label>
                                <div className="control">
                                    <input className="input is-rounded" type="date" name="date" value={date} onChange={handleChange} onBlur={validateOne} placeholder="0" />
                                </div>
                                <p className="help is-danger">{dateValid}</p>
                            </div>
                            <div className="column field">
                                <label className="label">Hora</label>
                                <div className="control">
                                    <div className="select is-fullwidth is-rounded">
                                    <select name="hour" value={hour} onChange={handleChange} onBlur={validateOne}>
                                        <option defaultValue>Selecciona una hora</option>
                                        {OPTIONS.map(opt => {
                                            return (
                                                <option key={opt.id} value={opt.value}>{opt.value}</option>
                                            );
                                        })}
                                    </select>
                                    </div>
                                </div>
                                <p className="help is-danger">{hourValid}</p>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column field">
                                <label className="label">¿Cuántas personas?</label>
                                <div className="control">
                                    <input className="input is-rounded" type="number" name="howP" value={howP} onChange={handleChange} onBlur={validateOne} placeholder={Number(0)} />
                                </div>
                                <p className="help is-danger">{howPValid}</p>
                            </div>
                            <div className="column field">
                                <label className="label">Teléfono</label>
                                <div className="control">
                                    <input className="input is-rounded" type="phone" name="phone" value={phone} onChange={handleChange} onBlur={validateOne} placeholder="Phone input" />
                                </div>
                                <p className="help is-danger">{phoneValid}</p>
                            </div>
                        </div>

                        <div className="field control">
                            <button type="submit" className="button is-primary is-fullwidth is-rounded">Reservar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
