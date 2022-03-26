import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap';
import RandomPhoto from 'components/RandomPhoto';

function RandomPhotoField(props) {
    const {
        field, form,
        label,
    } = props;
    const { name } = field;
    
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
