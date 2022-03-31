import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Spinner } from 'reactstrap'
import { PHOTO_CATEGORY_OPTIONS } from 'constants/global'
import { FastField, Form, Formik } from 'formik'
import InputField from 'custom-fields/InputField'
import SelectField from 'custom-fields/SelectField'
import RandomPhotoField from 'custom-fields/RandomPhotoField'
import * as Yup from 'yup'

function PhotoForm(props) {
  const { initialValues, isEditForm } = props;

  const validationSchema = Yup.object().shape({
    
    title: Yup.string().required('This field is require!!!'),

    categoryId: Yup.number().required('This field is required!!').nullable(),

    photoUrl: Yup.string().required('This field is require!'),
  });
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {formikProps => {
        const { values, errors, touched, isSubmitting } = formikProps;
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

              label="Category"
              placeholder="Choose your group of photo"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField 
              name="photoUrl"
              component={RandomPhotoField}
              
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color={ isEditForm ? 'success' : 'primary'}>
                  {isSubmitting && <Spinner size='sm' />}
                  { isEditForm ? 'Update your photo' : 'Add to album'}
              </Button>
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
