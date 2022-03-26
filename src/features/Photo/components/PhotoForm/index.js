import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import { FastField, Form, Formik } from 'formik'
import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField'
import RandomPhotoField from 'custom-fields/RandomPhotoField'

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: '',
    photo: ''
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log('Values submit: ', values)}
    >
      {formikProps => {
        const { values, errors, touched } = formikProps;
        console.log({values, errors, touched});

        return (
          <Form>
            <FastField 
              name="title"
              component={InputField}

              label="Title"
              placeholder="Write your pic name"
            />

            <FastField 
              name="categoryId"
              component={SelectField}

              label="Categry"
              placeholder="Choose your group photos"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField 
              name="photo"
              component={RandomPhotoField}
              
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color='primary'>Add to album</Button>
            </FormGroup>
          </Form>
        )
      }}
    </Formik>
  )
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
  onSubmit: null
}

export default PhotoForm
