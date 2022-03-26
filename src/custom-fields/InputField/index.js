import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Input, Label } from 'reactstrap'

function InputField(props) {
    const {
        field,
        type, label, placeholder, disabled
    } = props;
    const { name, value, onChange, onBlur } = field;

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}

                placeholder={placeholder}
                type={type}
                disabled={disabled}
            />
        </FormGroup>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
}

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

export default InputField
