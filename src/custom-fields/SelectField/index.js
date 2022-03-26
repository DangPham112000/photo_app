import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap'
import Select from 'react-select'

function SelectField(props) {
    const {
        field,
        label, placeholder, disabled, options
    } = props;
    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value)
    
    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }
    
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Select
                id={name}
                { ...field }
                onChange={handleSelectedOptionChange}
                value={selectedOption}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
            />
        </FormGroup>
    )
}

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
}

SelectField.defaultProps = {
    label: 'text',
    placeholder: '',
    disabled: false,
    options: [],
}

export default SelectField
