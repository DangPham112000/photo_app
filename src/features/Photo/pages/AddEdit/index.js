import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.scss'

function AddEditPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmitForm = values => {
        return new Promise(resolve => {
            console.log('Form submit: ', values);

            setTimeout(() => {
                const actionAdd = addPhoto(values);
                dispatch(actionAdd);
        
                navigate('/photos');
                resolve(true);
            }, 3000);
        });
    }
    
    return (
        <div className='photo-edit'>
            <Banner title='Pick your photo' />

            <div className='photo-edit__form'>
                <PhotoForm onSubmit={handleSubmitForm} />
            </div>
        </div>
    );
}

export default AddEditPage;