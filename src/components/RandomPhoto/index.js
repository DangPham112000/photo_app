import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import './RandomPhoto.scss'

const getRandomImageUrl = () => {
    const id = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${id}/300/300`
}

function RandomPhoto(props) {
    const { name, value, onChange, onBlur } = props;
    
    const handleClickRandomButton = () => {
        if (onChange) {
            const newImgUrl = getRandomImageUrl();
            // mong muốn hàm onchange ở trên gửi xuống khi kích hoạt với tham số newImgUrl sẽ cập nhật lại value cho field
            onChange(newImgUrl);
        }
    }
    
    return (
        <div className='random-photo'>
            <div className='random-photo__button'>
                <Button 
                    type='button'
                    color='primary'
                    outline

                    name={name}
                    onBlur={onBlur}
                    onClick={handleClickRandomButton}
                >
                    Random a photo
                </Button>
            </div>
            <div className='random-photo__image'>
                {value && (
                    <img 
                        src={value} 
                        alt='Ooops ... not found. Please random again' 
                        onError={handleClickRandomButton}
                    />
                )}
            </div>
        </div>
    )
}

RandomPhoto.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}

RandomPhoto.defaultProps = {
    name: '',
    value: '',
    onChange: null,
    onBlur: null,
}

export default RandomPhoto
