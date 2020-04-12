import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyPress, colors}) => {
    const selected_color = colors.filter(elem => elem.selected)[0].color;
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} style={{'color' : selected_color }}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;