import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Images from '../../../../constants/images'
import Select from 'react-select'
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global'

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for='titleId'>Title</Label>
        <Input name='title' id='titleId' placeholder='Write your pic name' />
      </FormGroup>

      <FormGroup>
        <Label for='categoryId'>Category</Label>
        <Select
          id='categoryId'
          name='categoryId'
          placeholder='Choose category you want'
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>

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
}

PhotoForm.propTypes = {
  onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
  onSubmit: null
}

export default PhotoForm
