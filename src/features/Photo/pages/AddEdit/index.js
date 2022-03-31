import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss';

function AddEditPage(props) {
    const { photoId } = useParams();
    const isEditForm = !!(photoId);    
    
    const photoEdit = useSelector(state => state.photos.find(photo => photo.id === +photoId));
    const initialValues = isEditForm 
        ? photoEdit 
        : {
            title: '',
            categoryId: '',
            photoUrl: ''
        }; 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmitForm = values => {
        return new Promise(resolve => {
            console.log('Form submit: ', values);
            
            setTimeout(() => {
                const id = 20 + Math.trunc(Math.random() * 2000);
                const newValues = {...values, id};
                if (!isEditForm) {
                    const actionAdd = addPhoto(newValues);
                    dispatch(actionAdd);
                } else {
                    const actionUpdate = updatePhoto(values);
                    dispatch(actionUpdate); 
                }
                
                navigate('/photos');
                resolve(true);
            }, 3000);
        });
    }
    
    return (
        <div className='photo-edit'>
            <Banner title='Pick your photo' />

            <div className='photo-edit__form'>
                <PhotoForm onSubmit={handleSubmitForm} initialValues={initialValues} isEditForm={isEditForm} />
            </div>
        </div>
    );
}

export default AddEditPage;