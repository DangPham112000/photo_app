import Banner from 'components/Banner';
import Images from 'constants/images';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePhotoEditClick = (photo) => {
        const photoUrl = `/photos/${photo.id}`;
        navigate(photoUrl);
    }
    
    const handlePhotoRemoveClick = (photo) => {
        const actionRemove = removePhoto(photo.id);
        dispatch(actionRemove);
        navigate('/photos');
    }

    return (
        <div className='photo-main'>
            <Banner title='Ngon Lanh' backgroundUrl={Images.ORANGE_BG} />

            <Container className='text-center'>
                <div className='py-5'>
                    <Link to='/photos/add' >Add new photo</Link>
                </div>

                <PhotoList
                    photos={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>

        </div>
    );
}

export default MainPage;