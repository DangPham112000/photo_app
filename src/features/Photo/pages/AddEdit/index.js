import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import React from 'react';
import './styles.scss'

function AddEditPage(props) {
    return (
        <div className='photo-edit'>
            <Banner title='Pick your photo' />

            <div className='photo-edit__form'>
                <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
            </div>
        </div>
    );
}

export default AddEditPage;