import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import Select from 'react-select'
import { ErrorMessage } from 'formik';

function SelectField(props) {
    const {
        field, form,
        label, placeholder, disabled, options
    } = props;
    const { name, value } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const selectedOption = options.find(option => option.value === value);

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

    const errorStyle = {
        control: base => ({
            ...base,
            border: '1px solid red',
        })
    };

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <Select
                id={name}
                {...field}
                onChange={handleSelectedOptionChange}
                value={selectedOption}

                placeholder={placeholder}
                isDisabled={disabled}
                options={options}

                className={showError ? 'is-invalid' : ''}
                styles={showError ? errorStyle : {}}
            />

            <ErrorMessage name={name} component={FormFeedback} />
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
