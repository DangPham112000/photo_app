import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Label } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import Images from 'constants/images'
import { FastField, Form, Formik } from 'formik'
import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField'

function PhotoForm(props) {
  const initialValues = {
    title: '',
  };
  
  return (
    <Formik
      initialValues={initialValues}
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

            <FormGroup>
              <Label>Photo</Label>

              <div>
                <Button type='button' color='primary' outline>Random a photo</Button>
              </div>
              <div>
                <img width='200px' height='200px' src={Images.BLUE_BG} alt='blue' />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color='primary'>Add to album</Button>
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
