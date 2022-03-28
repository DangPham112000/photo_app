import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap';
import './PhotoCard.scss'

function PhotoCard(props) {
    const { photo, onPhotoEditClick, onPhotoRemoveClick } = props;
    const { title, photoUrl } = photo;

    return (
        <div className='photo'>
            <img className='photo__img' src={photoUrl} alt={`Opps... not found ${title}`} />

            <div className='photo__overlay'>
                <h2 className='photo__title'>{title}</h2>
                <div className='photo__controls'>
                    <Button outline size="sm" color="light" onClick={() => onPhotoEditClick(photo)}>Edit</Button>
                    <Button outline size="sm" color="danger" onClick={() => onPhotoRemoveClick(photo)}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
}

PhotoCard.defaultProps = {
    photo: {},
    onPhotoEditClick: null,
    onPhotoRemoveClick: null,
}

export default PhotoCard
