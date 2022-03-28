import React from 'react'
import PropTypes from 'prop-types'
import PhotoCard from '../PhotoCard';
import { Col, Row } from 'reactstrap';

function PhotoList(props) {
    const { onPhotoEditClick, onPhotoRemoveClick, photos } = props;

    return (
        <Row>
            {photos && photos.length > 0 &&
                photos.map((photo) => {
                    return (
                        <Col key={photo.id} xs="12" sm="6" lg="2">
                            <PhotoCard
                                photo={photo}
                                onPhotoEditClick={onPhotoEditClick}
                                onPhotoRemoveClick={onPhotoRemoveClick}
                            />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

PhotoList.propTypes = {
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
    photos: PropTypes.array,
}

PhotoList.defaultProps = {
    onPhotoEditClick: null,
    onPhotoRemoveClick: null,
    photos: [],
}

export default PhotoList
