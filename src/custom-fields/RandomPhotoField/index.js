import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';
import { ErrorMessage } from 'formik';

function RandomPhotoField(props) {
    const {
        field, form,
        label,
    } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    
    const handleRandomPhotoChange = (newImgUrl) => {
        form.setFieldValue(name, newImgUrl);
    }
    
    return (
        <FormGroup>
            {label && <Label name={name}>{label}</Label>}

            <RandomPhoto 
                {...field}
                onChange={handleRandomPhotoChange}
            />

            <div className={showError ? 'is-invalid' : ''}></div>            
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    )
}

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
}

RandomPhotoField.defaultProps = {
    label: 'text',
}

export default RandomPhotoField
