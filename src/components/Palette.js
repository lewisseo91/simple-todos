import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.colors !== nextProps.colors;
    }

    render () {
        const { colors, onChange } = this.props;
        const colorButtons = colors.map(({id, color}) => (
            <div
                className={'span_c ' +color}
                style={{background : color}}
                onClick={()=>{onChange(color)}}
                key={id}
            ></div>
        ));
        return (
            <div className="palette-container">
                {colorButtons}
            </div>
        );
    }
}

export default Palette;